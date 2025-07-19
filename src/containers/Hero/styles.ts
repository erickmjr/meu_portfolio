import styled from 'styled-components';
import variaveis from '../../styles/variaveis';
import backgroundImg from '../../images/background.png';

export const HeroStyled = styled.header`
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    overflow-y: hidden;
`;

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const ProfileCard = styled.div`
    background-color: ${variaveis.branco1};
    border-radius: 20px;
    padding: 8.5rem 2rem 2rem 22.25rem;
    height: 70%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin: 25% 0 20% 5dvh;

    img {
        position: absolute;
        left: -30px;
        bottom: -15%;
        width: 80%;
        height: auto;
        filter: grayscale(100%);
        object-fit: cover;
        z-index: 2;
        mask-image: linear-gradient(to bottom, black 99%, transparent 100%);
        -webkit-mask-image: linear-gradient(
            to bottom,
            black 99%,
            transparent 100%
        );

        mask-image: linear-gradient(to right, black 99%, transparent 100%);
        -webkit-mask-image: linear-gradient(
            to right,
            black 99%,
            transparent 100%
        );
    }

    h1 {
        font-size: 6dvh;
        line-height: 1.2;
        font-weight: 700;
        color: ${variaveis.azul1};
    }

    p {
        font-size: 2.5dvh;
        color: #0057ff;
        font-weight: 600;
        margin-top: 0.5rem;
        letter-spacing: 0.5px;
        white-space: nowrap;
    }
`;

export const TechsContainer = styled.aside`
    background-color: ${variaveis.branco1};
    border-radius: 20px 0 0 20px;
    padding: 2rem;
    height: fit-content;
    margin: 0 0 3dvh 5dvh;
    text-align: left;

    h2 {
        color: ${variaveis.azul1};
        font-weight: 700;
    }
    ul {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 6vh;
    }

    img {
        width: 54px;
    }
`;
