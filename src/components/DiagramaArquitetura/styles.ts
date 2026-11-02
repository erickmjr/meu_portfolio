import styled, { keyframes } from 'styled-components';
import variaveis, { telas } from '../../styles/variaveis';

const ciclo = '4.8s';

// Cada pulso cruza a aresta em ~18% do ciclo e fica oculto no resto.
const idaHorizontal = keyframes`
    0% { transform: translateX(0); opacity: 0; }
    3% { opacity: 1; }
    16% { opacity: 1; }
    19%, 100% { transform: translateX(100%); opacity: 0; }
`;

const voltaHorizontal = keyframes`
    0% { transform: translateX(100%); opacity: 0; }
    3% { opacity: 1; }
    16% { opacity: 1; }
    19%, 100% { transform: translateX(0); opacity: 0; }
`;

const idaVertical = keyframes`
    0% { transform: translateY(0); opacity: 0; }
    3% { opacity: 1; }
    16% { opacity: 1; }
    19%, 100% { transform: translateY(100%); opacity: 0; }
`;

export const Figura = styled.figure`
    padding: clamp(1.5rem, 4vw, 3rem);
    border: 1px solid ${variaveis.linha};
    border-radius: 1.5rem;
    background-color: ${variaveis.superficie};

    figcaption {
        max-width: 44rem;
        margin-top: clamp(2rem, 4vw, 2.75rem);
        font-size: 0.9375rem;
        color: ${variaveis.tintaSuave};
    }
`;

export const DiagramaStyled = styled.div`
    position: relative;
    display: grid;
    grid-template-columns:
        minmax(7rem, 1fr) minmax(9rem, 1.7fr) minmax(7rem, 1fr)
        minmax(4.5rem, 0.75fr) minmax(7rem, 1fr);
    grid-template-areas:
        'scraper envio refresh put dynamo'
        'cliente consulta leitura get dynamo';
    gap: 3rem 0.75rem;
    padding: 1.75rem 0 1.25rem;

    .fronteira {
        grid-column: 2 / 6;
        grid-row: 1 / 3;
        margin: -1.75rem -1rem -1.25rem 0;
        border: 1.5px dashed ${variaveis.linha};
        border-radius: 1rem;
        pointer-events: none;

        span {
            position: absolute;
            top: -0.6875rem;
            left: 1rem;
            padding: 0 0.5rem;
            font-size: 0.75rem;
            font-weight: 500;
            color: ${variaveis.tintaSuave};
            background-color: ${variaveis.superficie};
        }
    }

    .fronteira,
    .gateway {
        position: relative;
        opacity: 0;
        transition: opacity 0.8s ease 0.2s;
    }

    .gateway {
        grid-column: 2;
        grid-row: 1 / 3;
        margin: -0.75rem 0.25rem;
        border-radius: 0.75rem;
        background-color: ${variaveis.papel};

        span {
            position: absolute;
            bottom: 0.375rem;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 0.75rem;
            font-weight: 500;
            color: ${variaveis.tintaSuave};
        }
    }

    /* && dobra a especificidade para vencer as regras de cada aresta. */
    &&[data-revelado='true'] {
        .fronteira,
        .gateway {
            opacity: 1;
        }

        .no {
            opacity: 1;
            transform: none;
        }

        .trilho {
            transform: none;
        }
    }

    &[data-ativo='true'] .viajante {
        animation-play-state: running;
    }

    /* No celular vira uma cadeia única: os dados descem do scraper ao cliente. */
    @media (max-width: ${telas.tablet}) {
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: auto 6rem auto 4rem auto 4rem auto 4.5rem auto;
        grid-template-areas:
            'scraper'
            'envio'
            'refresh'
            'put'
            'dynamo'
            'get'
            'leitura'
            'consulta'
            'cliente';
        gap: 0;
        padding: 0;

        .fronteira {
            grid-column: 1;
            grid-row: 2 / 9;
            margin: 0.5rem -0.75rem;

            span {
                left: auto;
                right: 1rem;
            }
        }

        .gateway {
            display: none;
        }
    }
`;

export const NoStyled = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.125rem;
    padding: 0.875rem 1rem;
    border: 1px solid ${variaveis.linha};
    border-radius: 0.875rem;
    background-color: ${variaveis.superficie};
    opacity: 0;
    transform: scale(0.94);
    transition:
        opacity 0.6s ease,
        transform 0.7s ${variaveis.curva};
    transition-delay: calc(var(--ordem) * 140ms);

    strong {
        font-size: 0.9375rem;
        font-weight: 600;
        line-height: 1.3;
    }

    span {
        font-size: 0.8125rem;
        line-height: 1.4;
        color: ${variaveis.tintaSuave};
        overflow-wrap: anywhere;
    }

    &[data-destaque='true'] {
        border: 1.5px solid ${variaveis.tinta};
    }

    @media (max-width: ${telas.tablet}) {
        padding: 0.75rem 0.875rem;
    }
`;

export const ArestaStyled = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    margin: 0 -0.5rem;
    padding: 0 0.25rem;
    min-width: 0;

    .trilho {
        position: relative;
        flex: 1;
        height: 1.5px;
        background-color: ${variaveis.tintaSuave};
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.7s ${variaveis.curva};
        transition-delay: calc(var(--ordem) * 140ms + 80ms);

        &::after {
            content: '';
            position: absolute;
            top: 50%;
            right: -1px;
            width: 0.4375rem;
            height: 0.4375rem;
            border-top: 1.5px solid ${variaveis.tintaSuave};
            border-right: 1.5px solid ${variaveis.tintaSuave};
            transform: translateY(-50%) rotate(45deg);
        }
    }

    &[data-sentido='volta'] .trilho {
        transform-origin: right;

        &::after {
            right: auto;
            left: -1px;
            transform: translateY(-50%) rotate(-135deg);
        }
    }

    .textos {
        position: absolute;
        inset: 0 0.25rem;
        pointer-events: none;
    }

    .rotulo,
    .nota {
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 0.75rem;
        line-height: 1.35;
    }

    .rotulo {
        bottom: calc(50% + 0.625rem);

        code {
            font-size: 1em;
            color: ${variaveis.tinta};
        }
    }

    .nota {
        top: calc(50% + 0.625rem);
        color: ${variaveis.tintaSuave};
    }

    .viajante {
        position: absolute;
        inset: 0;
        opacity: 0;
        animation: ${idaHorizontal} ${ciclo} linear infinite;
        animation-delay: calc(var(--inicio) + 1.2s);
        animation-play-state: paused;
    }

    &[data-sentido='volta'] .viajante {
        animation-name: ${voltaHorizontal};
    }

    .pulso {
        position: absolute;
        top: 50%;
        left: 0;
        width: 0.5625rem;
        height: 0.5625rem;
        margin: -0.28125rem 0 0 -0.28125rem;
        border-radius: 50%;
        background-color: ${variaveis.sinal};
        box-shadow: 0 0 0 4px
            color-mix(in srgb, ${variaveis.sinal} 22%, transparent);
    }

    @media (max-width: ${telas.tablet}) {
        align-items: stretch;
        gap: 0.75rem;
        margin: 0;
        padding: 0.75rem 0 0.75rem 1.25rem;

        /* Na cadeia vertical, ida e volta apontam para baixo. */
        .trilho,
        &[data-sentido='volta'] .trilho {
            flex: none;
            width: 1.5px;
            height: auto;
            transform: scaleY(0);
            transform-origin: top;

            &::after {
                top: auto;
                bottom: -1px;
                left: auto;
                right: 50%;
                transform: translateX(50%) rotate(135deg);
            }
        }

        .textos {
            position: static;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0.25rem;
            min-width: 0;
        }

        .rotulo,
        .nota {
            position: static;
            text-align: left;
        }

        .viajante,
        &[data-sentido='volta'] .viajante {
            animation-name: ${idaVertical};
        }

        .pulso {
            top: 0;
            left: 50%;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .viajante {
            display: none;
        }
    }
`;
