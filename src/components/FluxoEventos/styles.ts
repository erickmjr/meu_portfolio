import styled, { keyframes } from 'styled-components';

const surgir = keyframes`
    from {
        opacity: 0;
    }
`;

// Some sob o cabeçalho e se dissolve na transição para a próxima seção.
const mascara =
    'linear-gradient(to bottom, transparent 0, transparent 4.5rem, #000 9rem, #000 calc(100% - 5rem), transparent 100%)';

export const CamadaFluxo = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    -webkit-mask-image: ${mascara};
    mask-image: ${mascara};
    animation: ${surgir} 1.6s ease both;
`;
