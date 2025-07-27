import styled from 'styled-components';
import backgroundImg from '../../images/backgrounds/projetos.png';
import variaveis from '../../styles/variaveis';

export const ProjetosStyled = styled.section`
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
`;

export const TitleContainer = styled.div`
    margin: 0 auto;
    text-align: center;

    h2 {
        color: ${variaveis.branco1};
        font-size: 5rem;
    }

    p {
        color: ${variaveis.branco1};
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
