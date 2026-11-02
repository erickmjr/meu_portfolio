import styled from 'styled-components';
import variaveis, { telas } from '../../styles/variaveis';

export const BotaoMenu = styled.button`
    display: none;
    position: relative;
    z-index: 2;
    width: 2.75rem;
    height: 2.75rem;
    border: none;
    border-radius: 50%;
    background-color: transparent;

    .linhas {
        position: absolute;
        inset: 0;
        margin: auto;
        width: 1.375rem;
        height: 0.5rem;
    }

    .linhas span {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        border-radius: 2px;
        background-color: ${variaveis.tinta};
        transition: transform 0.4s ${variaveis.curva};
    }

    .linhas span:first-child {
        top: 0;
    }

    .linhas span:last-child {
        bottom: 0;
    }

    &[aria-expanded='true'] {
        .linhas span:first-child {
            transform: translateY(3px) rotate(45deg);
        }

        .linhas span:last-child {
            transform: translateY(-3px) rotate(-45deg);
        }
    }

    @media (max-width: ${telas.tablet}) {
        display: block;
    }
`;

export const PainelMenu = styled.div`
    position: fixed;
    inset: 0;
    z-index: 90;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: calc(${variaveis.alturaTopo} + 2rem) ${variaveis.margemLateral}
        2rem;
    background-color: ${variaveis.papel};
    opacity: 0;
    visibility: hidden;
    transition:
        opacity 0.35s ease,
        visibility 0s linear 0.35s;

    nav li {
        opacity: 0;
        transform: translateY(1rem);
        transition:
            opacity 0.4s ease,
            transform 0.5s ${variaveis.curva};
    }

    /* Só os links das seções; o botão do CV e as redes têm estilo próprio. */
    nav a {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.375rem 0;
        font-size: clamp(2rem, 9vw, 2.75rem);
        font-stretch: 112%;
        font-weight: 600;
        letter-spacing: -0.025em;
        text-decoration: none;

        &[aria-current]::after {
            content: '';
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background-color: ${variaveis.sinal};
        }
    }

    .rodape-menu {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        opacity: 0;
        transition: opacity 0.4s ease 0.2s;
    }

    &[data-aberto='true'] {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.35s ease;

        nav li {
            opacity: 1;
            transform: none;
        }

        .rodape-menu {
            opacity: 1;
        }
    }

    @media (min-width: ${telas.tablet}) {
        display: none;
    }
`;

export const RedesMenu = styled.div`
    display: flex;
    gap: 0.25rem;

    a {
        display: grid;
        place-items: center;
        width: 2.75rem;
        height: 2.75rem;
        color: ${variaveis.tinta};
    }
`;
