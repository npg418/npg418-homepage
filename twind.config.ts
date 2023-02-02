import { autoDarkColor, defineConfig } from '@twind/core';
import tailwind from '@twind/preset-tailwind';
import autoprefix from '@twind/preset-autoprefix';
import ext from '@twind/preset-ext';
import typography from '@twind/preset-typography';

export default defineConfig({
    presets: [tailwind(), autoprefix(), ext(), typography()],
    darkMode: 'class',
    preflight: {
        '.dark': {
            colorScheme: 'dark',
        },
    },
    darkColor: autoDarkColor,
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
