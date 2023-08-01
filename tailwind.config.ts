import type { Config } from 'tailwind-config';
import type { TwindUserConfig } from 'twind-config';

type CommonConfig = {
  [K in keyof TwindUserConfig & keyof Config]?: TwindUserConfig[K] & Config[K];
};

export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
      },
    },
    fontFamily: {
      sans: ['"Zen Kaku Gothic New"', 'sans-serif'],
      serif: ['"Zen Antique"', 'serif'],
      mono: ['"Source Code Pro"', 'monospace'],
    },
  },
} satisfies CommonConfig;
