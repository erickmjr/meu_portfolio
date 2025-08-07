import styled from 'styled-components';
import variaveis from '../../styles/variaveis';
import backgroundImg from '../../images/backgrounds/biografia.png';

export const BiografiaStyled = styled.section`
    padding: 10dvh 5dvh 0 5dvh;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
        padding: 7dvh 0;
    }

    @media (max-width: 768px) {
        height: fit-content;
        padding: 5dvh 2dvh;
    }
`;

export const ContainerText = styled.div`
    display: block;

    color: ${variaveis.branco1};
    width: 60%;

    @media (max-width: 768px) {
        width: 100%;
    }

    h2 {
        font-size: 5rem;

        @media (max-width: 1000px) {
            font-size: 4rem;
        }
    }

    h3 {
        font-size: 4rem;

        @media (max-width: 1000px) {
            font-size: 2.5rem;
        }
    }

    p {
        font-size: 1.25rem;

        @media (max-width: 1000px) {
            font-size: 1.25rem;
        }
    }
`;

export const ContainerImage = styled.div`
    width: 35%;

    img {
        border-radius: 180px 340px 180px 340px;
        width: 70%;
    }

    @media (max-width: 1000px) {
        margin-top: 2dvh;
        max-width: 50%;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 2dvh;
    }
`;
