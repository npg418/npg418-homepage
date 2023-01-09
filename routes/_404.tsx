import { UnknownPageProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import BackButton from '@/islands/BackButton.tsx';

export default function NotFoundPage({ url }: UnknownPageProps) {
    return (
        <>
            <Head>
                <title>404 Error! - NPG418</title>
            </Head>
            <h1 class='text-7xl my-5 mx-10 text-center'>404 Not Found!</h1>
            <p class='w-[fit-content] mx-auto'>
                お探しのページ(
                <a
                    href={url.href}
                    class='text-blue(900 dark:300)) hover:text-underline'
                >
                    {url.href}
                </a>
                )はどうやらこのサイトには無いようです。なんでだろうね。<br />
                またのお越しをお待ちしております。
                <BackButton class='block w-[fit-content] ml-auto mt-3 p-2 rounded-xl hover:(bg(black opacity-10))'>
                    元のページに戻る
                </BackButton>
            </p>
        </>
    );
}
