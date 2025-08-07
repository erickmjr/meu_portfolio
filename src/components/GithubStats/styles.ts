import { styled } from 'styled-components';
import variaveis from '../../styles/variaveis';

export const StatsStyled = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    a {
        color: ${variaveis.branco2};
        font-size: 10dvh;
        font-style: italic;
        text-decoration: none;

        @media (max-width: 768px) {
            font-size: 7.5dvh;
        }
    }

    p {
        font-size: 3dvh;
        color: ${variaveis.branco2};

        @media (max-width: 768px) {
            font-size: 2.5dvh;
            width: 100%;
        }
    }
`;

export const ContainerContent = styled.div`
    display: flex;
    gap: 15dvh;
`;
