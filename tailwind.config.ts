import type { TwindUserConfig } from 'twind-config';
import type { Config } from 'tailwind-config';

type CommonConfig = {
  [K in keyof TwindUserConfig & keyof Config]?: TwindUserConfig[K] & Config[K];
};

export default {
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
    },
  },
} satisfies CommonConfig;
