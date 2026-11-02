import { useEffect, useRef, useState } from 'react';

type Opcoes = {
    umaVez?: boolean;
    margem?: string;
    limiar?: number;
};

// Indica quando o elemento entra na área visível da tela.
// Com umaVez = true, o estado fica verdadeiro depois da primeira aparição.
export function useEmVista<T extends Element>({
    umaVez = true,
    margem = '0px 0px -12% 0px',
    limiar = 0.15,
}: Opcoes = {}) {
    const ref = useRef<T>(null);
    const [emVista, setEmVista] = useState(false);

    useEffect(() => {
        const elemento = ref.current;
        if (!elemento) return;

        if (!('IntersectionObserver' in window)) {
            setEmVista(true);
            return;
        }

        const observador = new IntersectionObserver(
            ([entrada]) => {
                if (entrada.isIntersecting) {
                    setEmVista(true);
                    if (umaVez) observador.disconnect();
                } else if (!umaVez) {
                    setEmVista(false);
                }
            },
            { rootMargin: margem, threshold: limiar },
        );

        observador.observe(elemento);
        return () => observador.disconnect();
    }, [umaVez, margem, limiar]);

    return [ref, emVista] as const;
}
