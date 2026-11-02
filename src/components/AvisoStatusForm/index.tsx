import { contato } from '../../dados/contato';
import { IconeConfirmado } from '../Icones';
import { AvisoStatusStyled } from './styles';

export type StatusFormulario = 'ocioso' | 'enviando' | 'enviado' | 'erro';

type AvisoStatusProps = {
    status: StatusFormulario;
};

// A região fica sempre no DOM para que leitores de tela anunciem a mudança.
const AvisoStatusForm = ({ status }: AvisoStatusProps) => (
    <AvisoStatusStyled role="status" data-status={status}>
        {status === 'enviado' && (
            <>
                <IconeConfirmado />
                Mensagem enviada. Vou responder no e-mail que você informou.
            </>
        )}
        {status === 'erro' && (
            <>
                Não foi possível enviar a mensagem. Tente de novo ou escreva
                para {contato.email}.
            </>
        )}
    </AvisoStatusStyled>
);

export default AvisoStatusForm;
