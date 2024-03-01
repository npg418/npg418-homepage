import { Config } from 'tailwindcss';
import nightwind from 'nightwind';

export default {
  content: [
    '{routes,islands,components}/**/*.{ts,tsx}',
  ],
  darkMode: 'selector',
  plugins: [nightwind],
} satisfies Config;
