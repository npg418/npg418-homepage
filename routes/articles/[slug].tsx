import { Handlers } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import { Article } from '@/types/schema.ts';
import { getData } from '@/utils/database.ts';
import { InferPageProps } from '@/types/util.ts';
import { marked, Renderer } from 'marked';
import { tx } from '@twind/core';
import Prism from 'prismjs';
import loadLanguage from 'prismjs/components/index.js';
import { useColorModeValue } from '@/utils/colormode.ts';

loadLanguage();

export const handler: Handlers<Article> = {
    async GET(_, ctx) {
        const { slug } = ctx.params;
        try {
            const article = (await getData('article', {
                filter: { slug: { eq: slug } },
            }))[0];
            return ctx.render(article);
        } catch (error) {
            return ctx.renderNotFound();
        }
    },
};

class CustomRenderer extends Renderer {
    private fontSize = {
        1: '5xl',
        2: '4xl',
        3: '3xl',
        4: '2xl',
        5: 'xl',
        6: 'lg',
    };

    heading(text: string, level: keyof typeof this.fontSize) {
        const id = String(text).trim().toLocaleLowerCase().replace(
            /\s+/g,
            '-',
        );
        const fontSize = {
            1: '5xl',
            2: '4xl',
            3: '3xl',
            4: '2xl',
            5: 'xl',
            6: 'lg',
        };
        return `<h${level} id="${id}" class="${tx`text-${fontSize[level]} ${
            level <= 2 ? 'border-b' : ''
        } pb-2 my-3`}">${text}</h${level}>`;
    }
    link(href: string | null, title: string | null, text: string) {
        if (href === null) return text;
        return `<a href="href" ${title ? `title="${title}"` : ''}>${text}</a>`;
    }
    codespan(code: string) {
        return `<code class="${tx`bg(gray-200 dark:gray-600) inline-block rounded px-1`}">${code}</code>`;
    }
    code(code: string, info: string | undefined) {
        const [lang, filename] = info
            ? info.split(':') as [string, string | undefined]
            : ['', ''];

        if (this.options.highlight) {
            const out = this.options.highlight(code, lang);
            if (out != null && out !== code) {
                code = out;
            }
        }
        code = code.replace(/\n$/, '') + '\n';

        return `<pre class="language-${lang || 'none'} ${tx`rounded ${
            filename ? '' : ''
        }`}"><code>${code}</code></pre>\n`;
    }
}

marked.setOptions({
    renderer: new CustomRenderer(),
    highlight: (code, lang) => {
        return lang in Prism.languages
            ? Prism.highlight(code, Prism.languages[lang], lang)
            : code;
    },
});

export default function ArticlePage({ data }: InferPageProps<typeof handler>) {
    if (!data) {
        return <></>;
    }

    return (
        <>
            <Head>
                <title>{data.title} - NPG418</title>
            </Head>
            <article
                class='mt-10'
                dangerouslySetInnerHTML={{ __html: marked(data.body) }}
            />
        </>
    );
}
