import Revelar from '../../components/Revelar';
import TituloSecao from '../../components/TituloSecao';
import { formacao } from '../../dados/experiencias';
import { gruposTecnologias } from '../../dados/tecnologias';
import { Container, Secao } from '../../styles/layout';
import { GradeSobre, Tecnologias } from './styles';

const Biografia = () => {
    return (
        <Secao id="sobre">
            <Container>
                <TituloSecao>Sobre mim</TituloSecao>

                <GradeSobre>
                    <Revelar className="texto">
                        <p>
                            Estou no 6º semestre de Sistemas de Informação no
                            IFBA e fiz a formação de Engenheiro Front-End na
                            EBAC.
                        </p>
                        <p>
                            Comecei pelo front-end, com React e TypeScript. Hoje
                            atuo no back-end, no time de Integrações da BGC
                            Brasil, construindo serviços serverless na AWS. Meu
                            objetivo é crescer como desenvolvedor full-stack,
                            juntando as duas experiências.
                        </p>
                    </Revelar>

                    <Revelar atraso={120} className="formacao">
                        <h3>Formação</h3>
                        <ul>
                            {formacao.map((item) => (
                                <li key={item.curso}>
                                    <strong>{item.curso}</strong>
                                    <span>{item.instituicao}</span>
                                    <span>{item.periodo}</span>
                                </li>
                            ))}
                        </ul>
                    </Revelar>
                </GradeSobre>

                <Tecnologias>
                    <h3>Tecnologias</h3>
                    <div className="grupos">
                        {gruposTecnologias.map((grupo, indice) => (
                            <Revelar
                                key={grupo.titulo}
                                atraso={(indice % 3) * 80}
                                className="grupo"
                            >
                                <h4>{grupo.titulo}</h4>
                                <ul>
                                    {grupo.itens.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </Revelar>
                        ))}
                    </div>
                </Tecnologias>
            </Container>
        </Secao>
    );
};

export default Biografia;
