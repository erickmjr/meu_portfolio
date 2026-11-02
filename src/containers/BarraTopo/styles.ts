import styled, { keyframes } from 'styled-components';
import variaveis, { telas } from '../../styles/variaveis';

const surgir = keyframes`
    from {
        opacity: 0;
    }
`;

export const BarraTopoStyled = styled.header`
    position: fixed;
    inset: 0 0 auto 0;
    z-index: 100;
    height: ${variaveis.alturaTopo};
    border-bottom: 1px solid transparent;
    animation: ${surgir} 0.8s ease 0.7s both;
    transition:
        background-color 0.35s ease,
        border-color 0.35s ease;

    &[data-rolou='true'] {
        background-color: ${variaveis.papel};
        background-color: color-mix(
            in srgb,
            ${variaveis.papel} 86%,
            transparent
        );
        backdrop-filter: blur(14px) saturate(1.4);
        -webkit-backdrop-filter: blur(14px) saturate(1.4);
        border-bottom-color: ${variaveis.linha};
    }

    .conteudo {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
    }
`;

export const Marca = styled.a`
    font-size: 1.125rem;
    font-stretch: 115%;
    font-weight: 650;
    letter-spacing: -0.02em;
    text-decoration: none;
    white-space: nowrap;
`;

export const Navegacao = styled.nav`
    ul {
        position: relative;
        display: flex;
        gap: 0.25rem;
    }

    a {
        display: block;
        padding: 0.5rem 0.875rem;
        font-size: 0.9375rem;
        font-weight: 500;
        color: ${variaveis.tintaSuave};
        text-decoration: none;
        transition: color 0.25s ease;

        &:hover,
        &[aria-current] {
            color: ${variaveis.tinta};
        }
    }

    @media (max-width: ${telas.tablet}) {
        display: none;
    }
`;

export const Indicador = styled.li`
    position: absolute;
    left: -3px;
    bottom: -0.125rem;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${variaveis.sinal};
    pointer-events: none;
    transition:
        transform 0.55s ${variaveis.curva},
        opacity 0.3s ease;
`;

export const AcoesTopo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    .cv-topo {
        min-height: 2.5rem;
        padding: 0 1.125rem;
        font-size: 0.9375rem;
    }

    @media (max-width: ${telas.tablet}) {
        .cv-topo {
            display: none;
        }
    }
`;
