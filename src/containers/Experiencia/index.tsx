import type { CSSProperties } from 'react';
import TituloSecao from '../../components/TituloSecao';
import { experiencias } from '../../dados/experiencias';
import { useEmVista } from '../../hooks/useEmVista';
import { Container, ListaTecnologias, Secao } from '../../styles/layout';
import { ItemLinhaDoTempo, LinhaDoTempo } from './styles';

const Experiencia = () => {
    const [ref, emVista] = useEmVista<HTMLOListElement>({ limiar: 0.05 });

    return (
        <Secao id="experiencia">
            <Container>
                <TituloSecao>Experiência</TituloSecao>

                <LinhaDoTempo ref={ref} data-visivel={emVista}>
                    {experiencias.map((experiencia, indice) => (
                        <ItemLinhaDoTempo
                            key={experiencia.empresa}
                            data-atual={experiencia.atual}
                            style={
                                {
                                    '--atraso': `${indice * 220}ms`,
                                } as CSSProperties
                            }
                        >
                            <div className="quando">
                                <span className="periodo">
                                    {experiencia.periodo}
                                </span>
                                <span>{experiencia.local}</span>
                            </div>

                            <span className="marco" aria-hidden="true" />

                            <div className="conteudo">
                                <h3>{experiencia.cargo}</h3>
                                <p className="empresa">{experiencia.empresa}</p>
                                <p className="resumo">{experiencia.resumo}</p>
                                <ul className="atividades">
                                    {experiencia.atividades.map((atividade) => (
                                        <li key={atividade}>{atividade}</li>
                                    ))}
                                </ul>
                                <ListaTecnologias aria-label="Tecnologias usadas">
                                    {experiencia.tecnologias.map(
                                        (tecnologia) => (
                                            <li key={tecnologia}>
                                                {tecnologia}
                                            </li>
                                        ),
                                    )}
                                </ListaTecnologias>
                            </div>
                        </ItemLinhaDoTempo>
                    ))}
                </LinhaDoTempo>
            </Container>
        </Secao>
    );
};

export default Experiencia;
