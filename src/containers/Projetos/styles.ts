import styled from 'styled-components';
import backgroundImg from '../../images/backgrounds/projetos.png';
import variaveis from '../../styles/variaveis';

export const ProjetosStyled = styled.section`
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    padding-top: 10dvh;
    width: 100%;

    @media (max-width: 768px) {
        height: fit-content;
    }
`;

export const TitleContainer = styled.div`
    margin: 0 auto;
    text-align: center;

    h2 {
        color: ${variaveis.branco1};
        font-size: 5rem;

        @media (max-width: 768px) {
            font-size: 3rem;
        }
    }

    p {
        color: ${variaveis.branco1};

        @media (max-width: 768px) {
            font-size: 1rem;
            padding: 0 1dvh;
        }
    }
`;

export const ProjetosContainer = styled.div`
    padding: 1dvh;

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1dvh;

        li {
            padding: 1dvh;
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }
`;
