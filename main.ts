/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from '$fresh/server.ts';
import manifest from '@/fresh.gen.ts';

import freshwind from 'freshwind/plugin.ts';
import config, { configURL } from '@/twind.config.ts';

await start(manifest, {
    plugins: [freshwind(config, configURL)],
    port: 3000,
    render: (ctx, render) => {
        ctx.lang = 'ja';
        render();
    },
});
