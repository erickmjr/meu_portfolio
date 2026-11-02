import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const AvisoStatusStyled = styled.p`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    min-height: 1.5rem;
    font-size: 0.9375rem;
    color: ${variaveis.tintaSuave};

    svg {
        flex-shrink: 0;
        margin-top: 0.2rem;
        color: ${variaveis.sinal};
    }

    &[data-status='erro'] {
        color: ${variaveis.sinalTexto};
    }
`;
