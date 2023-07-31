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
  },
} satisfies CommonConfig;
