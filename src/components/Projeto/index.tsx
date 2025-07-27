import { useEffect, useCallback } from 'react';
import { ProjetoStyled, TechsProjetoContainer } from './styles.ts';
import useEmblaCarousel from 'embla-carousel-react';
import { Embla, EmblaContainer, EmblaSlide } from './styles';
import IconeTech from '../IconeTech/index.tsx';

type ProjetoComponentProps = {
    titulo: string;
    imagens: string[];
    descricao: string;
    linkHospedagem: string;
    linkRepo: string;
};

type TecnologiasProps = {
    tecnologias: {
        iconUrl: string;
        iconAlt: string;
        urlDocumentacao: string;
    }[];
};

type ProjetoProps = TecnologiasProps & ProjetoComponentProps;

const Projeto = ({
    titulo,
    imagens,
    descricao,
    linkHospedagem,
    linkRepo,
    tecnologias,
}: ProjetoProps) => {
    const [emblaRef, embla] = useEmblaCarousel({ loop: true });

    const autoplay = useCallback(() => {
        if (!embla) return;
        const interval = setInterval(() => {
            embla.scrollNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [embla]);

    useEffect(() => {
        const parar = autoplay();
        return parar;
    }, [autoplay]);

    return (
        <ProjetoStyled>
            <h3>{titulo}</h3>

            <a href={linkHospedagem} target="_blank">
                <Embla ref={emblaRef}>
                    <EmblaContainer>
                        {imagens.map((imgUrl, index) => (
                            <EmblaSlide key={index}>
                                <img
                                    src={imgUrl}
                                    alt={`Imagem do projeto ${titulo} - ${index + 1}`}
                                />
                            </EmblaSlide>
                        ))}
                    </EmblaContainer>
                </Embla>
            </a>
            <p>{descricao}</p>
            <TechsProjetoContainer>
                <h4>Tecnologias utilizadas</h4>
                <div className="containerIcons">
                    {tecnologias.map((tech) => (
                        <IconeTech
                            key={tech.iconUrl}
                            iconUrl={tech.iconUrl}
                            iconAlt={tech.iconAlt}
                            urlDocumentacao={tech.urlDocumentacao}
                        />
                    ))}
                </div>
            </TechsProjetoContainer>
            <a href={linkRepo} target="_blank">
                Acesse o repositório
            </a>
        </ProjetoStyled>
    );
};

export default Projeto;
