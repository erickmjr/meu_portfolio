import { BiografiaStyled, ContainerImage, ContainerText } from './styles';
import imgPraia from '../../images/imgPraia.png';
const Biografia = () => {
    return (
        <BiografiaStyled>
            <ContainerText>
                <h2>Olá!</h2>
                <h3>Eu sou Érick Mello, Desenvolvedor Front-End</h3>
                <p>
                    Sou estudante do quarto semestre de Sistemas de Informação
                    no IFBA e atualmente estou focado em desenvolvimento{' '}
                    <strong>Front-End</strong>. Tenho experiência com
                    tecnologias como <strong>React</strong>,{' '}
                    <strong>Redux</strong>, <strong>Styled-Components</strong>,{' '}
                    <strong>TypeScript</strong>, <strong>Vitest</strong> e mais
                    algumas...
                </p>
                <p>
                    Apesar de estar atuando principalmente no Front-End,
                    pretendo me aprofundar no desenvolvimento back-end com{' '}
                    <strong>Java</strong>, com o objetivo de me tornar um
                    desenvolvedor <strong>Full-Stack</strong>.
                </p>
                <p>
                    Gosto de aprender construindo projetos reais e resolvendo
                    problemas práticos. Estou em busca da minha primeira
                    oportunidade na área de desenvolvimento, para que eu possa
                    aplicar meus conhecimentos, continuar aprendendo e crescer
                    junto com a equipe.
                </p>
            </ContainerText>
            <ContainerImage>
                <img src={imgPraia} alt="Erick de costas na praia" />
            </ContainerImage>
        </BiografiaStyled>
    );
};

export default Biografia;
