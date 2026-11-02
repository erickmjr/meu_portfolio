import { useEffect, useState } from 'react';

// Retorna o id da seção que cruza a faixa central da tela.
// A lista de ids precisa ser estável (declarada fora do componente).
export function useSecaoAtiva(ids: readonly string[]) {
    const [ativa, setAtiva] = useState(ids[0]);

    useEffect(() => {
        const secoes = ids
            .map((id) => document.getElementById(id))
            .filter((secao): secao is HTMLElement => secao !== null);

        const observador = new IntersectionObserver(
            (entradas) => {
                entradas.forEach((entrada) => {
                    if (entrada.isIntersecting) setAtiva(entrada.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px' },
        );

        secoes.forEach((secao) => observador.observe(secao));
        return () => observador.disconnect();
    }, [ids]);

    return ativa;
}
