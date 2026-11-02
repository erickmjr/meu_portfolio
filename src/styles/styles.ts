import { createGlobalStyle } from 'styled-components';
import variaveis from './variaveis';

const EstiloGlobal = createGlobalStyle`
    :root {
        --papel: #f4f6fa;
        --superficie: #ffffff;
        --tinta: #131c33;
        --tinta-suave: #4e5a73;
        --linha: #d9dee8;
        --sinal: #e0157a;
        --sinal-texto: #b8125f;
        --sinal-suave: #fce4ef;
        color-scheme: light;
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --papel: #0f1526;
            --superficie: #161e33;
            --tinta: #e8ecf4;
            --tinta-suave: #a3adc2;
            --linha: #2a3450;
            --sinal: #ff4f9a;
            --sinal-texto: #ff7ab3;
            --sinal-suave: #3d1832;
            color-scheme: dark;
        }
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        scroll-padding-top: ${variaveis.alturaTopo};
        -webkit-text-size-adjust: 100%;
    }

    body {
        min-height: 100dvh;
        background-color: ${variaveis.papel};
        color: ${variaveis.tinta};
        font-family: ${variaveis.fonteTexto};
        font-size: 1.125rem;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        overflow-x: hidden;
    }

    img,
    svg {
        display: block;
        max-width: 100%;
    }

    a {
        color: inherit;
    }

    button,
    input,
    textarea {
        font: inherit;
        color: inherit;
    }

    button {
        cursor: pointer;
    }

    ul,
    ol {
        list-style: none;
    }

    code {
        font-family: ${variaveis.fonteCodigo};
        font-size: 0.875em;
    }

    ::selection {
        background-color: ${variaveis.sinalSuave};
        color: ${variaveis.tinta};
    }

    :focus-visible {
        outline: 2px solid ${variaveis.sinal};
        outline-offset: 3px;
        border-radius: 4px;
    }

    .visualmente-oculto {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        white-space: nowrap;
    }

    @media (prefers-reduced-motion: reduce) {
        html {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            animation-delay: 0ms !important;
            transition-duration: 0.01ms !important;
            transition-delay: 0ms !important;
        }
    }
`;

export default EstiloGlobal;
