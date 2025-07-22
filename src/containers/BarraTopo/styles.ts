import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const BarraTopoStyled = styled.header`
    width: 100%;
    color: ${variaveis.branco1};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3dvh;
    padding: 1.5dvh 0;

    padding: 1dvh;

    ul {
        display: flex;
        gap: 1dvh;

        button {
            border: none;
            padding: 1dvh;
            color: ${variaveis.branco1};
            background-color: ${variaveis.black1};
            font-size: 1.25rem;
        }
    }
`;
