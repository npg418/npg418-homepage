import { defineConfig } from "astro/config";

import icon from "astro-icon";

export default defineConfig({
  site: "https://www.npg418.com",
  integrations: [icon()],
});
