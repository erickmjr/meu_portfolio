import { BiografiaStyled, ContainerImage, ContainerText } from './styles';
import GithubStats from '../../components/GithubStats';
const Biografia = () => {
    return (
        <BiografiaStyled id="sobre">
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
                    Me interesso por interfaces bem construídas e funcionais, e
                    aprendo melhor construindo projetos práticos. Busco minha
                    primeira oportunidade como desenvolvedor front-end, onde eu
                    possa unir técnica, criatividade e aprendizado contínuo.
                </p>
            </ContainerText>
            <ContainerImage>
                <GithubStats />
            </ContainerImage>
        </BiografiaStyled>
    );
};

export default Biografia;
