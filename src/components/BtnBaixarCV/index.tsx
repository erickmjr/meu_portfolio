import { BtnCVStyled } from './styles';

type ButtonProps = {
    mensagem: string;
    imagem: React.ReactNode;
};

const BtnBaixarCV = ({ mensagem, imagem }: ButtonProps) => (
    <BtnCVStyled>
        {mensagem}
        <img src={`${imagem}`} alt="Baixar curriculo" />
    </BtnCVStyled>
);

export default BtnBaixarCV;
