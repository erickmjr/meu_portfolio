import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const ProjetoStyled = styled.article`
    display: flex;
    flex-direction: column;
    height: 100%;

    .imagem {
        position: relative;
        display: block;
        overflow: hidden;
        aspect-ratio: 2 / 1;
        border-radius: 1rem;
        border: 1px solid ${variaveis.linha};
        background-color: ${variaveis.linha};
        margin-bottom: 1.5rem;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        transition:
            transform 0.9s ${variaveis.curva},
            opacity 0.5s ease;
    }

    .alternativa {
        position: absolute;
        inset: 0;
        opacity: 0;
    }

    &:hover,
    &:focus-within {
        img {
            transform: scale(1.035);
        }

        .alternativa {
            opacity: 1;
        }
    }

    .cabecalho {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 1rem;
    }

    h4 {
        font-size: 1.375rem;
        font-stretch: 108%;
        font-weight: 650;
        letter-spacing: -0.015em;
    }

    .cabecalho span {
        flex-shrink: 0;
        font-size: 0.875rem;
        color: ${variaveis.tintaSuave};
    }

    p {
        margin: 0.5rem 0 1rem;
        max-width: 34rem;
        font-size: 1rem;
    }

    .links {
        display: flex;
        gap: 1.5rem;
        margin-top: auto;
        padding-top: 1.25rem;

        a {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
            font-size: 0.9375rem;
            font-weight: 600;
            text-decoration: underline;
            text-decoration-color: ${variaveis.linha};
            text-decoration-thickness: 1.5px;
            text-underline-offset: 0.3em;
            transition:
                color 0.25s ease,
                text-decoration-color 0.25s ease;

            &:hover {
                color: ${variaveis.sinalTexto};
                text-decoration-color: currentColor;
            }
        }
    }
`;
