import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const BtnCVStyled = styled.a`
    border: none;
    padding: 2dvh;
    background-color: ${variaveis.branco1};
    color: ${variaveis.black1};
    border-radius: 10px;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    text-decoration: none;

    img {
        width: 2rem;
    }

    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(0.95);
    }
`;
