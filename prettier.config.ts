import type { Config } from "prettier";

export default {
  plugins: ["prettier-plugin-astro"],
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
