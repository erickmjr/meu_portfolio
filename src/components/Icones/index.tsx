type IconeProps = {
    tamanho?: number;
};

const traco = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
};

export const IconeGithub = ({ tamanho = 20 }: IconeProps) => (
    <svg
        width={tamanho}
        height={tamanho}
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
);

export const IconeLinkedin = ({ tamanho = 20 }: IconeProps) => (
    <svg
        width={tamanho}
        height={tamanho}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

export const IconeEmail = ({ tamanho = 20 }: IconeProps) => (
    <svg
        width={tamanho}
        height={tamanho}
        viewBox="0 0 24 24"
        aria-hidden="true"
        {...traco}
    >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
    </svg>
);

export const IconeDownload = ({ tamanho = 18 }: IconeProps) => (
    <svg
        width={tamanho}
        height={tamanho}
        viewBox="0 0 24 24"
        aria-hidden="true"
        {...traco}
    >
        <path d="M12 4v11" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 20h14" />
    </svg>
);

export const IconeSetaExterna = ({ tamanho = 14 }: IconeProps) => (
    <svg
        width={tamanho}
        height={tamanho}
        viewBox="0 0 24 24"
        aria-hidden="true"
        {...traco}
        strokeWidth={2}
    >
        <path d="M8 16 16 8" />
        <path d="M9 8h7v7" />
    </svg>
);

export const IconeCopiar = ({ tamanho = 16 }: IconeProps) => (
    <svg
        width={tamanho}
        height={tamanho}
        viewBox="0 0 24 24"
        aria-hidden="true"
        {...traco}
    >
        <rect x="9" y="9" width="11" height="11" rx="2" />
        <path d="M5 15V6a2 2 0 0 1 2-2h8" />
    </svg>
);

export const IconeConfirmado = ({ tamanho = 16 }: IconeProps) => (
    <svg
        width={tamanho}
        height={tamanho}
        viewBox="0 0 24 24"
        aria-hidden="true"
        {...traco}
        strokeWidth={2.25}
    >
        <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
);
