import DiagramaArquitetura from '../../components/DiagramaArquitetura';
import Projeto from '../../components/Projeto';
import ProjetoDestaque from '../../components/ProjetoDestaque';
import Revelar from '../../components/Revelar';
import TituloSecao from '../../components/TituloSecao';
import {
    apiBestsellers,
    projetosFrontEnd,
    studyFlow,
} from '../../dados/projetos';
import { Container, Secao } from '../../styles/layout';
import { OutrosProjetos } from './styles';

const Projetos = () => {
    return (
        <Secao id="projetos">
            <Container>
                <TituloSecao>Projetos</TituloSecao>

                <ProjetoDestaque projeto={apiBestsellers}>
                    <DiagramaArquitetura />
                </ProjetoDestaque>

                <ProjetoDestaque projeto={studyFlow} />

                <OutrosProjetos>
                    <Revelar className="introducao">
                        <h3>Projetos de front-end</h3>
                        <p>
                            Projetos de estudo, de landing pages com jQuery a
                            aplicações em React com Redux.
                        </p>
                    </Revelar>

                    <ul>
                        {projetosFrontEnd.map((projeto, indice) => (
                            <li key={projeto.titulo}>
                                <Revelar atraso={(indice % 2) * 120}>
                                    <Projeto {...projeto} />
                                </Revelar>
                            </li>
                        ))}
                    </ul>
                </OutrosProjetos>
            </Container>
        </Secao>
    );
};

export default Projetos;
