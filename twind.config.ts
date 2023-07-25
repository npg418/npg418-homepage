import type { Options } from '$fresh/plugins/twindv1.ts';
import { defineConfig, type Preset } from '@twind/core';
import tailwindConfig from '@/tailwind.config.ts';
import presetTailwind from '@twind/preset-tailwind';
import presetExt from '@twind/preset-ext';

export default {
  ...defineConfig({
    presets: [
      presetTailwind(tailwindConfig),
      presetExt(),
    ] as Preset[],
  }),
  selfURL: import.meta.url,
} as Options;
