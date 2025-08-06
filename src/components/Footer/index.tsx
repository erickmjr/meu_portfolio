import { FooterStyled } from './styles';
import githubIcon from '../../images/icons/github.svg';
import linkedinIcon from '../../images/icons/linkedin.png';
import gmailIcon from '../../images/icons/gmail.svg';

const Footer = () => {
    return (
        <FooterStyled>
            <a href="https://github.com/erickmjr" target="_blank">
                Github
                <img src={githubIcon} alt="Github" />
            </a>
            <a
                href="https://linkedin.com/in/erick-mello-junior"
                target="_blank"
            >
                LinkedIn
                <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="mailto:erickmellojr@gmail.com" target="_blank">
                E-mail
                <img src={gmailIcon} alt="e-mail" />
            </a>
        </FooterStyled>
    );
};

export default Footer;
