import type { ProjetoFrontEnd } from '../../dados/projetos';
import { ListaTecnologias } from '../../styles/layout';
import { IconeSetaExterna } from '../Icones';
import { ProjetoStyled } from './styles';

const Projeto = ({
    titulo,
    data,
    descricao,
    tecnologias,
    imagens,
    linkSite,
    linkRepo,
}: ProjetoFrontEnd) => {
    const [capa, detalhe] = imagens;

    return (
        <ProjetoStyled>
            {/* A imagem repete o link "Ver site"; fica fora da ordem de tabulação. */}
            <a
                className="imagem"
                href={linkSite}
                target="_blank"
                rel="noreferrer"
                tabIndex={-1}
                aria-hidden="true"
            >
                <img
                    src={capa}
                    alt=""
                    width={1280}
                    height={628}
                    loading="lazy"
                    decoding="async"
                />
                <img
                    className="alternativa"
                    src={detalhe}
                    alt=""
                    width={1280}
                    height={628}
                    loading="lazy"
                    decoding="async"
                />
            </a>

            <div className="cabecalho">
                <h4>{titulo}</h4>
                <span>{data}</span>
            </div>
            <p>{descricao}</p>
            <ListaTecnologias aria-label="Tecnologias usadas">
                {tecnologias.map((tecnologia) => (
                    <li key={tecnologia}>{tecnologia}</li>
                ))}
            </ListaTecnologias>

            <div className="links">
                <a href={linkSite} target="_blank" rel="noreferrer">
                    Ver site
                    <IconeSetaExterna />
                </a>
                <a href={linkRepo} target="_blank" rel="noreferrer">
                    Código
                    <IconeSetaExterna />
                </a>
            </div>
        </ProjetoStyled>
    );
};

export default Projeto;
