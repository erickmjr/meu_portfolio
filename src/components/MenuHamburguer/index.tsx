import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { contato } from '../../dados/contato';
import { secoesNavegacao } from '../../dados/navegacao';
import { telas } from '../../styles/variaveis';
import BtnBaixarCV from '../BtnBaixarCV';
import { IconeEmail, IconeGithub, IconeLinkedin } from '../Icones';
import { BotaoMenu, PainelMenu, RedesMenu } from './styles';

type MenuHamburguerProps = {
    ativa: string;
};

const MenuHamburguer = ({ ativa }: MenuHamburguerProps) => {
    const [aberto, setAberto] = useState(false);
    const botaoRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!aberto) return;

        const aoTeclar = (evento: KeyboardEvent) => {
            if (evento.key === 'Escape') {
                setAberto(false);
                botaoRef.current?.focus();
            }
        };
        const desktop = window.matchMedia(`(min-width: ${telas.tablet})`);
        const aoMudarTela = () => desktop.matches && setAberto(false);

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', aoTeclar);
        desktop.addEventListener('change', aoMudarTela);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', aoTeclar);
            desktop.removeEventListener('change', aoMudarTela);
        };
    }, [aberto]);

    // Fecha o painel antes de rolar, para a rolagem suave não ser bloqueada.
    const irPara = (evento: MouseEvent<HTMLAnchorElement>, id: string) => {
        evento.preventDefault();
        setAberto(false);
        requestAnimationFrame(() => {
            document.getElementById(id)?.scrollIntoView();
        });
    };

    return (
        <>
            <BotaoMenu
                ref={botaoRef}
                type="button"
                aria-expanded={aberto}
                aria-controls="menu-celular"
                onClick={() => setAberto((atual) => !atual)}
            >
                <span className="visualmente-oculto">
                    {aberto ? 'Fechar menu' : 'Abrir menu'}
                </span>
                <span className="linhas" aria-hidden="true">
                    <span />
                    <span />
                </span>
            </BotaoMenu>

            {/* Fora do cabeçalho: o backdrop-filter dele prenderia o position: fixed. */}
            {createPortal(
                <PainelMenu
                    id="menu-celular"
                    data-aberto={aberto}
                    inert={!aberto}
                >
                    <nav aria-label="Seções">
                        <ul>
                            {secoesNavegacao.map(({ id, rotulo }, indice) => (
                                <li
                                    key={id}
                                    style={{
                                        transitionDelay: `${indice * 60}ms`,
                                    }}
                                >
                                    <a
                                        href={`#${id}`}
                                        aria-current={
                                            ativa === id
                                                ? 'location'
                                                : undefined
                                        }
                                        onClick={(evento) => irPara(evento, id)}
                                    >
                                        {rotulo}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="rodape-menu">
                        <BtnBaixarCV
                            variante="primario"
                            mensagem="Baixar currículo"
                        />
                        <RedesMenu>
                            <a
                                href={contato.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <IconeGithub />
                                <span className="visualmente-oculto">
                                    GitHub
                                </span>
                            </a>
                            <a
                                href={contato.linkedin}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <IconeLinkedin />
                                <span className="visualmente-oculto">
                                    LinkedIn
                                </span>
                            </a>
                            <a href={`mailto:${contato.email}`}>
                                <IconeEmail />
                                <span className="visualmente-oculto">
                                    E-mail
                                </span>
                            </a>
                        </RedesMenu>
                    </div>
                </PainelMenu>,
                document.body,
            )}
        </>
    );
};

export default MenuHamburguer;
