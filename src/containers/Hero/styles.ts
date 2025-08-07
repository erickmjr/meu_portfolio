import styled from 'styled-components';
import variaveis from '../../styles/variaveis';
import backgroundImg from '../../images/backgrounds/hero.png';

export const HeroStyled = styled.section`
    width: 100%;
    height: 100dvh;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 768px) {
        padding-top: 15dvh;
        height: fit-content;
        padding-bottom: 2dvh;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ProfileCard = styled.div`
    max-width: 50%;
    display: flex;
    align-items: center;
    gap: 3dvh;

    img {
        width: 50%;
        border-radius: 340px;
    }

    h1 {
        font-size: 6dvh;
        line-height: 1.2;
        font-weight: 700;
        color: ${variaveis.branco1};
    }

    p,
    a {
        font-size: 2.5dvh;
        color: ${variaveis.branco1};
        font-weight: 600;
        margin-top: 0.5rem;
        letter-spacing: 0.5px;
        white-space: nowrap;

        img {
            margin-top: 0.75dvh;
            max-width: 20%;
        }
    }

    a {
        margin-top: 0.5dvh;
    }

    @media (max-width: 768px) {
        max-width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 1dvh;
        margin-bottom: 6dvh;

        img {
            width: 70%;
        }

        h1 {
            font-size: 6dvh;
            line-height: 1.2;
            font-weight: 700;
            color: ${variaveis.branco1};
            padding-left: 3dvh;
        }

        p,
        a {
            font-size: 2.5dvh;
            color: ${variaveis.branco1};
            font-weight: 600;
            margin-top: 0.5rem;
            margin-bottom: 0.75rem;
            letter-spacing: 0.5px;
            white-space: nowrap;
            padding-left: 3dvh;

            img {
                max-width: 20%;
            }
        }

        a {
            margin-top: 0.5dvh;
        }
    }
`;

export const TechsContainer = styled.aside`
    background-color: ${variaveis.branco1};
    border-radius: 20px;
    padding: 2rem;
    height: fit-content;
    margin: 0 0 3dvh 5dvh;
    text-align: left;

    h2 {
        color: ${variaveis.black1};
        font-weight: 700;
        text-shadow: 4px 4px 26px ${variaveis.black1};
        font-size: 2rem;
        text-align: center;
    }
    ul {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 6vh;

        @media (max-width: 768px) {
            grid-gap: 4vh;
        }
    }

    img {
        width: 54px;

        @media (max-width: 768px) {
            max-width: 4rem;
        }
    }

    @media (max-width: 768px) {
        width: 90%;
        margin: 0;
    }
`;
