import { Handlers } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import { Article } from '@/types/schema.ts';
import { getData } from '@/utils/database.ts';
import { InferPageProps } from '@/types/util.ts';
import md, { highlightCode } from '@/utils/markdown.tsx';
import MdClient from '@/islands/MdClient.tsx';

export const handler: Handlers<Article> = {
    async GET(_, ctx) {
        const { slug } = ctx.params;
        try {
            const article = (await getData('article', {
                filter: { slug: { eq: slug } },
            }))[0];

            article.body = await highlightCode(md.render(article.body));

            return ctx.render(article);
        } catch (error) {
            return ctx.renderNotFound();
        }
    },
};

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
                class={`${'prose'} mx-auto mt-10`}
                dangerouslySetInnerHTML={{ __html: data.body }}
            />
            <MdClient />
        </>
    );
}
