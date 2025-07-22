import BtnBaixarCV from '../../components/BtnBaixarCV';
import { BarraTopoStyled } from './styles';
import downloadIcon from '../../images/icons/download.png';

const BarraTopo = () => {
    return (
        <BarraTopoStyled>
            <BtnBaixarCV mensagem="Baixar CV" imagem={downloadIcon} />
            <ul>
                <li>
                    <button type="button">Ínicio</button>
                </li>
                <li>
                    <button type="button">Sobre</button>
                </li>
                <li>
                    <button type="button">Projetos</button>
                </li>
                <li>
                    <button type="button">Contato</button>
                </li>
            </ul>
        </BarraTopoStyled>
    );
};

export default BarraTopo;
