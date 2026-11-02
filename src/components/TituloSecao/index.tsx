import type { ReactNode } from 'react';
import { useEmVista } from '../../hooks/useEmVista';
import { CabecalhoSecao } from './styles';

type TituloSecaoProps = {
    children: ReactNode;
    introducao?: ReactNode;
};

const TituloSecao = ({ children, introducao }: TituloSecaoProps) => {
    const [ref, emVista] = useEmVista<HTMLDivElement>();

    return (
        <CabecalhoSecao ref={ref} data-visivel={emVista}>
            <h2>
                <span className="mascara">
                    <span className="texto">{children}</span>
                </span>
            </h2>
            {introducao && <p>{introducao}</p>}
        </CabecalhoSecao>
    );
};

export default TituloSecao;
