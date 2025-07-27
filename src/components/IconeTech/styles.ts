import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const TechStyled = styled.a`
    display: inline-block;
    position: relative;
`;

export const NomeHover = styled.span`
    position: absolute;
    top: -100%;
    left: 0%;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    color: ${variaveis.black1};
    white-space: nowrap;
    background-color: ${variaveis.cinza1};
    border-radius: 4px;
    text-align: center;
    padding: 1dvh;
    font-weight: 500;
    z-index: 2;
    font-size: 2.5dvh;
`;
