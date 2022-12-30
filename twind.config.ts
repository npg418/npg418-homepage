import { Configuration } from 'twind';

export default {
    darkMode: 'class',
    plugins: {
        content: (parts) => ({ content: `"${parts[0] || ''}"` }),
        'section-h':
            `text-4xl font-bold p-3 flex before::(content h-10 w-1 mr-2 rounded bg-gray-500) not-hover:before::invisible`,
    },
    theme: {
        extend: {
            keyframes: {
                'fade-up': {
                    from: {
                        transform: 'translateY(3rem)',
                        opacity: 0,
                    },
                    to: {
                        transform: 'translateY(0)',
                        opacity: 1,
                    },
                },
            },
            animation: {
                'fade-up': 'fade-up 600ms ease-out 0ms forwards',
            },
        },
    },
} as Omit<Configuration, 'mode' | 'sheet'>;

export const configURL = import.meta.url;
