import { autoDarkColor, defineConfig } from '@twind/core';
import presetTailwind from '@twind/preset-tailwind';
import presetExt from '@twind/preset-ext';
import type { Options } from '$fresh/plugins/twindv1.ts';
import tailwindConfig from '@/tailwind.config.ts';

export default {
  ...defineConfig({
    presets: [
      presetTailwind(),
      presetExt(),
    ],
    ...tailwindConfig,
    darkColor: autoDarkColor,
    preflight: {
      '.dark': {
        colorScheme: 'dark',
      },
      '@import':
        'url("https://fonts.googleapis.com/css2?family=Source+Code+Pro&family=Zen+Antique&family=Zen+Kaku+Gothic+New&display=swap");',
    },
  }),
  selfURL: import.meta.url,
} as unknown as Options;
