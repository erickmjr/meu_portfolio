import { AvisoStatusStyled } from './styles';

type AvisoStatusProps = {
    statusAviso: boolean;
    mostrar: boolean;
};

const AvisoStatusForm = ({ statusAviso, mostrar }: AvisoStatusProps) => {
    return (
        <AvisoStatusStyled status mostrar={mostrar}>
            {statusAviso ? (
                <>E-mail enviado com sucesso!</>
            ) : (
                <>Ocorreu um erro ao enviar o e-mail</>
            )}
        </AvisoStatusStyled>
    );
};

export default AvisoStatusForm;
