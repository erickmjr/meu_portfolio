import { Container } from '../../styles/layout';
import { FooterStyled } from './styles';

const Footer = () => {
    return (
        <FooterStyled>
            <Container className="conteudo">
                <p>© {new Date().getFullYear()} Érick Mello Junior</p>
                <a href="#inicio">Voltar ao topo</a>
            </Container>
        </FooterStyled>
    );
};

export default Footer;
