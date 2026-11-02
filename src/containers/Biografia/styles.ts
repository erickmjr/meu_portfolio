import styled from 'styled-components';
import variaveis, { telas } from '../../styles/variaveis';

export const GradeSobre = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr);
    gap: clamp(2.5rem, 6vw, 5.5rem);

    .texto p {
        max-width: 38rem;
        font-size: 1.25rem;
        line-height: 1.6;

        & + p {
            margin-top: 1.25rem;
        }
    }

    h3 {
        font-size: 1rem;
        font-weight: 600;
        color: ${variaveis.tintaSuave};
        margin-bottom: 1rem;
    }

    .formacao li {
        display: flex;
        flex-direction: column;
        padding: 1rem 0;
        border-top: 1px solid ${variaveis.linha};
        font-size: 1rem;
        color: ${variaveis.tintaSuave};

        strong {
            font-size: 1.0625rem;
            font-weight: 600;
            color: ${variaveis.tinta};
        }
    }

    @media (max-width: ${telas.tablet}) {
        grid-template-columns: 1fr;
    }
`;

export const Tecnologias = styled.div`
    margin-top: clamp(4rem, 9vw, 6.5rem);

    > h3 {
        font-size: clamp(1.5rem, 2.6vw, 2rem);
        font-stretch: 110%;
        font-weight: 650;
        letter-spacing: -0.02em;
        margin-bottom: 2rem;
    }

    .grupos {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 2.5rem clamp(1.5rem, 4vw, 3.5rem);
    }

    .grupo {
        padding-top: 1rem;
        border-top: 1px solid ${variaveis.linha};
    }

    h4 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 0.375rem 1.125rem;
        font-size: 1rem;
        color: ${variaveis.tintaSuave};
    }

    li {
        white-space: nowrap;
    }

    @media (max-width: ${telas.tablet}) {
        .grupos {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (max-width: ${telas.celular}) {
        .grupos {
            grid-template-columns: 1fr;
        }
    }
`;
