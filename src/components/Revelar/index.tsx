import type { ReactNode } from 'react';
import styled from 'styled-components';
import { useEmVista } from '../../hooks/useEmVista';
import variaveis from '../../styles/variaveis';

const Bloco = styled.div<{ $atraso: number }>`
    opacity: 0;
    transform: translateY(1.25rem);
    transition:
        opacity 0.8s ease,
        transform 0.9s ${variaveis.curva};
    transition-delay: ${({ $atraso }) => $atraso}ms;

    &[data-visivel='true'] {
        opacity: 1;
        transform: none;
    }
`;

type RevelarProps = {
    children: ReactNode;
    atraso?: number;
    className?: string;
};

const Revelar = ({ children, atraso = 0, className }: RevelarProps) => {
    const [ref, emVista] = useEmVista<HTMLDivElement>();

    return (
        <Bloco
            ref={ref}
            data-visivel={emVista}
            $atraso={atraso}
            className={className}
        >
            {children}
        </Bloco>
    );
};

export default Revelar;
