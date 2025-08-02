import { Link } from 'react-scroll';
import BtnBaixarCV from '../../components/BtnBaixarCV';
import { BarraTopoStyled } from './styles';
import downloadIcon from '../../images/icons/download.png';
const BarraTopo = () => {
    return (
        <BarraTopoStyled>
            <BtnBaixarCV mensagem="Baixar CV" imagem={downloadIcon} />
            <ul>
                <li>
                    <Link to="inicio" smooth={true} duration={500}>
                        <button type="button">Ínicio</button>
                    </Link>
                </li>
                <li>
                    <Link to="sobre" smooth={true} duration={500}>
                        <button type="button">Sobre</button>
                    </Link>
                </li>
                <li>
                    <Link to="projetos" smooth={true} duration={500}>
                        <button type="button">Projetos</button>
                    </Link>
                </li>
                <li>
                    <Link to="contato" smooth={true} duration={500}>
                        <button type="button">Contato</button>
                    </Link>
                </li>
            </ul>
        </BarraTopoStyled>
    );
};

export default BarraTopo;
