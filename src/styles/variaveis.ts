// As cores apontam para variáveis CSS definidas em styles.ts,
// o que permite trocar a paleta inteira no modo escuro.
export default {
    fonteTexto: "'Archivo', system-ui, -apple-system, 'Segoe UI', sans-serif",
    fonteCodigo: "'Fragment Mono', ui-monospace, 'Cascadia Mono', monospace",

    papel: 'var(--papel)',
    superficie: 'var(--superficie)',
    tinta: 'var(--tinta)',
    tintaSuave: 'var(--tinta-suave)',
    linha: 'var(--linha)',
    sinal: 'var(--sinal)',
    sinalTexto: 'var(--sinal-texto)',
    sinalSuave: 'var(--sinal-suave)',

    curva: 'cubic-bezier(0.22, 1, 0.36, 1)',
    larguraMaxima: '1200px',
    margemLateral: 'clamp(1rem, 5vw, 3rem)',
    alturaTopo: '4.5rem',
};

export const telas = {
    tablet: '960px',
    celular: '640px',
};
