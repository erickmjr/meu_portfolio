import { useEffect, useState } from 'react';
import ContactForm from '../../components/Formulario';
import {
    IconeConfirmado,
    IconeCopiar,
    IconeEmail,
    IconeGithub,
    IconeLinkedin,
} from '../../components/Icones';
import Revelar from '../../components/Revelar';
import TituloSecao from '../../components/TituloSecao';
import { contato } from '../../dados/contato';
import { Container, Secao } from '../../styles/layout';
import { Canais, GradeContato } from './styles';

const Contato = () => {
    const [copiado, setCopiado] = useState(false);

    useEffect(() => {
        if (!copiado) return;
        const temporizador = setTimeout(() => setCopiado(false), 2200);
        return () => clearTimeout(temporizador);
    }, [copiado]);

    const copiarEmail = async () => {
        try {
            await navigator.clipboard.writeText(contato.email);
            setCopiado(true);
        } catch {
            window.location.href = `mailto:${contato.email}`;
        }
    };

    return (
        <Secao id="contato">
            <Container>
                <TituloSecao introducao="Quer conversar sobre uma vaga ou um projeto? Mande uma mensagem pelo formulário ou fale comigo direto por um destes canais.">
                    Contato
                </TituloSecao>

                <GradeContato>
                    <Revelar>
                        <Canais>
                            <li>
                                <IconeEmail />
                                <div>
                                    <span className="rotulo">E-mail</span>
                                    <a href={`mailto:${contato.email}`}>
                                        {contato.email}
                                    </a>
                                </div>
                                <button
                                    type="button"
                                    className="copiar"
                                    onClick={copiarEmail}
                                    data-copiado={copiado}
                                >
                                    {copiado ? (
                                        <IconeConfirmado />
                                    ) : (
                                        <IconeCopiar />
                                    )}
                                    <span aria-live="polite">
                                        {copiado ? 'Copiado' : 'Copiar'}
                                    </span>
                                </button>
                            </li>
                            <li>
                                <IconeLinkedin />
                                <div>
                                    <span className="rotulo">LinkedIn</span>
                                    <a
                                        href={contato.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        in/{contato.usuarioLinkedin}
                                    </a>
                                </div>
                            </li>
                            <li>
                                <IconeGithub />
                                <div>
                                    <span className="rotulo">GitHub</span>
                                    <a
                                        href={contato.github}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        @{contato.usuarioGithub}
                                    </a>
                                </div>
                            </li>
                        </Canais>
                    </Revelar>

                    <Revelar atraso={120}>
                        <ContactForm />
                    </Revelar>
                </GradeContato>
            </Container>
        </Secao>
    );
};

export default Contato;
