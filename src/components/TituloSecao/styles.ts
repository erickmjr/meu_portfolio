import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const CabecalhoSecao = styled.div`
    margin-bottom: clamp(2.5rem, 6vw, 4rem);
    max-width: 44rem;

    h2 {
        font-size: clamp(2.25rem, 5.2vw, 3.75rem);
        font-stretch: 112%;
        font-weight: 650;
        line-height: 1.02;
        letter-spacing: -0.03em;
    }

    .mascara {
        display: block;
        overflow: hidden;
        padding-bottom: 0.08em;
        margin-bottom: -0.08em;
    }

    .texto {
        display: block;
        transform: translateY(110%);
        transition: transform 0.9s ${variaveis.curva};
    }

    p {
        margin-top: 1.25rem;
        font-size: 1.1875rem;
        color: ${variaveis.tintaSuave};
        max-width: 38rem;
        opacity: 0;
        transition: opacity 0.8s ease 0.25s;
    }

    &[data-visivel='true'] {
        .texto {
            transform: none;
        }

        p {
            opacity: 1;
        }
    }
`;
