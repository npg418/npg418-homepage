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
        ${await (await fetch(
        `https://esm.sh/prismjs@1.29.0/themes/prism.css`,
    )).text()}
        ${(await (await fetch(
        `https://esm.sh/prismjs@1.29.0/themes/prism-tomorrow.css`,
    )).text()).replaceAll(/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, '').replaceAll(
        /[^\{\}]*\{/g,
        (match) =>
            match.split(',').map((v) =>
                v.startsWith('@') ? v : '.dark ' + v
            ).join(','),
    )
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
