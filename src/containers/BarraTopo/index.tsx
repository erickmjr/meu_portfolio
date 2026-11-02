import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import BtnBaixarCV from '../../components/BtnBaixarCV';
import MenuHamburguer from '../../components/MenuHamburguer';
import { idsSecoes, secoesNavegacao } from '../../dados/navegacao';
import { useSecaoAtiva } from '../../hooks/useSecaoAtiva';
import { Container } from '../../styles/layout';
import {
    AcoesTopo,
    BarraTopoStyled,
    Indicador,
    Marca,
    Navegacao,
} from './styles';

const BarraTopo = () => {
    const ativa = useSecaoAtiva(idsSecoes);
    const [rolou, setRolou] = useState(false);
    const [indicador, setIndicador] = useState({ x: 0, visivel: false });
    const listaRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const aoRolar = () => setRolou(window.scrollY > 8);

        aoRolar();
        window.addEventListener('scroll', aoRolar, { passive: true });
        return () => window.removeEventListener('scroll', aoRolar);
    }, []);

    // Posiciona o ponto sob o link da seção ativa.
    useLayoutEffect(() => {
        const posicionar = () => {
            const link = listaRef.current?.querySelector<HTMLAnchorElement>(
                `a[href="#${ativa}"]`,
            );

            if (!link) {
                setIndicador((atual) => ({ ...atual, visivel: false }));
                return;
            }

            setIndicador({
                x: link.offsetLeft + link.offsetWidth / 2,
                visivel: true,
            });
        };

        posicionar();
        document.fonts?.ready.then(posicionar);
        window.addEventListener('resize', posicionar);
        return () => window.removeEventListener('resize', posicionar);
    }, [ativa]);

    return (
        <BarraTopoStyled data-rolou={rolou}>
            <Container className="conteudo">
                <Marca href="#inicio">Érick Mello</Marca>

                <Navegacao aria-label="Seções">
                    <ul ref={listaRef}>
                        {secoesNavegacao.map(({ id, rotulo }) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    aria-current={
                                        ativa === id ? 'location' : undefined
                                    }
                                >
                                    {rotulo}
                                </a>
                            </li>
                        ))}
                        <Indicador
                            aria-hidden="true"
                            style={{
                                transform: `translateX(${indicador.x}px)`,
                                opacity: indicador.visivel ? 1 : 0,
                            }}
                        />
                    </ul>
                </Navegacao>

                <AcoesTopo>
                    <BtnBaixarCV className="cv-topo" />
                    <MenuHamburguer ativa={ativa} />
                </AcoesTopo>
            </Container>
        </BarraTopoStyled>
    );
};

export default BarraTopo;
