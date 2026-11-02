import styled from 'styled-components';
import variaveis, { telas } from '../../styles/variaveis';

export const ProjetoDestaqueStyled = styled.article`
    & + & {
        margin-top: clamp(4.5rem, 9vw, 6.5rem);
        padding-top: clamp(4.5rem, 9vw, 6.5rem);
        border-top: 1px solid ${variaveis.linha};
    }

    .topo {
        display: grid;
        grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
        gap: clamp(2.5rem, 6vw, 5rem);
        margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
    }

    h3 {
        font-size: clamp(1.75rem, 3.4vw, 2.5rem);
        font-stretch: 110%;
        font-weight: 650;
        line-height: 1.1;
        letter-spacing: -0.025em;
    }

    .meta {
        margin: 0.5rem 0 1.5rem;
        font-size: 0.9375rem;
        color: ${variaveis.tintaSuave};
    }

    /* Acompanha a rolagem quando a lista de rotas é mais longa que o texto. */
    .texto {
        position: sticky;
        top: calc(${variaveis.alturaTopo} + 2rem);
        align-self: start;
    }

    .texto p:not(.meta) {
        max-width: 38rem;

        & + p {
            margin-top: 1rem;
        }
    }

    h4 {
        font-size: 1rem;
        font-weight: 600;
        color: ${variaveis.tintaSuave};
        margin-bottom: 0.5rem;
    }

    .grupo-rotas + .grupo-rotas {
        margin-top: 2rem;
    }

    dl > div {
        padding: 0.75rem 0;
        border-top: 1px solid ${variaveis.linha};
    }

    dt code {
        font-size: 0.875rem;
        overflow-wrap: anywhere;
    }

    .metodo {
        color: ${variaveis.sinalTexto};
    }

    dd {
        margin-top: 0.125rem;
        font-size: 0.9375rem;
        color: ${variaveis.tintaSuave};
    }

    .rodape {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem 2rem;
        margin-top: 2rem;
    }

    .links {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
    }

    @media (max-width: ${telas.tablet}) {
        .topo {
            grid-template-columns: 1fr;
        }

        .texto {
            position: static;
        }
    }
`;
