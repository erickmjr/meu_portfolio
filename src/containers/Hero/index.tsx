import {
    HeroStyled,
    ProfileCard,
    CardContainer,
    TechsContainer,
} from './styles';
import imgPerfil from '../../images/imgPerfil.png';
import reactIcon from '../../images/icons/react.svg';
import reduxIcon from '../../images/icons/redux.svg';
import typescriptIcon from '../../images/icons/typescript.svg';
import javascriptIcon from '../../images/icons/javascript.svg';
import gulpIcon from '../../images/icons/gulp.svg';
import bootstrapIcon from '../../images/icons/bootstrap.svg';
import sassIcon from '../../images/icons/sass.svg';
import gruntIcon from '../../images/icons/grunt.svg';
import styledComponentsIcon from '../../images/icons/styledcomponents.svg';
import vitestIcon from '../../images/icons/vitest.svg';
import jqueryIcon from '../../images/icons/jquery.svg';
import mysqlIcon from '../../images/icons/mysql.svg';
import BarraTopo from '../BarraTopo';

const Hero = () => {
    return (
        <HeroStyled>
            <BarraTopo />
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
                        <p>DESENVOLVEDOR FRONT-END</p>
                    </div>
                </ProfileCard>
                <TechsContainer>
                    <h2>Tecnologias</h2>
                    <ul>
                        <li>
                            <img src={reactIcon} alt="React" />
                        </li>
                        <li>
                            <img src={reduxIcon} alt="Redux" />
                        </li>
                        <li>
                            <img src={typescriptIcon} alt="TypeScript" />
                        </li>
                        <li>
                            <img src={javascriptIcon} alt="JavaScript" />
                        </li>
                        <li>
                            <img src={gulpIcon} alt="Gulp" />
                        </li>
                        <li>
                            <img src={bootstrapIcon} alt="Bootstrap" />
                        </li>
                        <li>
                            <img src={sassIcon} alt="Sass" />
                        </li>
                        <li>
                            <img src={gruntIcon} alt="Grunt" />
                        </li>
                        <li>
                            <img
                                src={styledComponentsIcon}
                                alt="Styled Components"
                            />
                        </li>
                        <li>
                            <img src={vitestIcon} alt="Vitest" />
                        </li>
                        <li>
                            <img src={jqueryIcon} alt="jQuery" />
                        </li>
                        <li>
                            <img src={mysqlIcon} alt="MySQL" />
                        </li>
                    </ul>
                </TechsContainer>
            </CardContainer>
        </HeroStyled>
    );
};

export default Hero;
