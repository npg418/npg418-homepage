import { css, defineConfig } from '@twind/core';
import tailwindPreset from '@twind/preset-tailwind';
import autoprefixPreset from '@twind/preset-autoprefix';

export default defineConfig({
    presets: [tailwindPreset(), autoprefixPreset()],
    darkMode: 'class',
    variants: [
        ['not-', ({ $$ }) => `&:not(:${$$})`],
    ],
    rules: [
        ['(before|after)-content-', ({ $$, groups }) => ({
            [`&::${groups?.[1]}`]: {
                content: $$
            }
        })]
    ],
    preflight: css`
        .dark {
            colorScheme: dark;
        }
        ${await (await fetch(
        `https://raw.githubusercontent.com/PrismJS/prism/master/themes/prism.css`,
    )).text()}
        ${(await (await fetch(
        `https://esm.sh/prismjs@1.29.0/themes/prism-tomorrow.css`,
    )).text()).replaceAll(/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, '').replaceAll(/[^\{\}]*\{/g, (match) =>
        match.split(',').map((v) =>
            v.startsWith('@') ? v : '.dark ' + v
        ).join(','))
        }
        .dark code[class*="language-"],
        .dark pre[class*="language-"] {
            text-shadow: none;
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
