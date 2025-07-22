import styled from 'styled-components';
import variaveis from '../../styles/variaveis';
import backgroundImg from '../../images/backgrounds/biografia.png';

export const BiografiaStyled = styled.section`
    padding: 5dvh;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100dvh;
    display: flex;
    align-items: center;

    h2 {
        color: ${variaveis.branco1};
        font-size: 3rem;
    }
`;

export const ContainerText = styled.div`
    display: block;

    color: ${variaveis.branco1};

    h2 {
        font-size: 5rem;
    }

    h3 {
        font-size: 4rem;
    }

    p {
        font-size: 1.25rem;
    }
`;

export const ContainerImage = styled.div`
    max-width: 30%;

    img {
        border-radius: 180px 340px 180px 340px;
        width: 100%;
    }
`;
