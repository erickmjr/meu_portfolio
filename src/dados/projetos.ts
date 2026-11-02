import listaCapa from '../images/projetos/lista-de-contatos/capa.webp';
import listaDetalhe from '../images/projetos/lista-de-contatos/detalhe.webp';
import buscadorCapa from '../images/projetos/buscador-github/capa.webp';
import buscadorDetalhe from '../images/projetos/buscador-github/detalhe.webp';
import lumosCapa from '../images/projetos/lumos/capa.webp';
import lumosDetalhe from '../images/projetos/lumos/detalhe.webp';
import futnewsCapa from '../images/projetos/futnews/capa.webp';
import futnewsDetalhe from '../images/projetos/futnews/detalhe.webp';

export type GrupoRotas = {
    titulo: string;
    rotas: { metodo: string; caminho: string; descricao: string }[];
};

export type ProjetoBackEnd = {
    titulo: string;
    meta: string;
    descricao: string[];
    gruposRotas: GrupoRotas[];
    tecnologias: string[];
    links: { rotulo: string; url: string }[];
};

export const apiBestsellers: ProjetoBackEnd = {
    titulo: 'API de bestsellers da Amazon',
    meta: 'Projeto pessoal, fev 2026',
    descricao: [
        'API REST serverless que expõe o top 3 de cada categoria da página de mais vendidos da Amazon Brasil. As respostas vêm do último snapshot salvo no DynamoDB, sem consultar o site de origem a cada requisição.',
        'O código é organizado em handlers, controllers, services e repositories. O scraper com Puppeteer roda fora da AWS, para não executar o Chromium dentro da Lambda, e envia os dados para um endpoint interno protegido por chave.',
    ],
    gruposRotas: [
        {
            titulo: 'Rotas públicas',
            rotas: [
                {
                    metodo: 'GET',
                    caminho: '/bestsellers',
                    descricao: 'Snapshot completo',
                },
                {
                    metodo: 'GET',
                    caminho: '/bestsellers/{category}',
                    descricao: 'Top 3 de uma categoria',
                },
                {
                    metodo: 'GET',
                    caminho: '/bestsellers/first-top',
                    descricao: 'Primeira categoria do ranking',
                },
                {
                    metodo: 'GET',
                    caminho: '/bestsellers/overview',
                    descricao: 'Resumo de preços, notas e avaliações',
                },
                {
                    metodo: 'GET',
                    caminho: '/health',
                    descricao: 'Verificação de status',
                },
            ],
        },
    ],
    tecnologias: [
        'Node.js',
        'TypeScript',
        'AWS Lambda',
        'API Gateway',
        'DynamoDB',
        'Serverless Framework',
        'Puppeteer',
    ],
    links: [
        {
            rotulo: 'Ver código no GitHub',
            url: 'https://github.com/erickmjr/amazon-bestsellers-api',
        },
    ],
};

export const studyFlow: ProjetoBackEnd = {
    titulo: 'StudyFlow',
    meta: 'dez 2025 – mar 2026',
    descricao: [
        'API REST do StudyFlow, uma aplicação para organizar tópicos de estudo com prazo e status de conclusão. Cada pessoa cria, edita, conclui e remove apenas os próprios tópicos.',
        'A sessão usa JWT em cookie HttpOnly e as senhas são guardadas com hash bcrypt. A recuperação de senha envia por e-mail um link com token de curta duração, e a resposta é a mesma exista ou não a conta, para não revelar quais e-mails estão cadastrados. O código segue camadas de controllers, services e repositories, com Prisma sobre PostgreSQL.',
    ],
    gruposRotas: [
        {
            titulo: 'Conta',
            rotas: [
                {
                    metodo: 'POST',
                    caminho: '/user/auth/register',
                    descricao: 'Cadastro, já com sessão aberta',
                },
                {
                    metodo: 'POST',
                    caminho: '/user/auth/login',
                    descricao: 'Login com cookie de sessão',
                },
                {
                    metodo: 'POST',
                    caminho: '/user/forgot-password',
                    descricao: 'Envio do link de redefinição',
                },
                {
                    metodo: 'POST',
                    caminho: '/user/reset-password',
                    descricao: 'Troca da senha com o token',
                },
            ],
        },
        {
            titulo: 'Tópicos, com sessão',
            rotas: [
                {
                    metodo: 'GET',
                    caminho: '/topics',
                    descricao: 'Tópicos do usuário e total',
                },
                {
                    metodo: 'POST',
                    caminho: '/topics',
                    descricao: 'Criação com título, descrição e prazo',
                },
                {
                    metodo: 'PATCH',
                    caminho: '/topics/:id',
                    descricao: 'Edição parcial, como marcar concluído',
                },
                {
                    metodo: 'DELETE',
                    caminho: '/topics/:id',
                    descricao: 'Remoção',
                },
            ],
        },
    ],
    tecnologias: [
        'Node.js',
        'TypeScript',
        'Express',
        'Prisma',
        'PostgreSQL',
        'JWT',
        'bcrypt',
        'Nodemailer',
    ],
    links: [
        {
            rotulo: 'Código do back-end',
            url: 'https://github.com/erickmjr/StudyFlow_backend',
        },
        {
            rotulo: 'Código do front-end',
            url: 'https://github.com/erickmjr/StudyFlow_frontend',
        },
    ],
};

export type ProjetoFrontEnd = {
    titulo: string;
    data: string;
    descricao: string;
    tecnologias: string[];
    imagens: [string, string];
    linkSite: string;
    linkRepo: string;
};

export const projetosFrontEnd: ProjetoFrontEnd[] = [
    {
        titulo: 'Lista de contatos',
        data: 'jul 2025',
        descricao:
            'Gerenciador para adicionar, editar e encontrar contatos, com rotas no React Router e estado global no Redux.',
        tecnologias: [
            'React',
            'TypeScript',
            'Redux',
            'React Router',
            'Styled-Components',
        ],
        imagens: [listaCapa, listaDetalhe],
        linkSite: 'https://lista-de-contatos-zeta-coral.vercel.app',
        linkRepo: 'https://github.com/erickmjr/lista_de_contatos',
    },
    {
        titulo: 'Buscador de GitHub',
        data: 'nov 2024',
        descricao:
            'Consulta perfis do GitHub e mostra dados do usuário e dos repositórios públicos, consumindo a API oficial em tempo real.',
        tecnologias: ['HTML5', 'CSS3', 'jQuery', 'API do GitHub'],
        imagens: [buscadorCapa, buscadorDetalhe],
        linkSite: 'https://buscador-github-three.vercel.app',
        linkRepo: 'https://github.com/erickmjr/buscador_github',
    },
    {
        titulo: 'Lumos',
        data: 'set 2024',
        descricao:
            'Landing page responsiva de um serviço de streaming fictício, com interações em jQuery e estilos modulares em SCSS.',
        tecnologias: ['HTML5', 'SCSS', 'jQuery', 'Bootstrap Icons', 'Gulp'],
        imagens: [lumosCapa, lumosDetalhe],
        linkSite: 'https://you-landing-page.vercel.app',
        linkRepo: 'https://github.com/erickmjr/Lumos-LandingPage',
    },
    {
        titulo: 'FutNews',
        data: 'set 2024',
        descricao:
            'Landing page de notícias de futebol, responsiva e com estilos organizados em SCSS na metodologia BEM.',
        tecnologias: ['HTML5', 'SCSS', 'BEM', 'jQuery', 'Bootstrap'],
        imagens: [futnewsCapa, futnewsDetalhe],
        linkSite: 'https://landing-page-fut-naticos.vercel.app',
        linkRepo: 'https://github.com/erickmjr/LandingPage-FutNaticos',
    },
];
