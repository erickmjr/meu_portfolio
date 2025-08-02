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
import htmlIcon from '../../images/icons/html5.svg';
import reactRouterIcon from '../../images/icons/reactrouter.svg';
import figmaIcon from '../../images/icons/figma.svg';

import BarraTopo from '../BarraTopo';
import IconeTech from '../../components/IconeTech';

const Hero = () => {
    return (
        <HeroStyled id="inicio">
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
                            <IconeTech
                                urlDocumentacao="https://react.dev/"
                                iconUrl={reactIcon}
                                iconAlt="React"
                            />
                        </li>
                        <li>
                            <IconeTech
                                urlDocumentacao="https://redux.js.org/"
                                iconUrl={reduxIcon}
                                iconAlt="Redux"
                            />
                        </li>
                        <li>
                            <IconeTech
                                iconUrl={typescriptIcon}
                                iconAlt="TypeScript"
                                urlDocumentacao="https://www.typescriptlang.org/"
                            />
                        </li>
                        <li>
                            <IconeTech
                                urlDocumentacao="https://developer.mozilla.org/docs/Web/JavaScript"
                                iconUrl={javascriptIcon}
                                iconAlt="JavaScript"
                            />
                        </li>
                        <li>
                            <IconeTech
                                urlDocumentacao="https://gulpjs.com/"
                                iconUrl={gulpIcon}
                                iconAlt="Gulp"
                            />
                        </li>
                        <li>
                            <IconeTech
                                urlDocumentacao="https://getbootstrap.com/"
                                iconUrl={bootstrapIcon}
                                iconAlt="Bootstrap"
                            />
                        </li>
                        <li>
                            <IconeTech
                                urlDocumentacao="https://sass-lang.com/"
                                iconUrl={sassIcon}
                                iconAlt="Sass"
                            />
                        </li>
                        <li>
                            <IconeTech
                                urlDocumentacao="https://gruntjs.com/"
                                iconUrl={gruntIcon}
                                iconAlt="Grunt"
                            />
                        </li>
                        <li>
                            <IconeTech
                                urlDocumentacao="https://styled-components.com/"
                                iconUrl={styledComponentsIcon}
                                iconAlt="Styled Components"
                            />
                        </li>
                        <li>
                            <IconeTech
                                urlDocumentacao="https://vitest.dev/"
                                iconUrl={vitestIcon}
                                iconAlt="Vitest"
                            />
                        </li>
                        <li>
                            <IconeTech
                                urlDocumentacao="https://jquery.com/"
                                iconUrl={jqueryIcon}
                                iconAlt="jQuery"
                            />
                        </li>
                        <li>
                            <IconeTech
                                urlDocumentacao="https://www.mysql.com/"
                                iconUrl={mysqlIcon}
                                iconAlt="MySQL"
                            />
                        </li>
                        <li>
                            <IconeTech
                                urlDocumentacao="https://developer.mozilla.org/docs/Web/HTML"
                                iconUrl={htmlIcon}
                                iconAlt="HTML5"
                            />
                        </li>
                        <li>
                            <IconeTech
                                urlDocumentacao="https://reactrouter.com/"
                                iconUrl={reactRouterIcon}
                                iconAlt="React Router"
                            />
                        </li>
                        <li>
                            <IconeTech
                                urlDocumentacao="https://www.figma.com/"
                                iconUrl={figmaIcon}
                                iconAlt="Figma"
                            />
                        </li>
                    </ul>
                </TechsContainer>
            </CardContainer>
        </HeroStyled>
    );
};

export default Hero;
