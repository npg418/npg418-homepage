import { autoDarkColor as darkColor, defineConfig } from '@twind/core';
import tailwindPreset from '@twind/preset-tailwind';
import extPreset from '@twind/preset-ext';
import { Options } from '$fresh/plugins/twindv1.ts';

export default {
    ...defineConfig({
        presets: [tailwindPreset(), extPreset()],
        preflight: {
            '.dark': {
                colorScheme: 'dark',
            },
        },
        theme: {
            extend: {
                colors: {
                    gray: {
                        800: '#383838',
                        900: '#121212',
                    },
                },
            },
        },
        darkColor,
    }),
    selfURL: import.meta.url,
} as Options;
