import { createGlobalStyle } from 'styled-components';
import variaveis from './variaveis';

const EstiloGlobal = createGlobalStyle`
    html, body, #root {
        height: 100vh;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: ${variaveis.fontePrincipal}
    }

`;

export default EstiloGlobal;
