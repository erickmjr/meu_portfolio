import Projeto from '../../components/Projeto';

import imgListaContatos from '../../images/projetos/listaDeContatos/image.png';
import imgListaContatos1 from '../../images/projetos/listaDeContatos/image1.png';
import imgLumos from '../../images/projetos/Lumos/image.png';
import imgLumos1 from '../../images/projetos/Lumos/image1.png';
import imgBuscador from '../../images/projetos/buscadorGithub/image.png';
import imgBuscador1 from '../../images/projetos/buscadorGithub/image1.png';
import imgFutNews from '../../images/projetos/futNews/image.png';
import imgFutNews1 from '../../images/projetos/futNews/image1.png';
import imgFutNews2 from '../../images/projetos/futNews/image2.png';

import reactIcon from '../../images/icons/react.svg';
import reduxIcon from '../../images/icons/redux.svg';
import typescriptIcon from '../../images/icons/typescript.svg';
import htmlIcon from '../../images/icons/html5.svg';
import gulpIcon from '../../images/icons/gulp.svg';
import bootstrapIcon from '../../images/icons/bootstrap.svg';
import sassIcon from '../../images/icons/sass.svg';
import styledComponentsIcon from '../../images/icons/styledcomponents.svg';
import jqueryIcon from '../../images/icons/jquery.svg';
import reactRputerIcon from '../../images/icons/reactrouter.svg';

import { ProjetosContainer, ProjetosStyled, TitleContainer } from './styles';

const Projetos = () => {
    return (
        <ProjetosStyled>
            <TitleContainer>
                <h2>Meus projetos</h2>
                <p>
                    Confira os projetos que venho desenvolvendo ao longo dos
                    meus estudos
                </p>
            </TitleContainer>

            <ProjetosContainer>
                <ul>
                    <li>
                        <Projeto
                            titulo="Lista de contatos"
                            descricao="O site “Lista de Contatos” oferece uma interface moderna e organizada para gerenciar informações de contato, com foco em usabilidade e eficiência. Desenvolvido com React, TypeScript e Styled-Components, proporciona uma experiência fluida e visualmente agradável ao usuário."
                            imagens={[imgListaContatos, imgListaContatos1]}
                            linkHospedagem="https://lista-de-contatos-zeta-coral.vercel.app"
                            linkRepo="https://github.com/erickmjr/lista_de_contatos"
                            tecnologias={[
                                {
                                    iconUrl: reactIcon,
                                    iconAlt: 'React',
                                    urlDocumentacao: 'https://react.dev/',
                                },
                                {
                                    iconUrl: typescriptIcon,
                                    iconAlt: 'TypeScript',
                                    urlDocumentacao:
                                        'https://www.typescriptlang.org/',
                                },
                                {
                                    iconUrl: reduxIcon,
                                    iconAlt: 'Redux',
                                    urlDocumentacao: 'https://redux.js.org/',
                                },
                                {
                                    iconUrl: styledComponentsIcon,
                                    iconAlt: 'Styled Components',
                                    urlDocumentacao:
                                        'https://styled-components.com/',
                                },
                                {
                                    iconUrl: reactRputerIcon,
                                    iconAlt: 'React Router',
                                    urlDocumentacao: 'https://reactrouter.com/',
                                },
                            ]}
                        />
                    </li>
                    <li>
                        <Projeto
                            titulo="Lumos"
                            descricao="A landing page Lumos apresenta um design responsivo e interativo para um serviço de streaming fictício. Criada com HTML5, jQuery, SCSS e Bootstrap Icons, a interface oferece uma navegação fluida e adaptável, aliando estrutura semântica, recursos dinâmicos e uma identidade visual coesa."
                            imagens={[imgLumos, imgLumos1]}
                            linkHospedagem="https://you-landing-page.vercel.app"
                            linkRepo="https://github.com/erickmjr/Lumos-LandingPage"
                            tecnologias={[
                                {
                                    iconUrl: jqueryIcon,
                                    iconAlt: 'jQuery',
                                    urlDocumentacao: 'https://jquery.com/',
                                },
                                {
                                    iconUrl: sassIcon,
                                    iconAlt: 'Sass',
                                    urlDocumentacao: 'https://sass-lang.com/',
                                },
                                {
                                    iconUrl: bootstrapIcon,
                                    iconAlt: 'Bootstrap',
                                    urlDocumentacao:
                                        'https://getbootstrap.com/',
                                },
                                {
                                    iconUrl: gulpIcon,
                                    iconAlt: 'Gulp',
                                    urlDocumentacao: 'https://gulpjs.com/',
                                },
                                {
                                    iconUrl: htmlIcon,
                                    iconAlt: 'HTML5',
                                    urlDocumentacao:
                                        'https://developer.mozilla.org/docs/Web/HTML',
                                },
                            ]}
                        />
                    </li>
                    <li>
                        <Projeto
                            titulo="Buscador de Github"
                            descricao="Neste projeto, desenvolvi um buscador de perfis no GitHub que permite consultar usuários e visualizar informações detalhadas sobre seus repositórios públicos. A aplicação foi construída com HTML5, CSS3 e jQuery, integrando a API oficial do GitHub para obter e exibir os dados em tempo real. O foco principal foi oferecer uma interface simples, funcional e responsiva, que facilitasse a navegação e a busca por perfis na plataforma."
                            imagens={[imgBuscador, imgBuscador1]}
                            linkHospedagem="https://buscador-github-three.vercel.app"
                            linkRepo="https://github.com/erickmjr/buscador_github"
                            tecnologias={[
                                {
                                    iconUrl: jqueryIcon,
                                    iconAlt: 'jQuery',
                                    urlDocumentacao: 'https://jquery.com/',
                                },
                                {
                                    iconUrl: sassIcon,
                                    iconAlt: 'Sass',
                                    urlDocumentacao: 'https://sass-lang.com/',
                                },
                                {
                                    iconUrl: htmlIcon,
                                    iconAlt: 'HTML5',
                                    urlDocumentacao:
                                        'https://developer.mozilla.org/docs/Web/HTML',
                                },
                            ]}
                        />
                    </li>
                    <li>
                        <Projeto
                            titulo="FutNews"
                            descricao="Este projeto consiste em uma landing page de notícias de futebol, com o objetivo de apresentar informações de forma clara, atrativa e totalmente responsiva. O site foi pensado para proporcionar uma experiência de navegação fluida em diferentes dispositivos, empregando tecnologias como HTML5, SCSS (utilizando a metodologia BEM) e jQuery para garantir uma interface moderna e funcional."
                            imagens={[imgFutNews, imgFutNews1, imgFutNews2]}
                            linkHospedagem="https://landing-page-fut-naticos.vercel.app"
                            linkRepo="https://github.com/erickmjr/LandingPage-FutNaticos"
                            tecnologias={[
                                {
                                    iconUrl: bootstrapIcon,
                                    iconAlt: 'Bootstrap',
                                    urlDocumentacao:
                                        'https://getbootstrap.com/',
                                },
                                {
                                    iconUrl: jqueryIcon,
                                    iconAlt: 'jQuery',
                                    urlDocumentacao: 'https://jquery.com/',
                                },
                                {
                                    iconUrl: sassIcon,
                                    iconAlt: 'Sass',
                                    urlDocumentacao: 'https://sass-lang.com/',
                                },
                                {
                                    iconUrl: htmlIcon,
                                    iconAlt: 'HTML5',
                                    urlDocumentacao:
                                        'https://developer.mozilla.org/docs/Web/HTML',
                                },
                            ]}
                        />
                    </li>
                </ul>
            </ProjetosContainer>
        </ProjetosStyled>
    );
};

export default Projetos;
