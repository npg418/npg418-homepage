import { Config } from 'tailwindcss';
import nightwind from 'nightwind';
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';

export default {
  content: [
    '{routes,islands,components}/**/*.{ts,tsx}',
  ],
  darkMode: 'selector',
  plugins: [
    nightwind,
    iconsPlugin({
      collections: getIconCollections(['tabler', 'devicon']),
    }),
  ],
} satisfies Config;
