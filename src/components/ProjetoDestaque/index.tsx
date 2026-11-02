import type { ReactNode } from 'react';
import type { ProjetoBackEnd } from '../../dados/projetos';
import { ListaTecnologias } from '../../styles/layout';
import { Botao } from '../Botao/styles';
import { IconeGithub } from '../Icones';
import Revelar from '../Revelar';
import { ProjetoDestaqueStyled } from './styles';

type ProjetoDestaqueProps = {
    projeto: ProjetoBackEnd;
    // Conteúdo extra entre a descrição e o rodapé, como um diagrama.
    children?: ReactNode;
};

const ProjetoDestaque = ({ projeto, children }: ProjetoDestaqueProps) => {
    const { titulo, meta, descricao, gruposRotas, tecnologias, links } =
        projeto;

    return (
        <ProjetoDestaqueStyled>
            <Revelar className="topo">
                <div className="texto">
                    <h3>{titulo}</h3>
                    <p className="meta">{meta}</p>
                    {descricao.map((paragrafo) => (
                        <p key={paragrafo}>{paragrafo}</p>
                    ))}
                </div>

                <div className="endpoints">
                    {gruposRotas.map((grupo) => (
                        <div key={grupo.titulo} className="grupo-rotas">
                            <h4>{grupo.titulo}</h4>
                            <dl>
                                {grupo.rotas.map(
                                    ({ metodo, caminho, descricao }) => (
                                        <div key={`${metodo} ${caminho}`}>
                                            <dt>
                                                <code>
                                                    <span className="metodo">
                                                        {metodo}
                                                    </span>{' '}
                                                    {caminho}
                                                </code>
                                            </dt>
                                            <dd>{descricao}</dd>
                                        </div>
                                    ),
                                )}
                            </dl>
                        </div>
                    ))}
                </div>
            </Revelar>

            {children}

            <div className="rodape">
                <ListaTecnologias aria-label="Tecnologias usadas">
                    {tecnologias.map((tecnologia) => (
                        <li key={tecnologia}>{tecnologia}</li>
                    ))}
                </ListaTecnologias>
                <div className="links">
                    {links.map(({ rotulo, url }) => (
                        <Botao
                            key={url}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            $variante="secundario"
                        >
                            <IconeGithub tamanho={18} />
                            {rotulo}
                        </Botao>
                    ))}
                </div>
            </div>
        </ProjetoDestaqueStyled>
    );
};

export default ProjetoDestaque;
