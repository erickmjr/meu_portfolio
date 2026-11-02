export const secoesNavegacao = [
    { id: 'sobre', rotulo: 'Sobre' },
    { id: 'experiencia', rotulo: 'Experiência' },
    { id: 'projetos', rotulo: 'Projetos' },
    { id: 'contato', rotulo: 'Contato' },
] as const;

export const idsSecoes = ['inicio', ...secoesNavegacao.map(({ id }) => id)];
