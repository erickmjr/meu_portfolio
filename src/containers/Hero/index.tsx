import {
    HeroStyled,
    ProfileCard,
    CardContainer,
    TechsContainer,
} from './styles';
import imgPerfil from '../../images/imgPerfil.png';
import bootstrapIcon from '../../images/icons/bootstrapIcon.png';
import gruntIcon from '../../images/icons/gruntIcon.png';
import gulpIcon from '../../images/icons/gulpIcon.png';
import javascriptIcon from '../../images/icons/javascriptIcon.png';
import jqueryIcon from '../../images/icons/jqueryIcon.png';
import mysqlIcon from '../../images/icons/mysqlIcon.png';
import reactIcon from '../../images/icons/reactIcon.png';
import reduxIcon from '../../images/icons/reduxIcon.png';
import sassIcon from '../../images/icons/sassIcon.png';
import styledComponentsIcon from '../../images/icons/styledComponentsIcon.png';
import typescriptIcon from '../../images/icons/typescriptIcon.png';
import vitestIcon from '../../images/icons/vitestIcon.png';

const Hero = () => {
    return (
        <>
            <HeroStyled>
                <CardContainer>
                    <ProfileCard>
                        <img src={imgPerfil} alt="Foto de perfil de Erick" />
                        <div>
                            <h1>
                                ÉRICK
                                <br />
                                MELLO
                                <br />
                                JUNIOR
                            </h1>
                            <p>FRONT-END DEVELOPER</p>
                        </div>
                    </ProfileCard>
                    <TechsContainer>
                        <h2>Tecnologias</h2>
                        <ul>
                            <li>
                                <img src={bootstrapIcon} alt="Bootstrap" />
                            </li>
                            <li>
                                <img src={gruntIcon} alt="grunt" />
                            </li>
                            <li>
                                <img src={reactIcon} alt="react" />
                            </li>
                            <li>
                                <img src={reduxIcon} alt="redux" />
                            </li>
                            <li>
                                <img src={javascriptIcon} alt="javascript" />
                            </li>
                            <li>
                                <img src={sassIcon} alt="sass" />
                            </li>
                            <li>
                                <img src={vitestIcon} alt="vitest" />
                            </li>
                            <li>
                                <img src={mysqlIcon} alt="mysql" />
                            </li>
                            <li>
                                <img src={gulpIcon} alt="gulp" />
                            </li>
                            <li>
                                <img src={jqueryIcon} alt="jquery" />
                            </li>
                            <li>
                                <img
                                    src={styledComponentsIcon}
                                    alt="styled Components"
                                />
                            </li>
                            <li>
                                <img src={typescriptIcon} alt="Typescript" />
                            </li>
                        </ul>
                    </TechsContainer>
                </CardContainer>
            </HeroStyled>
        </>
    );
};

export default Hero;
