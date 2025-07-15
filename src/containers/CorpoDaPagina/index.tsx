import BarraLateral from '../BarraLateral';
import ConteudoPrincipal from '../ConteudoPrincipal';
import { CorpoDaPaginaStyled } from './styles';

const CorpoDaPagina = () => {
    return (
        <>
            <CorpoDaPaginaStyled>
                <BarraLateral />
                <ConteudoPrincipal />
            </CorpoDaPaginaStyled>
        </>
    );
};

export default CorpoDaPagina;
