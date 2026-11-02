import styled, { keyframes } from 'styled-components';
import variaveis, { telas } from '../../styles/variaveis';

const subir = keyframes`
    from {
        transform: translateY(108%);
    }
`;

const acomodar = keyframes`
    from {
        font-stretch: 78%;
    }
`;

const aparecer = keyframes`
    from {
        opacity: 0;
        transform: translateY(0.75rem);
    }
`;

const descobrir = keyframes`
    from {
        clip-path: inset(100% 0 0 0);
    }
`;

const aproximar = keyframes`
    from {
        transform: scale(1.14);
    }
`;

export const HeroStyled = styled.section`
    min-height: 100svh;
    display: flex;
    align-items: center;
    position: relative;
    isolation: isolate;
    overflow: hidden;
    padding: calc(${variaveis.alturaTopo} + 2.5rem) 0 4rem;

    .grade {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr);
        align-items: end;
        gap: clamp(2rem, 6vw, 5.5rem);
    }

    @media (max-width: ${telas.tablet}) {
        min-height: auto;
        padding-top: calc(${variaveis.alturaTopo} + 1.5rem);
        /* Espaço para o fluxo correr abaixo dos links. */
        padding-bottom: 9rem;

        .grade {
            grid-template-columns: 1fr;
            gap: 2.25rem;
        }
    }
`;

export const DicaFluxo = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1.5rem;
    z-index: 1;
    pointer-events: none;
    animation: ${aparecer} 0.9s ${variaveis.curva} 1.6s both;

    p {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.8125rem;
        color: ${variaveis.tintaSuave};
        transition: opacity 0.6s ease;
    }

    .ponto {
        width: 0.4375rem;
        height: 0.4375rem;
        border-radius: 50%;
        background-color: ${variaveis.sinal};
    }

    &[data-oculta='true'] p {
        opacity: 0;
    }
`;

export const TextoHero = styled.div`
    h1 {
        font-size: clamp(3rem, 7.6vw, 6.75rem);
        font-stretch: 116%;
        font-weight: 700;
        line-height: 0.94;
        letter-spacing: -0.04em;
        animation: ${acomodar} 1.6s ${variaveis.curva} 0.1s both;
    }

    .linha {
        display: block;
        overflow: hidden;
        padding-bottom: 0.06em;
    }

    .linha > span {
        display: block;
        animation: ${subir} 1s ${variaveis.curva} both;
    }

    .linha:nth-child(1) > span {
        animation-delay: 0.1s;
    }

    .linha:nth-child(2) > span {
        animation-delay: 0.2s;
    }

    .resumo {
        margin-top: 2rem;
        max-width: 31rem;
        font-size: clamp(1.1875rem, 1.6vw, 1.375rem);
        line-height: 1.5;
        color: ${variaveis.tintaSuave};
        animation: ${aparecer} 0.9s ${variaveis.curva} 0.55s both;
    }

    .acoes {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-top: 2.25rem;
        animation: ${aparecer} 0.9s ${variaveis.curva} 0.68s both;
    }

    .redes {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem 1.75rem;
        margin-top: 2.5rem;
        animation: ${aparecer} 0.9s ${variaveis.curva} 0.8s both;

        a {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.25rem 0;
            font-size: 0.9375rem;
            font-weight: 500;
            color: ${variaveis.tintaSuave};
            text-decoration: none;
            transition: color 0.25s ease;

            &:hover {
                color: ${variaveis.sinalTexto};
            }
        }
    }

    @media (max-width: ${telas.tablet}) {
        order: 2;
    }
`;

export const Retrato = styled.figure`
    .moldura {
        overflow: hidden;
        aspect-ratio: 4 / 5;
        border-radius: 1.5rem;
        background-color: ${variaveis.linha};
        animation: ${descobrir} 1.2s ${variaveis.curva} 0.3s both;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 35%;
        animation: ${aproximar} 1.6s ${variaveis.curva} 0.3s both;
    }

    figcaption {
        margin-top: 0.875rem;
        font-size: 0.875rem;
        color: ${variaveis.tintaSuave};
        animation: ${aparecer} 0.9s ${variaveis.curva} 0.9s both;
    }

    /* Quadrado no celular: mostra cabelo, rosto e queixo sem empurrar o nome
       para fora da primeira tela. A largura máxima evita um quadrado enorme
       em tablets. */
    @media (max-width: ${telas.tablet}) {
        order: 1;

        .moldura {
            aspect-ratio: 1;
            width: min(100%, 24rem);
            border-radius: 1.25rem;
        }

        img {
            object-position: 50% 18%;
        }
    }
`;
