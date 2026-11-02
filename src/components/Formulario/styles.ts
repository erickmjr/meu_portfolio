import styled from 'styled-components';
import { estiloBotao, type BotaoProps } from '../Botao/styles';
import variaveis from '../../styles/variaveis';

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    .envio {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        margin-top: 0.5rem;
    }
`;

export const BotaoEnviar = styled.button<BotaoProps>`
    ${estiloBotao}

    &:disabled {
        cursor: progress;
        opacity: 0.7;
    }
`;

export const CampoForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.375rem;

    label {
        font-size: 0.9375rem;
        font-weight: 600;
    }

    input,
    textarea {
        width: 100%;
        padding: 0.875rem 1rem;
        border: 1px solid ${variaveis.linha};
        border-radius: 0.75rem;
        background-color: ${variaveis.superficie};
        font-size: 1rem;
        transition:
            border-color 0.25s ease,
            box-shadow 0.25s ease;

        &:hover {
            border-color: ${variaveis.tintaSuave};
        }

        &:focus {
            outline: none;
            border-color: ${variaveis.tinta};
            box-shadow: 0 0 0 3px
                color-mix(in srgb, ${variaveis.sinal} 30%, transparent);
        }
    }

    textarea {
        min-height: 9rem;
        resize: vertical;
    }
`;
