import { styled } from 'styled-components';
import variaveis from '../../styles/variaveis';

export const FormStyled = styled.form`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.25dvh;
    height: fit-content;
    width: 50%;

    input {
        border: 2px solid ${variaveis.branco1};
        width: 100%;
        padding: 2dvh;
        border-radius: 6px 0 6px 0;
        box-shadow: 10px 10px 30px ${variaveis.verde1};
        background-color: ${variaveis.black1};
        color: ${variaveis.branco2};
        transition: transform 0.3s ease-in-out;

        &:hover,
        &:focus {
            transform: scale(1.02);
        }

        @media (max-width: 768px) {
            font-size: 3dvh;
        }
    }

    textarea {
        border: 2px solid ${variaveis.branco1};
        background-color: ${variaveis.black1};
        color: ${variaveis.branco2};
        box-shadow: 10px 10px 30px ${variaveis.verde1};
        resize: none;
        border-radius: 6px 0 6px 0;
        padding: 1dvh 2dvh;
        height: 30dvh;
        font-size: 2.5dvh;

        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: scale(1.02);
        }
    }

    button {
        background-color: ${variaveis.black1};
        color: ${variaveis.branco2};
        border: 2px solid ${variaveis.verde1};
        box-shadow: 10px 10px 30px ${variaveis.verde1};
        padding: 2dvh;
        font-weight: bold;
        width: fit-content;
        margin: 0 auto;
        font-size: 2.5dvh;
        border-radius: 10px;
        font-size: 2.5dvh;
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: scale(1.05);
        }
    }

    ::placeholder {
        color: ${variaveis.branco2};
        font-size: 2.5dvh;
    }

    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const ContainerForm = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    h3 {
        font-size: 7dvh;

        @media (max-width: 768px) {
            font-size: 6dvh;
            text-align: center;
        }
    }
    p {
        font-size: 4dvh;
        margin-bottom: 3dvh;

        @media (max-width: 768px) {
            font-size: 3dvh;
            text-align: center;
        }
    }
`;
