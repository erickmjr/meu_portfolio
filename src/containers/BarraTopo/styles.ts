import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const BarraTopoStyled = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    color: ${variaveis.branco1};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3dvh;
    padding: 1.5dvh 0;

    transition:
        background-color 0.5s ease-in-out,
        position 0.3s ease-in-out;

    ul {
        display: flex;
        gap: 1dvh;

        button {
            border: none;
            padding: 1dvh;
            color: ${variaveis.branco1};
            background-color: transparent;
            font-size: 1.25rem;
            transition:
                transform 0.3s ease-in-out,
                text-shadow 0.3s ease-in-out;

            &:hover {
                transform: scale(0.95);
                text-shadow: 0px 4px 25px ${variaveis.branco2};
            }
        }
    }
`;
