/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from '$fresh/server.ts';
import manifest from '@/fresh.gen.ts';

import twindPlugin, { Options } from '$fresh/plugins/twindv1.ts';
import config, { configPath } from '@/twind.config.ts';

await start(manifest, {
    plugins: [twindPlugin({
        ...config,
        selfURL: configPath,
    } as Options)],
    render(ctx, render) {
        ctx.lang = 'ja';
        render();
    },
    port: 3000,
});
