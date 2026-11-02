import styled from 'styled-components';
import variaveis from './variaveis';

export const Container = styled.div`
    width: 100%;
    max-width: calc(
        ${variaveis.larguraMaxima} + 2 * ${variaveis.margemLateral}
    );
    margin: 0 auto;
    padding: 0 ${variaveis.margemLateral};
`;

export const Secao = styled.section`
    padding: clamp(5rem, 12vw, 9rem) 0;
`;

export const ListaTecnologias = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 1rem;
    font-size: 0.9375rem;
    color: ${variaveis.tintaSuave};

    li {
        white-space: nowrap;
    }
`;
