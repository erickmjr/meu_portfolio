import { useState, type ChangeEvent, type FormEvent } from 'react';
import emailjs from 'emailjs-com';
import AvisoStatusForm, { type StatusFormulario } from '../AvisoStatusForm';
import { BotaoEnviar, CampoForm, FormStyled } from './styles';

const formularioVazio = {
    user_name: '',
    user_email: '',
    message: '',
};

export default function ContactForm() {
    const [dadosForm, setDadosForm] = useState(formularioVazio);
    const [status, setStatus] = useState<StatusFormulario>('ocioso');

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setDadosForm({
            ...dadosForm,
            [e.target.name]: e.target.value,
        });

        if (status === 'enviado' || status === 'erro') setStatus('ocioso');
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('enviando');

        try {
            await emailjs.send(
                'service_cy2jm2q',
                'template_jl59a3j',
                dadosForm,
                '5ncF7xg4Q58PrRBmB',
            );
            setDadosForm(formularioVazio);
            setStatus('enviado');
        } catch (err) {
            console.error('Erro ao enviar e-mail:', err);
            setStatus('erro');
        }
    };

    const enviando = status === 'enviando';

    return (
        <FormStyled onSubmit={handleSubmit}>
            <CampoForm>
                <label htmlFor="campo-nome">Nome</label>
                <input
                    id="campo-nome"
                    type="text"
                    name="user_name"
                    autoComplete="name"
                    value={dadosForm.user_name}
                    onChange={handleChange}
                    required
                />
            </CampoForm>
            <CampoForm>
                <label htmlFor="campo-email">E-mail</label>
                <input
                    id="campo-email"
                    type="email"
                    name="user_email"
                    autoComplete="email"
                    value={dadosForm.user_email}
                    onChange={handleChange}
                    required
                />
            </CampoForm>
            <CampoForm>
                <label htmlFor="campo-mensagem">Mensagem</label>
                <textarea
                    id="campo-mensagem"
                    name="message"
                    rows={5}
                    value={dadosForm.message}
                    onChange={handleChange}
                    required
                />
            </CampoForm>

            <div className="envio">
                <BotaoEnviar type="submit" disabled={enviando}>
                    {enviando ? 'Enviando…' : 'Enviar mensagem'}
                </BotaoEnviar>
                <AvisoStatusForm status={status} />
            </div>
        </FormStyled>
    );
}
