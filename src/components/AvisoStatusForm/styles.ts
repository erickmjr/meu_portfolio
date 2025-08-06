import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

type AvisoStatusProps = {
    status: boolean;
    mostrar: boolean;
};

export const AvisoStatusStyled = styled.span<AvisoStatusProps>`
    display: ${({ mostrar }) => (mostrar ? 'flex' : 'none')};
    border: 2px solid
        ${({ status }) =>
            status ? `${variaveis.verde1}` : `${variaveis.vermelho1}`};
    background-color: ${variaveis.branco1};
    color: ${({ status }) =>
        status ? `${variaveis.verde1}` : `${variaveis.vermelho1}`};
    position: absolute;
    top: 4dvh;
    right: 3dvh;
    align-items: center;
    font-size: 3dvh;
    padding: 1.25dvh;
    border-radius: 8px;
`;
