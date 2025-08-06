import { useState, type FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { ContainerForm, FormStyled } from './styles';
import AvisoStatusForm from '../AvisoStatusForm';

export default function ContactForm() {
    const [statusForm, setStatusForm] = useState(false);
    const [mostrarAviso, setMostrarAviso] = useState(false);

    const [dadosForm, setDadosForm] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setDadosForm({
            ...dadosForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            emailjs
                .send(
                    'service_cy2jm2q',
                    'template_jl59a3j',
                    dadosForm,
                    '5ncF7xg4Q58PrRBmB',
                )
                .then(() => {
                    setDadosForm({
                        user_name: '',
                        user_email: '',
                        message: '',
                    });
                    setStatusForm(true);
                    setMostrarAviso(true);
                })
                .catch((err) => {
                    setStatusForm(false);
                    setMostrarAviso(true);
                    console.error('Erro: ', err);
                });
        } finally {
            setTimeout(() => {
                setMostrarAviso(false);
            }, 3000);
        }
    };

    return (
        <>
            <ContainerForm>
                <h3>Gostou do meu trabalho?</h3>
                <p>Me envie uma mensagem diretamente!</p>
                <FormStyled onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Seu nome"
                        value={dadosForm.user_name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Seu e-mail"
                        value={dadosForm.user_email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Sua mensagem"
                        value={dadosForm.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Enviar</button>
                </FormStyled>
                <AvisoStatusForm
                    statusAviso={statusForm}
                    mostrar={mostrarAviso}
                />
            </ContainerForm>
        </>
    );
}
