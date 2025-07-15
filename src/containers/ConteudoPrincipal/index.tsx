import { ContainerImagem, ConteudoPrincipalStyled } from './styles';
import imgPerfil from '../../images/imgPerfil.png';

const ConteudoPrincipal = () => {
    return (
        <ConteudoPrincipalStyled>
            <ContainerImagem>
                <img src={imgPerfil} alt="Perfil" />
            </ContainerImagem>
            <div>HELLO IM ERICKMELLOJRRRRRR</div>
        </ConteudoPrincipalStyled>
    );
};

export default ConteudoPrincipal;
