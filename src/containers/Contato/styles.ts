import { styled } from 'styled-components';
import backgroundImg from '../../images/backgrounds/biografia.png';
import variaveis from '../../styles/variaveis';

export const ContatoStyled = styled.section`
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100dvh;
    color: ${variaveis.branco2};
    padding: 8.5dvh 5dvh 0 5dvh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const ContainerIcones = styled.div`
    display: inline-block;

    a:nth-child(1) img {
        margin-right: 1.5dvh;
    }

    a:nth-child(2) img {
        border-radius: 12px;
        background-color: ${variaveis.branco1};
        border: none;
    }
`;
