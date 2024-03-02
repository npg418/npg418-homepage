import { Config } from 'tailwindcss';
import nightwind from 'nightwind';
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';
import lobotomizedOwl from 'tailwindcss-lobotomized-owl';

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
    lobotomizedOwl,
  ],
} satisfies Config;
