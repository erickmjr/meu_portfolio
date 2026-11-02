import { useFrame, useThree } from '@react-three/fiber';
import {
    useCallback,
    useLayoutEffect,
    useMemo,
    useRef,
    type RefObject,
} from 'react';
import { Color, type InstancedMesh, type MeshStandardMaterial } from 'three';
import {
    criarEventos,
    criarFluxo,
    desviar,
    escreverMatriz,
    lerCores,
    medirObstaculo,
    type Interacao,
    type Obstaculo,
} from './simulacao';

const MAX_ESFERAS = 650;
const MAX_EVENTOS = 160;
const EVENTOS_POR_CLIQUE = 16;
const RAIO_PONTEIRO = 130;
const SAIDA = 24;

type CenaProps = {
    areaRef: RefObject<HTMLElement | null>;
    obstaculosRefs: RefObject<HTMLElement | null>[];
    interacaoRef: RefObject<Interacao>;
};

const Cena = ({ areaRef, obstaculosRefs, interacaoRef }: CenaProps) => {
    const largura = useThree((estado) => estado.size.width);
    const altura = useThree((estado) => estado.size.height);

    const fluxoRef = useRef<InstancedMesh>(null);
    const eventosRef = useRef<InstancedMesh>(null);
    const fluxo = useMemo(() => criarFluxo(MAX_ESFERAS), []);
    const eventos = useMemo(() => criarEventos(MAX_EVENTOS), []);
    const obstaculos = useRef<Obstaculo[]>([]);
    const ultimaLargura = useRef(0);
    const quadro = useRef(0);

    // Densidade proporcional à área, para o celular não ficar lotado.
    const quantidade = Math.round(
        Math.min(MAX_ESFERAS, Math.max(90, (largura * altura) / 3000)),
    );

    const aplicarCores = useCallback(() => {
        const malhaFluxo = fluxoRef.current;
        const malhaEventos = eventosRef.current;
        if (!malhaFluxo || !malhaEventos) return;

        const { papel, tinta, sinal } = lerCores();
        // A mistura em sRGB mantém o tom azul-marinho; em linear vira cinza.
        const papelSrgb = papel.clone().convertLinearToSRGB();
        const tintaSrgb = tinta.clone().convertLinearToSRGB();
        const cor = new Color();

        for (let i = 0; i < MAX_ESFERAS; i++) {
            if (fluxo.evento[i]) cor.copy(sinal);
            else
                cor.copy(papelSrgb)
                    .lerp(tintaSrgb, 0.1 + fluxo.camada[i] * 0.5)
                    .convertSRGBToLinear();
            malhaFluxo.setColorAt(i, cor);
        }

        if (malhaFluxo.instanceColor)
            malhaFluxo.instanceColor.needsUpdate = true;
        (malhaEventos.material as MeshStandardMaterial).color.copy(sinal);
    }, [fluxo]);

    useLayoutEffect(() => {
        const malhaEventos = eventosRef.current;
        if (malhaEventos) {
            // Instâncias começam com matriz identidade; zera o pool inteiro.
            const matrizes = malhaEventos.instanceMatrix.array as Float32Array;
            for (let e = 0; e < MAX_EVENTOS; e++)
                escreverMatriz(matrizes, e, 0, 0, 0);
            malhaEventos.instanceMatrix.needsUpdate = true;
        }

        aplicarCores();

        const escuro = window.matchMedia('(prefers-color-scheme: dark)');
        escuro.addEventListener('change', aplicarCores);
        return () => escuro.removeEventListener('change', aplicarCores);
    }, [aplicarCores]);

    const medirObstaculos = () => {
        const area = areaRef.current;
        if (!area) return;
        const caixaArea = area.getBoundingClientRect();
        obstaculos.current = obstaculosRefs
            .map((ref) => ref.current)
            .filter((elemento): elemento is HTMLElement => elemento !== null)
            .map((elemento) => medirObstaculo(elemento, caixaArea));
    };

    const dispararEventos = (px: number, py: number) => {
        for (let k = 0; k < EVENTOS_POR_CLIQUE; k++) {
            const e = eventos.proximo;
            eventos.proximo = (e + 1) % MAX_EVENTOS;

            const angulo =
                (k / EVENTOS_POR_CLIQUE) * Math.PI * 2 + Math.random() * 0.4;
            const impulso = 140 + Math.random() * 260;

            eventos.ativo[e] = 1;
            eventos.x[e] = px;
            eventos.y[e] = py;
            eventos.origemY[e] = py;
            eventos.vx[e] = Math.cos(angulo) * impulso + 60;
            eventos.vy[e] = Math.sin(angulo) * impulso;
            eventos.idade[e] = 0;
            eventos.raio[e] = 3 + Math.random() * 3.5;
            eventos.rapidez[e] = 150 + Math.random() * 90;
        }
    };

    useFrame((estado, delta) => {
        const malhaFluxo = fluxoRef.current;
        const malhaEventos = eventosRef.current;
        const interacao = interacaoRef.current;
        if (!malhaFluxo || !malhaEventos || !interacao) return;

        // Após uma pausa (aba oculta, fora da tela) o delta pode ser enorme.
        const dt = Math.min(delta, 0.05);
        const t = estado.clock.elapsedTime;
        const meioL = largura / 2;
        const meioA = altura / 2;
        const suavidade = 1 - Math.exp(-dt * 7);

        if (quadro.current++ % 20 === 0) medirObstaculos();
        const listaObstaculos = obstaculos.current;

        // Distribui na largura atual (primeiro quadro ou redimensionamento).
        if (ultimaLargura.current !== largura) {
            const anterior = ultimaLargura.current;
            for (let i = 0; i < MAX_ESFERAS; i++) {
                fluxo.x[i] =
                    anterior === 0
                        ? fluxo.x[i] * (largura + SAIDA * 2) - SAIDA
                        : fluxo.x[i] * (largura / anterior);
            }
            ultimaLargura.current = largura;
        }

        while (interacao.pedidos.length > 0) {
            const pedido = interacao.pedidos.shift()!;
            dispararEventos(pedido.x, pedido.y);
        }

        const { ponteiro } = interacao;
        const matrizesFluxo = malhaFluxo.instanceMatrix.array as Float32Array;

        for (let i = 0; i < quantidade; i++) {
            fluxo.x[i] += fluxo.velocidade[i] * dt;
            if (fluxo.x[i] > largura + SAIDA) {
                fluxo.x[i] = -SAIDA;
                fluxo.raia[i] = Math.random();
            }

            const x = fluxo.x[i];
            const yRaia = fluxo.raia[i] * altura;
            let y =
                yRaia +
                Math.sin(t * fluxo.frequencia[i] + fluxo.fase[i]) *
                    fluxo.amplitude[i];

            for (const o of listaObstaculos) {
                y = desviar(x, y, yRaia < o.cy ? -1 : 1, o);
            }

            let alvoX = 0;
            let alvoY = 0;
            if (ponteiro.ativo) {
                const dx = x - ponteiro.x;
                const dy = y - ponteiro.y;
                const distancia = Math.hypot(dx, dy);
                if (distancia < RAIO_PONTEIRO && distancia > 0.1) {
                    const empurrao =
                        ((RAIO_PONTEIRO - distancia) * 0.9) / distancia;
                    alvoX = dx * empurrao;
                    alvoY = dy * empurrao;
                }
            }

            fluxo.desvioX[i] += (alvoX - fluxo.desvioX[i]) * suavidade;
            fluxo.desvioY[i] += (alvoY - fluxo.desvioY[i]) * suavidade;

            const raio = fluxo.evento[i]
                ? 3.2 + fluxo.camada[i] * 2.5
                : 2 + fluxo.camada[i] * 4.5;

            escreverMatriz(
                matrizesFluxo,
                i,
                x + fluxo.desvioX[i] - meioL,
                meioA - (y + fluxo.desvioY[i]),
                raio,
            );
        }

        malhaFluxo.count = quantidade;
        malhaFluxo.instanceMatrix.needsUpdate = true;

        const matrizesEventos = malhaEventos.instanceMatrix
            .array as Float32Array;
        const arrasto = 1 - Math.exp(-dt * 1.5);
        const freio = 1 - Math.exp(-dt * 2.2);

        for (let e = 0; e < MAX_EVENTOS; e++) {
            if (!eventos.ativo[e]) continue;

            eventos.idade[e] += dt;
            eventos.vx[e] += (eventos.rapidez[e] - eventos.vx[e]) * arrasto;
            eventos.vy[e] -= eventos.vy[e] * freio;
            eventos.x[e] += eventos.vx[e] * dt;
            eventos.y[e] += eventos.vy[e] * dt;

            if (eventos.x[e] > largura + SAIDA * 2) {
                eventos.ativo[e] = 0;
                escreverMatriz(matrizesEventos, e, 0, 0, 0);
                continue;
            }

            // O evento nasce no ponto clicado e só aos poucos passa a
            // contornar o conteúdo, para a rajada sair do cursor.
            let yDesviado = eventos.y[e];
            for (const o of listaObstaculos) {
                yDesviado = desviar(
                    eventos.x[e],
                    yDesviado,
                    eventos.origemY[e] < o.cy ? -1 : 1,
                    o,
                );
            }
            const peso = Math.min(1, eventos.idade[e] / 0.8);
            const y = eventos.y[e] + (yDesviado - eventos.y[e]) * peso;
            const escala =
                eventos.raio[e] * Math.min(1, eventos.idade[e] / 0.18);

            escreverMatriz(
                matrizesEventos,
                e,
                eventos.x[e] - meioL,
                meioA - y,
                escala,
            );
        }

        malhaEventos.instanceMatrix.needsUpdate = true;
    });

    return (
        <>
            <instancedMesh
                ref={fluxoRef}
                args={[undefined, undefined, MAX_ESFERAS]}
                frustumCulled={false}
            >
                <sphereGeometry args={[1, 14, 10]} />
                <meshStandardMaterial roughness={0.42} metalness={0} />
            </instancedMesh>
            <instancedMesh
                ref={eventosRef}
                args={[undefined, undefined, MAX_EVENTOS]}
                frustumCulled={false}
            >
                <sphereGeometry args={[1, 14, 10]} />
                <meshStandardMaterial roughness={0.35} metalness={0} />
            </instancedMesh>
        </>
    );
};

export default Cena;
