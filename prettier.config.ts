import type { Config } from "prettier";

export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-organize-imports", "prettier-plugin-astro-organize-imports"],
  printWidth: 120,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
} satisfies Config;
