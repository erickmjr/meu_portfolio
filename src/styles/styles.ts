import { createGlobalStyle } from 'styled-components';
import variaveis from './variaveis';

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: ${variaveis.fontePrincipal}
    }

    h1 {
        font-size: 6dvh;
    }

    li {
        font-size: 3dvh;
    }
`;

export default EstiloGlobal;
