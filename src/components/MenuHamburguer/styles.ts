import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const MenuHamburguerStyled = styled.div`
    position: relative;
    padding: 3dvh;
`;

export const HamburguerNavigation = styled.nav`
    position: absolute;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: left;
    border-radius: 12px;

    background-color: ${variaveis.cinza1};
    padding: 1dvh;
    margin-top: 1dvh;

    opacity: 0;
    visibility: hidden;
    transition:
        opacity 0.3s ease-in-out,
        visibility 0.3s ease-in-out;

    button {
        border: none;
        padding: 1dvh;
        color: ${variaveis.branco1};
        background-color: transparent;
        font-size: 1.5rem;
    }
`;

export const ToggleMenu = styled.button`
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    background-color: transparent;

    span {
        background-color: ${variaveis.branco1};
        height: 4px;
        width: 100%;
        border-radius: 2px;
        transition: all 0.3s ease-in-out;
    }
`;
