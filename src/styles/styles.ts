import { createGlobalStyle } from 'styled-components';
import variaveis from './variaveis';
import cursorPadrao from '../images/cursores/padrao.png';
import cursorPointer from '../images/cursores/pointer.png';

const EstiloGlobal = createGlobalStyle`
    html, body, #root {
        height: 100dvh;
        cursor: url(${cursorPadrao}), auto;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: ${variaveis.fontePrincipal}
    }

    button, a {
        cursor: url(${cursorPointer}), pointer;
    }

    .nomeAtivado {
        opacity: 1;
    }

    .absoluto {
        width: 100%;
        z-index: 100;
        background-color: ${variaveis.black1};
        transition: background-color 0.5s ease;
        
    }
`;

export default EstiloGlobal;
