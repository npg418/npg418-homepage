import { defineConfig } from '@twind/core';
import tailwindPreset from '@twind/preset-tailwind';
import { Options } from '$fresh/plugins/twindv1.ts';

export default {
    ...defineConfig({
        presets: [tailwindPreset()],
    }),
    selfURL: import.meta.url,
} as Options;
