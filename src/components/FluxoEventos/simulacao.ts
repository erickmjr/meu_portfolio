import { Color } from 'three';

// Retângulo de conteúdo (nome, foto) em pixels, relativo à área do fluxo.
export type Obstaculo = {
    cx: number;
    cy: number;
    meiaLargura: number;
    meiaAltura: number;
};

export type Interacao = {
    ponteiro: { x: number; y: number; ativo: boolean };
    pedidos: { x: number; y: number }[];
};

const MARGEM = 22;
const FAIXA = 110;
const RAMPA = 150;

function suavizar(inicio: number, fim: number, valor: number) {
    const t = Math.min(1, Math.max(0, (valor - inicio) / (fim - inicio)));
    return t * t * (3 - 2 * t);
}

// Empurra a coordenada y para fora do obstáculo, comprimindo as linhas de
// fluxo numa faixa logo acima ou abaixo dele, como água em volta de uma pedra.
// "lado" vem da raia original da esfera, para ela não trocar de lado no meio.
export function desviar(x: number, y: number, lado: number, o: Obstaculo) {
    const influencia =
        1 - suavizar(o.meiaLargura, o.meiaLargura + RAMPA, Math.abs(x - o.cx));
    if (influencia <= 0) return y;

    const borda = o.meiaAltura + MARGEM;
    const limite = borda + FAIXA;
    const distancia = Math.abs(y - o.cy);
    if (distancia >= limite) return y;

    const desviado = o.cy + lado * (borda + distancia * (FAIXA / limite));
    return y + (desviado - y) * influencia;
}

export function medirObstaculo(
    elemento: HTMLElement,
    area: DOMRect,
): Obstaculo {
    const caixa = elemento.getBoundingClientRect();
    return {
        cx: caixa.left - area.left + caixa.width / 2,
        cy: caixa.top - area.top + caixa.height / 2,
        meiaLargura: caixa.width / 2,
        meiaAltura: caixa.height / 2,
    };
}

export function lerCores() {
    const estilo = getComputedStyle(document.documentElement);
    const ler = (nome: string, padrao: string) =>
        new Color(estilo.getPropertyValue(nome).trim() || padrao);

    return {
        papel: ler('--papel', '#f4f6fa'),
        tinta: ler('--tinta', '#131c33'),
        sinal: ler('--sinal', '#e0157a'),
    };
}

// Estado das esferas em arrays tipados, alocados uma vez só.
export function criarFluxo(total: number) {
    const camada = new Float32Array(total);
    const x = new Float32Array(total);
    const raia = new Float32Array(total);
    const velocidade = new Float32Array(total);
    const fase = new Float32Array(total);
    const amplitude = new Float32Array(total);
    const frequencia = new Float32Array(total);
    const desvioX = new Float32Array(total);
    const desvioY = new Float32Array(total);
    const evento = new Uint8Array(total);

    for (let i = 0; i < total; i++) {
        // Camadas "distantes" são menores, mais claras e mais lentas.
        camada[i] = Math.pow(Math.random(), 1.6);
        x[i] = Math.random();
        raia[i] = Math.random();
        evento[i] = i % 29 === 0 ? 1 : 0;
        velocidade[i] =
            (16 + camada[i] * 42) *
            (evento[i] ? 2.1 : 1) *
            (0.85 + Math.random() * 0.3);
        fase[i] = Math.random() * Math.PI * 2;
        amplitude[i] = 4 + Math.random() * 12;
        frequencia[i] = 0.25 + Math.random() * 0.55;
    }

    return {
        camada,
        x,
        raia,
        velocidade,
        fase,
        amplitude,
        frequencia,
        desvioX,
        desvioY,
        evento,
    };
}

export function criarEventos(total: number) {
    return {
        ativo: new Uint8Array(total),
        x: new Float32Array(total),
        y: new Float32Array(total),
        vx: new Float32Array(total),
        vy: new Float32Array(total),
        idade: new Float32Array(total),
        raio: new Float32Array(total),
        rapidez: new Float32Array(total),
        origemY: new Float32Array(total),
        proximo: 0,
    };
}

export type Fluxo = ReturnType<typeof criarFluxo>;
export type Eventos = ReturnType<typeof criarEventos>;

// Escreve escala e posição direto na matriz da instância (sem rotação).
export function escreverMatriz(
    matrizes: Float32Array,
    indice: number,
    x: number,
    y: number,
    escala: number,
) {
    const o = indice * 16;
    matrizes[o] = escala;
    matrizes[o + 1] = 0;
    matrizes[o + 2] = 0;
    matrizes[o + 3] = 0;
    matrizes[o + 4] = 0;
    matrizes[o + 5] = escala;
    matrizes[o + 6] = 0;
    matrizes[o + 7] = 0;
    matrizes[o + 8] = 0;
    matrizes[o + 9] = 0;
    matrizes[o + 10] = escala;
    matrizes[o + 11] = 0;
    matrizes[o + 12] = x;
    matrizes[o + 13] = y;
    matrizes[o + 14] = 0;
    matrizes[o + 15] = 1;
}
