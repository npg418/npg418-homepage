import { defineConfig } from "@twind/core";
import tailwindPreset from '@twind/preset-tailwind';
import autoprefixPreset from '@twind/preset-autoprefix';

export default defineConfig({
    presets: [tailwindPreset(), autoprefixPreset()],
    darkMode: 'class',
    rules: [
        ['title', 'text-7xl font-extrabold'],
        ['section-h', 'text-6xl font-bold border-b p-3']
    ],
    variants: [
        ['not-', ({ $$ }) => `&:not(:${$$})`]
    ],
    preflight: {
        '.dark': {
            colorScheme: 'dark'
        }
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
});

export const configURL = import.meta.url;
