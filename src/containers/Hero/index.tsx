import {
    lazy,
    Suspense,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Botao } from '../../components/Botao/styles';
import BtnBaixarCV from '../../components/BtnBaixarCV';
import {
    IconeEmail,
    IconeGithub,
    IconeLinkedin,
} from '../../components/Icones';
import { contato } from '../../dados/contato';
import { useConsultaMidia } from '../../hooks/useConsultaMidia';
import fotoErick from '../../images/erick-mello.jpg';
import { Container } from '../../styles/layout';
import { telas } from '../../styles/variaveis';
import { DicaFluxo, HeroStyled, Retrato, TextoHero } from './styles';

// O Three.js fica num chunk separado, carregado depois da entrada do hero.
const FluxoEventos = lazy(() => import('../../components/FluxoEventos'));

const Hero = () => {
    const heroRef = useRef<HTMLElement>(null);
    const gradeRef = useRef<HTMLDivElement>(null);
    const textoRef = useRef<HTMLDivElement>(null);
    const retratoRef = useRef<HTMLElement>(null);
    const dicaRef = useRef<HTMLParagraphElement>(null);
    const [mostrarFluxo, setMostrarFluxo] = useState(false);
    const [disparou, setDisparou] = useState(false);
    const movimentoReduzido = useConsultaMidia(
        '(prefers-reduced-motion: reduce)',
    );
    const temMouse = useConsultaMidia('(hover: hover)');
    // Empilhado, o conteúdo ocupa a largura toda: o fluxo passa por baixo dele.
    const empilhado = useConsultaMidia(`(max-width: ${telas.tablet})`);
    const obstaculosRefs = empilhado
        ? [gradeRef, dicaRef]
        : [textoRef, retratoRef, dicaRef];

    useEffect(() => {
        const temporizador = setTimeout(() => setMostrarFluxo(true), 900);
        return () => clearTimeout(temporizador);
    }, []);

    const aoDisparar = useCallback(() => setDisparou(true), []);

    return (
        <HeroStyled id="inicio" ref={heroRef}>
            {mostrarFluxo && (
                <Suspense fallback={null}>
                    <FluxoEventos
                        areaRef={heroRef}
                        obstaculosRefs={obstaculosRefs}
                        aoDisparar={aoDisparar}
                    />
                </Suspense>
            )}

            <Container className="grade" ref={gradeRef}>
                <TextoHero ref={textoRef}>
                    <h1>
                        <span className="linha">
                            <span>Érick Mello</span>
                        </span>
                        <span className="linha">
                            <span>Junior</span>
                        </span>
                    </h1>

                    <p className="resumo">
                        Desenvolvedor full-stack. Hoje construo integrações
                        serverless na AWS como estagiário de back-end na BGC
                        Brasil.
                    </p>

                    <div className="acoes">
                        <Botao href="#projetos" $variante="primario">
                            Ver projetos
                        </Botao>
                        <BtnBaixarCV mensagem="Baixar currículo" />
                    </div>

                    <ul className="redes">
                        <li>
                            <a
                                href={contato.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <IconeGithub />
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href={contato.linkedin}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <IconeLinkedin />
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href={`mailto:${contato.email}`}>
                                <IconeEmail />
                                E-mail
                            </a>
                        </li>
                    </ul>
                </TextoHero>

                <Retrato ref={retratoRef}>
                    <div className="moldura">
                        <img
                            src={fotoErick}
                            alt="Érick Mello Junior, de óculos e camisa polo azul-marinho"
                            width={900}
                            height={1236}
                            fetchPriority="high"
                        />
                    </div>
                    <figcaption>Feira de Santana, Bahia</figcaption>
                </Retrato>
            </Container>

            {mostrarFluxo && !movimentoReduzido && (
                <DicaFluxo data-oculta={disparou} aria-hidden="true">
                    <Container>
                        <p ref={dicaRef}>
                            <span className="ponto" />
                            {temMouse
                                ? 'Clique no fundo para disparar eventos'
                                : 'Toque no fundo para disparar eventos'}
                        </p>
                    </Container>
                </DicaFluxo>
            )}
        </HeroStyled>
    );
};

export default Hero;
