import styled from 'styled-components';
import variaveis, { telas } from '../../styles/variaveis';

export const GradeContato = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
    gap: clamp(3rem, 7vw, 6rem);
    align-items: start;

    @media (max-width: ${telas.tablet}) {
        grid-template-columns: 1fr;
    }
`;

export const Canais = styled.ul`
    li {
        display: grid;
        grid-template-columns: auto minmax(0, 1fr) auto;
        align-items: center;
        gap: 1rem;
        padding: 1.25rem 0;
        border-top: 1px solid ${variaveis.linha};

        &:last-child {
            border-bottom: 1px solid ${variaveis.linha};
        }

        > svg {
            color: ${variaveis.tintaSuave};
        }
    }

    div {
        display: flex;
        flex-direction: column;
        min-width: 0;
    }

    .rotulo {
        font-size: 0.875rem;
        color: ${variaveis.tintaSuave};
    }

    a {
        font-size: 1.125rem;
        font-weight: 500;
        text-decoration: none;
        overflow-wrap: anywhere;
        transition: color 0.25s ease;

        &:hover {
            color: ${variaveis.sinalTexto};
        }
    }

    .copiar {
        display: inline-flex;
        align-items: center;
        gap: 0.375rem;
        min-height: 2.25rem;
        padding: 0 0.875rem;
        border: 1px solid ${variaveis.linha};
        border-radius: 999px;
        background-color: transparent;
        font-size: 0.875rem;
        font-weight: 500;
        transition:
            border-color 0.25s ease,
            color 0.25s ease;

        &:hover {
            border-color: ${variaveis.tintaSuave};
        }

        &[data-copiado='true'] {
            border-color: ${variaveis.sinal};
            color: ${variaveis.sinalTexto};
        }
    }
`;
