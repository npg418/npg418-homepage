import { Handlers } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import { Article } from '@/types/schema.ts';
import { getData } from '@/utils/database.ts';
import Markdown from '@/components/Markdown.tsx';
import { InferPageProps } from '@/types/util.ts';

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

export default function ArticlePage({ data }: InferPageProps<typeof handler>) {
    if (!data) {
        return <></>;
    }

    return (
        <>
            <Head>
                <title>{data.title} - NPG418</title>
            </Head>
            <Markdown>{data.body}</Markdown>
        </>
    );
}
