import { styled } from 'styled-components';

export const ConteudoPrincipalStyled = styled.div`
    background-color: blue;
    padding: 3dvh;
`;

export const ContainerImagem = styled.div`
    width: 30%;
    img {
        max-width: 100%;
        mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
        -webkit-mask-image: linear-gradient(
            to bottom,
            black 70%,
            transparent 100%
        );
    }
`;
