import { Handlers } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import { Article } from '@/types/schema.ts';
import { getData } from '@/utils/database.ts';
import { InferPageProps } from '@/types/util.ts';
import { marked } from 'marked';

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

marked.use({
    renderer: {
        heading(text, level) {
            const id = String(text).trim().toLocaleLowerCase().replace(
                /\s+/g,
                '-',
            );
            return `<h${level} id="${id}">${text}</h${level}>`;
        },
        link(href, title, text) {
            if (href === null) return text;
            return `<a href="href" ${
                title ? `title="${title}"` : ''
            }>${text}</a>`;
        },
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
