import { css, defineConfig } from '@twind/core';
import tailwind from '@twind/preset-tailwind';
import autoprefix from '@twind/preset-autoprefix';
import ext from '@twind/preset-ext';

export default defineConfig({
    presets: [tailwind(), autoprefix(), ext()],
    darkMode: 'class',
    preflight: css`
        .dark {
            colorScheme: dark;
        }
    `,
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
});

export const configURL = import.meta.url;
