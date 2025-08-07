import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const ProjetoStyled = styled.div`
    background-color: ${variaveis.branco2};
    display: flex;
    flex-direction: column;
    color: ${variaveis.black1};
    border-radius: 12px 0 12px 0;
    padding: 1.5dvh;
    height: 100%;

    img {
        max-width: 100%;
    }

    h3 {
        font-size: 3dvh;
        font-style: italic;
    }

    a:last-child {
        display: flex;
        height: 100%;
        align-items: center;
        color: ${variaveis.verde1};
        font-weight: bold;
    }
`;

export const Embla = styled.div`
    overflow: hidden;
`;

export const EmblaContainer = styled.div`
    display: flex;
`;

export const EmblaSlide = styled.div`
    flex: 0 0 100%;
`;

export const TechsProjetoContainer = styled.div`
    padding: 1dvh 0;

    h4 {
        font-size: 2.25dvh;
    }

    .containerIcons {
        width: 100%;
        display: flex;
        padding: 0.5dvh 0;
        align-items: center;
        gap: 1.5dvh;

        img {
            height: 2.5em;
            width: auto;
            display: block;
        }
    }
`;
