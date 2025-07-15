import { styled } from 'styled-components';

export const BarraTopoStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5dvh 2dvh;

    nav {
        max-width: 40%;
        ul {
            display: flex;
            justify-content: space-between;
            gap: 3dvh;
        }
    }
`;
