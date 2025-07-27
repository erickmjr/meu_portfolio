import styled from 'styled-components';
import variaveis from '../../styles/variaveis';
import backgroundImg from '../../images/backgrounds/biografia.png';

export const BiografiaStyled = styled.section`
    padding: 5dvh;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;

    @media (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
        padding: 7dvh;
    }
`;

export const ContainerText = styled.div`
    display: block;

    color: ${variaveis.branco1};

    h2 {
        font-size: 5rem;

        @media (max-width: 1000px) {
            font-size: 3rem;
        }
    }

    h3 {
        font-size: 4rem;

        @media (max-width: 1000px) {
            font-size: 2rem;
        }
    }

    p {
        font-size: 1.25rem;

        @media (max-width: 1000px) {
            font-size: 1rem;
        }
    }
`;

export const ContainerImage = styled.div`
    max-width: 30%;

    img {
        border-radius: 180px 340px 180px 340px;
        width: 100%;
    }

    @media (max-width: 1000px) {
        margin-top: 2dvh;
        max-width: 50%;
    }
`;
