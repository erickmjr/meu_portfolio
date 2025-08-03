import { Link } from 'react-scroll';
import BtnBaixarCV from '../../components/BtnBaixarCV';
import { BarraTopoStyled } from './styles';
import downloadIcon from '../../images/icons/download.png';
import { useEffect, useState } from 'react';
const BarraTopo = () => {
    const alturaTela: number = window.innerHeight * 0.2;

    const [exibir, setExibir] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const novaAltura: number = window.scrollY;

            setExibir(novaAltura >= alturaTela);
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [alturaTela]);

    return (
        <BarraTopoStyled className={`${exibir ? 'absoluto' : ''}`}>
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
