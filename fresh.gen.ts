// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from './deno.json' assert { type: 'json' };
import * as $0 from './routes/_404.tsx';
import * as $1 from './routes/_app.tsx';
import * as $2 from './routes/_middleware.ts';
import * as $3 from './routes/articles/[slug].tsx';
import * as $4 from './routes/index.tsx';
import * as $$0 from './islands/BackButton.tsx';
import * as $$1 from './islands/Header.tsx';
import * as $$2 from './islands/MarkdownStyles.tsx';
import * as $$3 from './islands/ThemeToggleButton.tsx';

const manifest = {
    routes: {
        './routes/_404.tsx': $0,
        './routes/_app.tsx': $1,
        './routes/_middleware.ts': $2,
        './routes/articles/[slug].tsx': $3,
        './routes/index.tsx': $4,
    },
    islands: {
        './islands/BackButton.tsx': $$0,
        './islands/Header.tsx': $$1,
        './islands/MarkdownStyles.tsx': $$2,
        './islands/ThemeToggleButton.tsx': $$3,
    },
    baseUrl: import.meta.url,
    config,
};

export default manifest;
