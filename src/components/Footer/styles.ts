import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const FooterStyled = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0.5rem;
    font-size: 3dvh;
    background-color: ${variaveis.branco1};
    display: flex;
    gap: 4dvh;
    justify-content: center;

    a {
        color: ${variaveis.black1};
        display: flex;
        align-items: center;
        font-weight: bold;
        text-decoration: none;
    }

    img {
        width: 2rem;
        margin-left: 1dvh;
    }
`;
