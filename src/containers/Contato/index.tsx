import GithubStats from '../../components/GithubStats';
import { ContatoStyled } from './styles';

const Contato = () => {
    return (
        <ContatoStyled id="contato">
            <h2>Contato</h2>
            <div>
                <ul>
                    <li>Github</li>
                    <li>E-mail</li>
                    <li>LinkedIn</li>
                </ul>
                <GithubStats />
            </div>
        </ContatoStyled>
    );
};

export default Contato;
