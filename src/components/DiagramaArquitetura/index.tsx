import { useState, type CSSProperties, type ReactNode } from 'react';
import { useEmVista } from '../../hooks/useEmVista';
import { ArestaStyled, DiagramaStyled, Figura, NoStyled } from './styles';

type NoProps = {
    area: string;
    ordem: number;
    titulo: string;
    detalhe: ReactNode;
    destaque?: boolean;
};

const No = ({ area, ordem, titulo, detalhe, destaque = false }: NoProps) => (
    <NoStyled
        className="no"
        data-destaque={destaque}
        style={{ gridArea: area, '--ordem': ordem } as CSSProperties}
    >
        <strong>{titulo}</strong>
        <span>{detalhe}</span>
    </NoStyled>
);

type ArestaProps = {
    area: string;
    ordem: number;
    sentido: 'ida' | 'volta';
    // Momento (em segundos) em que o pulso cruza esta aresta dentro do ciclo.
    inicio: number;
    rotulo: ReactNode;
    nota?: string;
};

const Aresta = ({
    area,
    ordem,
    sentido,
    inicio,
    rotulo,
    nota,
}: ArestaProps) => (
    <ArestaStyled
        data-sentido={sentido}
        style={
            {
                gridArea: area,
                '--ordem': ordem,
                '--inicio': `${inicio}s`,
            } as CSSProperties
        }
    >
        <span className="trilho">
            <span className="viajante">
                <span className="pulso" />
            </span>
        </span>
        <span className="textos">
            <span className="rotulo">{rotulo}</span>
            {nota && <small className="nota">{nota}</small>}
        </span>
    </ArestaStyled>
);

const DiagramaArquitetura = () => {
    const [ref, emVista] = useEmVista<HTMLDivElement>({
        umaVez: false,
        margem: '0px',
        limiar: 0.3,
    });
    const [revelado, setRevelado] = useState(false);

    if (emVista && !revelado) setRevelado(true);

    return (
        <Figura>
            <DiagramaStyled
                ref={ref}
                data-revelado={revelado}
                data-ativo={emVista}
                aria-hidden="true"
            >
                <div className="fronteira">
                    <span>AWS, sa-east-1</span>
                </div>
                <div className="gateway">
                    <span>API Gateway</span>
                </div>

                <No
                    area="scraper"
                    ordem={0}
                    titulo="Scraper"
                    detalhe="Puppeteer, na máquina local"
                />
                <Aresta
                    area="envio"
                    ordem={1}
                    sentido="ida"
                    inicio={0}
                    rotulo={
                        <code>
                            POST /internal/
                            <wbr />
                            bestsellers/
                            <wbr />
                            refresh
                        </code>
                    }
                    nota="protegido por x-api-key"
                />
                <No
                    area="refresh"
                    ordem={2}
                    titulo="Lambda de ingestão"
                    detalhe={<code>refreshBestsellers</code>}
                />
                <Aresta
                    area="put"
                    ordem={3}
                    sentido="ida"
                    inicio={0.9}
                    rotulo={<code>PutItem</code>}
                />
                <No
                    area="dynamo"
                    ordem={4}
                    titulo="DynamoDB"
                    detalhe={
                        <>
                            item <code>latest</code>, o snapshot mais recente
                        </>
                    }
                    destaque
                />

                <No
                    area="cliente"
                    ordem={1}
                    titulo="Cliente HTTP"
                    detalhe="rotas públicas"
                />
                <Aresta
                    area="consulta"
                    ordem={2}
                    sentido="volta"
                    inicio={3.1}
                    rotulo={
                        <code>
                            GET /bestsellers/
                            <wbr />…
                        </code>
                    }
                />
                <No
                    area="leitura"
                    ordem={3}
                    titulo="Lambdas de leitura"
                    detalhe="4 rotas GET"
                />
                <Aresta
                    area="get"
                    ordem={4}
                    sentido="volta"
                    inicio={2.2}
                    rotulo={<code>GetItem</code>}
                />
            </DiagramaStyled>

            <figcaption>
                O scraper envia cada snapshot para um endpoint interno do API
                Gateway, protegido por chave, e a Lambda de ingestão grava o
                item <code>latest</code> no DynamoDB. As rotas públicas só leem
                esse item e devolvem os dados ao cliente.
            </figcaption>
        </Figura>
    );
};

export default DiagramaArquitetura;
