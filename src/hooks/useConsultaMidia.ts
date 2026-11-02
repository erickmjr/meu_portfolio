import { useEffect, useState } from 'react';

// Acompanha uma media query, como '(prefers-reduced-motion: reduce)'.
export function useConsultaMidia(consulta: string) {
    const [corresponde, setCorresponde] = useState(
        () => window.matchMedia(consulta).matches,
    );

    useEffect(() => {
        const lista = window.matchMedia(consulta);
        const aoMudar = () => setCorresponde(lista.matches);

        aoMudar();
        lista.addEventListener('change', aoMudar);
        return () => lista.removeEventListener('change', aoMudar);
    }, [consulta]);

    return corresponde;
}
