import styled, { css } from 'styled-components';
import variaveis from '../../styles/variaveis';

export type BotaoProps = {
    $variante?: 'primario' | 'secundario';
};

export const estiloBotao = css<BotaoProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    min-height: 3rem;
    padding: 0 1.375rem;
    border-radius: 999px;
    border: 1.5px solid ${variaveis.tinta};
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;
    transition:
        background-color 0.25s ease,
        color 0.25s ease,
        border-color 0.25s ease,
        transform 0.25s ${variaveis.curva};

    ${({ $variante = 'primario' }) =>
        $variante === 'primario'
            ? css`
                  background-color: ${variaveis.tinta};
                  color: ${variaveis.papel};

                  &:hover {
                      background-color: ${variaveis.sinalTexto};
                      border-color: ${variaveis.sinalTexto};
                  }
              `
            : css`
                  background-color: transparent;
                  color: ${variaveis.tinta};

                  &:hover {
                      border-color: ${variaveis.sinalTexto};
                      color: ${variaveis.sinalTexto};
                  }
              `}

    &:active {
        transform: scale(0.97);
    }

    svg {
        flex-shrink: 0;
    }
`;

export const Botao = styled.a<BotaoProps>`
    ${estiloBotao}
`;
