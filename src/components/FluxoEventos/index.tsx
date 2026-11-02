import { Canvas } from '@react-three/fiber';
import { useEffect, useRef, useState, type RefObject } from 'react';
import { useConsultaMidia } from '../../hooks/useConsultaMidia';
import Cena from './Cena';
import type { Interacao } from './simulacao';
import { CamadaFluxo } from './styles';

type FluxoEventosProps = {
    areaRef: RefObject<HTMLElement | null>;
    obstaculosRefs: RefObject<HTMLElement | null>[];
    aoDisparar?: () => void;
};

const SELETOR_INTERATIVO = 'a, button, input, textarea, label';

// Fluxo de mensagens em Three.js: as esferas contornam o conteúdo, o cursor
// as empurra e um clique dispara uma rajada de eventos.
const FluxoEventos = ({
    areaRef,
    obstaculosRefs,
    aoDisparar,
}: FluxoEventosProps) => {
    const interacaoRef = useRef<Interacao>({
        ponteiro: { x: 0, y: 0, ativo: false },
        pedidos: [],
    });
    const [emVista, setEmVista] = useState(true);
    const reduzido = useConsultaMidia('(prefers-reduced-motion: reduce)');

    // Sem renderizar quando o topo sai da tela.
    useEffect(() => {
        const area = areaRef.current;
        if (!area) return;
        const observador = new IntersectionObserver(([entrada]) =>
            setEmVista(entrada.isIntersecting),
        );
        observador.observe(area);
        return () => observador.disconnect();
    }, [areaRef]);

    useEffect(() => {
        const area = areaRef.current;
        if (!area || reduzido) return;

        const { ponteiro, pedidos } = interacaoRef.current;
        const posicao = (evento: PointerEvent) => {
            const caixa = area.getBoundingClientRect();
            return {
                x: evento.clientX - caixa.left,
                y: evento.clientY - caixa.top,
            };
        };

        const mover = (evento: PointerEvent) => {
            Object.assign(ponteiro, posicao(evento), { ativo: true });
        };
        const sair = () => {
            ponteiro.ativo = false;
        };
        const soltar = (evento: PointerEvent) => {
            if (evento.pointerType !== 'mouse') sair();
        };
        const pressionar = (evento: PointerEvent) => {
            const alvo = evento.target as Element;
            if (alvo.closest(SELETOR_INTERATIVO)) return;
            pedidos.push(posicao(evento));
            aoDisparar?.();
        };

        area.addEventListener('pointermove', mover);
        area.addEventListener('pointerleave', sair);
        area.addEventListener('pointerup', soltar);
        area.addEventListener('pointerdown', pressionar);
        return () => {
            area.removeEventListener('pointermove', mover);
            area.removeEventListener('pointerleave', sair);
            area.removeEventListener('pointerup', soltar);
            area.removeEventListener('pointerdown', pressionar);
        };
    }, [areaRef, reduzido, aoDisparar]);

    return (
        <CamadaFluxo aria-hidden="true">
            <Canvas
                orthographic
                camera={{ position: [0, 0, 100], zoom: 1, near: 1, far: 400 }}
                dpr={[1, 2]}
                flat
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'low-power',
                }}
                frameloop={reduzido ? 'demand' : emVista ? 'always' : 'never'}
                style={{ pointerEvents: 'none' }}
            >
                <ambientLight intensity={1.6} />
                <directionalLight position={[-300, 400, 500]} intensity={1.3} />
                <Cena
                    areaRef={areaRef}
                    obstaculosRefs={obstaculosRefs}
                    interacaoRef={interacaoRef}
                />
            </Canvas>
        </CamadaFluxo>
    );
};

export default FluxoEventos;
