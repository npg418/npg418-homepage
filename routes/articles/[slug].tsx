import { Handlers, PageProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import { Article } from '@/types/schema.ts';
import { getData } from '@/utils/database.ts';
import Markdown from '../../components/Markdown.tsx';

export const handler: Handlers<Article | null> = {
    async GET(_, ctx) {
        const { slug } = ctx.params;
        try {
            const article = (await getData('article', {
                filter: { slug: { eq: slug } },
            }))[0];
            return ctx.render(article);
        } catch (error) {
            return ctx.render(null);
        }
    },
};

export default function ArticlePage({ data }: PageProps<Article | null>) {
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
