import { autoDarkColor as darkColor, defineConfig } from '@twind/core';
import tailwindPreset from '@twind/preset-tailwind';
import extPreset from '@twind/preset-ext';

export default defineConfig({
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
                    600: '#848484',
                    700: '#5e5e5e',
                    800: '#383838',
                    900: '#121212',
                },
            },
        },
    },
    darkColor,
});

export const configPath = import.meta.url;
