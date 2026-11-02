import styled, { keyframes } from 'styled-components';
import variaveis, { telas } from '../../styles/variaveis';

const ondular = keyframes`
    from {
        transform: scale(1);
        opacity: 0.55;
    }

    to {
        transform: scale(2.8);
        opacity: 0;
    }
`;

const colunaData = '11rem';
const colunaMarco = '3.5rem';

export const LinhaDoTempo = styled.ol`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: clamp(3.5rem, 7vw, 5rem);

    &::before {
        content: '';
        position: absolute;
        top: 0.5rem;
        bottom: 0;
        left: calc(${colunaData} + ${colunaMarco} / 2);
        width: 1px;
        background: linear-gradient(
            to bottom,
            ${variaveis.linha} 85%,
            transparent
        );
        transform: scaleY(0);
        transform-origin: top;
        transition: transform 1.6s ${variaveis.curva};
    }

    &[data-visivel='true']::before {
        transform: none;
    }

    &[data-visivel='true'] > li {
        opacity: 1;
        transform: none;
    }

    @media (max-width: ${telas.tablet}) {
        &::before {
            left: 0.4375rem;
        }
    }
`;

export const ItemLinhaDoTempo = styled.li`
    display: grid;
    grid-template-columns: ${colunaData} ${colunaMarco} minmax(0, 1fr);
    grid-template-areas: 'quando marco conteudo';
    opacity: 0;
    transform: translateY(1.25rem);
    transition:
        opacity 0.8s ease,
        transform 0.9s ${variaveis.curva};
    transition-delay: calc(var(--atraso) + 250ms);

    .quando {
        grid-area: quando;
        display: flex;
        flex-direction: column;
        font-size: 0.9375rem;
        color: ${variaveis.tintaSuave};
        padding-top: 0.125rem;
    }

    .periodo {
        font-weight: 600;
        color: ${variaveis.tinta};
    }

    .marco {
        grid-area: marco;
        position: relative;
        justify-self: center;
        width: 0.875rem;
        height: 0.875rem;
        margin-top: 0.375rem;
        border-radius: 50%;
        border: 2px solid ${variaveis.tintaSuave};
        background-color: ${variaveis.papel};
    }

    &[data-atual='true'] .marco {
        border-color: ${variaveis.sinal};
        background-color: ${variaveis.sinal};

        &::after {
            content: '';
            position: absolute;
            inset: -2px;
            border-radius: 50%;
            background-color: ${variaveis.sinal};
            animation: ${ondular} 2.4s ease-out infinite;
        }
    }

    .conteudo {
        grid-area: conteudo;
        max-width: 44rem;
    }

    h3 {
        font-size: clamp(1.375rem, 2.4vw, 1.75rem);
        font-stretch: 108%;
        font-weight: 650;
        line-height: 1.2;
        letter-spacing: -0.02em;
    }

    .empresa {
        margin-top: 0.25rem;
        font-size: 1.0625rem;
        font-weight: 500;
        color: ${variaveis.tintaSuave};
    }

    .resumo {
        margin-top: 1.25rem;
    }

    .atividades {
        margin: 1rem 0 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        color: ${variaveis.tintaSuave};

        li {
            position: relative;
            padding-left: 1.25rem;

            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0.8em;
                width: 0.5rem;
                height: 1px;
                background-color: currentColor;
            }
        }
    }

    @media (max-width: ${telas.tablet}) {
        grid-template-columns: 0.875rem minmax(0, 1fr);
        grid-template-areas:
            'marco quando'
            '. conteudo';
        column-gap: 1.25rem;

        .quando {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0 0.75rem;
            margin-bottom: 0.75rem;
        }

        .marco {
            margin-top: 0.3125rem;
        }
    }
`;
