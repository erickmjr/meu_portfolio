import { BtnCVStyled } from './styles';

type ButtonProps = {
    mensagem: string;
    imagem: React.ReactNode;
};

const BtnBaixarCV = ({ mensagem, imagem }: ButtonProps) => (
    <BtnCVStyled
        href="../../../public/arquivos/Erick_Mello_Curriculo.pdf"
        download
    >
        {mensagem}
        <img src={`${imagem}`} alt="Baixar curriculo" />
    </BtnCVStyled>
);

export default BtnBaixarCV;
