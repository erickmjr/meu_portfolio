import { useEffect, useState } from 'react';
import type { PerfilGithub } from '../../types/PerfilGithub';

const GithubStats: React.FC = () => {
    const [perfil, setPerfil] = useState<PerfilGithub | null>(null);

    useEffect(() => {
        fetch('https://api.github.com/users/erickmjr')
            .then((resp) => resp.json())
            .then((data) => {
                const dadosFiltrados: PerfilGithub = {
                    userName: data.login,
                    bio: data.bio,
                    publicRepos: data.public_repos,
                };
                setPerfil(dadosFiltrados);
            })
            .catch((error) => {
                console.error('Erro ao buscar dados do GitHub:', error);
            });
    }, []);

    return (
        <div>
            {perfil ? (
                <>
                    <h2>{perfil.userName}</h2>
                    <p>
                        <strong>Bio:</strong>
                        {perfil.bio}
                    </p>
                    <p>
                        <strong>Total de Repos:</strong>
                        {perfil.publicRepos}
                    </p>
                </>
            ) : (
                <p>Carregando perfil...</p>
            )}
        </div>
    );
};

export default GithubStats;
