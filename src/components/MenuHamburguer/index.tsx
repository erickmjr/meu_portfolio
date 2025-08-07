import { Link } from 'react-scroll';
import {
    HamburguerNavigation,
    MenuHamburguerStyled,
    ToggleMenu,
} from './styles';
import { useState } from 'react';

const MenuHamburguer = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <MenuHamburguerStyled>
                <ToggleMenu
                    type="button"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </ToggleMenu>
                <HamburguerNavigation
                    className={showMenu ? 'nomeAtivado visivel' : ''}
                >
                    <Link to="inicio" smooth={true} duration={500}>
                        <button type="button">Ínicio</button>
                    </Link>

                    <Link to="sobre" smooth={true} duration={500}>
                        <button type="button">Sobre</button>
                    </Link>

                    <Link to="projetos" smooth={true} duration={500}>
                        <button type="button">Projetos</button>
                    </Link>

                    <Link to="contato" smooth={true} duration={500}>
                        <button type="button">Contato</button>
                    </Link>
                </HamburguerNavigation>
            </MenuHamburguerStyled>
        </>
    );
};

export default MenuHamburguer;
