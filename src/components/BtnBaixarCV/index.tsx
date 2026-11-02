import { contato } from '../../dados/contato';
import { Botao } from '../Botao/styles';
import { IconeDownload } from '../Icones';

type BtnBaixarCVProps = {
    mensagem?: string;
    variante?: 'primario' | 'secundario';
    className?: string;
};

const BtnBaixarCV = ({
    mensagem = 'Baixar CV',
    variante = 'secundario',
    className,
}: BtnBaixarCVProps) => (
    <Botao
        href={contato.curriculo}
        download="Erick_Mello_Curriculo.pdf"
        $variante={variante}
        className={className}
    >
        <IconeDownload />
        {mensagem}
    </Botao>
);

export default BtnBaixarCV;
