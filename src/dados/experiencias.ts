export type Experiencia = {
    cargo: string;
    empresa: string;
    periodo: string;
    local: string;
    atual: boolean;
    resumo: string;
    atividades: string[];
    tecnologias: string[];
};

export const experiencias: Experiencia[] = [
    {
        cargo: 'Estagiário de Desenvolvimento Back-End',
        empresa: 'BGC Brasil',
        periodo: 'mar 2026 – atual',
        local: 'Remoto',
        atual: true,
        resumo: 'No time de Integrações, desenvolvo e mantenho serviços serverless na AWS com Node.js e TypeScript: funções Lambda, integrações por SQS, SNS e EventBridge e persistência em DynamoDB, com modelagem single-table, e RDS. Sigo Clean Architecture e DDD para manter os serviços desacoplados e testáveis.',
        atividades: [
            'Implemento fluxos de integração entre sistemas e configuro a infraestrutura com Serverless Framework.',
            'Valido dados com Zod e acesso o banco com Prisma.',
            'Investigo e corrijo falhas em filas e eventos assíncronos e apoio o suporte a incidentes em produção.',
            'Reviso pull requests e participo das cerimônias de Scrum.',
        ],
        tecnologias: [
            'Node.js',
            'TypeScript',
            'AWS Lambda',
            'SQS',
            'SNS',
            'EventBridge',
            'DynamoDB',
            'RDS',
            'Serverless Framework',
            'Prisma',
            'Zod',
        ],
    },
    {
        cargo: 'Estagiário de Desenvolvimento e Suporte',
        empresa: 'Contas Contabilidade',
        periodo: 'set 2025 – fev 2026',
        local: 'Feira de Santana, BA',
        atual: false,
        resumo: 'No time de Tecnologia e Inovação, desenvolvi e mantive aplicações web internas de ponta a ponta.',
        atividades: [
            'Construí e mantive APIs REST com Node.js e Express.',
            'Desenvolvi interfaces com React e Next.js.',
            'Automatizei rotinas, validações e coleta de dados em sistemas externos com Playwright.',
        ],
        tecnologias: ['Node.js', 'Express', 'React', 'Next.js', 'Playwright'],
    },
];

export const formacao = [
    {
        curso: 'Bacharelado em Sistemas de Informação',
        instituicao: 'IFBA',
        periodo: 'jul 2023 – set 2027 (previsão)',
    },
    {
        curso: 'Engenheiro Front-End',
        instituicao: 'EBAC, curso profissionalizante',
        periodo: 'jul 2024 – mai 2025',
    },
];
