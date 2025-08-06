import { useEffect, useState } from 'react';
import type { PerfilGithub } from '../../types/PerfilGithub';
import { ContainerContent, StatsStyled } from './styles';

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
                    avatarUrl: data.avatar_url,
                };
                setPerfil(dadosFiltrados);
            })
            .catch((error) => {
                console.error('Erro ao buscar dados do GitHub:', error);
            });
    }, []);

    return (
        <StatsStyled>
            {perfil ? (
                <>
                    <ContainerContent>
                        <div>
                            <a
                                href="https://github.com/erickmjr"
                                target="_blank"
                            >
                                @{perfil.userName}
                            </a>
                            <img src={perfil.avatarUrl} alt="avatar" />
                            <p>{perfil.bio}</p>
                            <p>{perfil.publicRepos} Repositórios</p>
                        </div>
                    </ContainerContent>
                </>
            ) : (
                <p>Carregando perfil...</p>
            )}
        </StatsStyled>
    );
};

export default GithubStats;
