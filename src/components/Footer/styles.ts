import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const FooterStyled = styled.footer`
    border-top: 1px solid ${variaveis.linha};
    font-size: 0.9375rem;
    color: ${variaveis.tintaSuave};

    .conteudo {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    a {
        font-weight: 500;
        text-decoration: none;
        transition: color 0.25s ease;

        &:hover {
            color: ${variaveis.sinalTexto};
        }
    }
`;
