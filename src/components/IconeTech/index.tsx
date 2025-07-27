import { NomeHover, TechStyled } from './styles';
import { useState } from 'react';

type IconeTechProps = {
    iconUrl: string;
    iconAlt: string;
    urlDocumentacao: string;
};

const IconeTech = ({ iconUrl, iconAlt, urlDocumentacao }: IconeTechProps) => {
    const [ativado, setAtivado] = useState(false);

    return (
        <TechStyled
            href={urlDocumentacao}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setAtivado(true)}
            onMouseLeave={() => setAtivado(false)}
        >
            <NomeHover className={ativado ? 'nomeAtivado' : ''}>
                {iconAlt}
            </NomeHover>
            <img src={iconUrl} alt={iconAlt} />
        </TechStyled>
    );
};

export default IconeTech;
