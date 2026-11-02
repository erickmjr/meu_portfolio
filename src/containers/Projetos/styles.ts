import styled from 'styled-components';
import variaveis, { telas } from '../../styles/variaveis';

// Seletores com ">" para não atingir o cabeçalho e as listas de cada projeto.
export const OutrosProjetos = styled.div`
    margin-top: clamp(5rem, 11vw, 8rem);

    > .introducao {
        margin-bottom: 2.5rem;

        h3 {
            font-size: clamp(1.5rem, 2.6vw, 2rem);
            font-stretch: 110%;
            font-weight: 650;
            letter-spacing: -0.02em;
        }

        p {
            margin-top: 0.5rem;
            color: ${variaveis.tintaSuave};
        }
    }

    > ul {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: clamp(3rem, 6vw, 4.5rem) clamp(1.5rem, 4vw, 3rem);
    }

    > ul > li > div {
        height: 100%;
    }

    @media (max-width: ${telas.celular}) {
        > ul {
            grid-template-columns: 1fr;
        }
    }
`;
