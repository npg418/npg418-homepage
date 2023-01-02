import { Head } from '$fresh/runtime.ts';
import Section from '@/components/Section.tsx';

export default function Home() {
    const hour = new Date().getHours();
    return (
        <>
            <Head>
                <title>NPG418 Homepage</title>
                <link rel='preload' href='npg418.png' as='image/png' />
            </Head>
            <div class='flex items-center mb-32'>
                <img class='w-1/2' src='npg418.png' alt='NPG418' />
                <h1 class='font-extrabold text-7xl ml-4 flex flex-col'>
                    <span class='text-green-500'>Hello!</span>
                    <span>I'm NPG418</span>
                </h1>
            </div>
            <Section
                class='mx-5 p-3'
                title={hour >= 4 && hour < 11
                    ? 'おはよう! '
                    : (hour >= 11 && hour < 17
                        ? 'こんにちは! '
                        : 'こんばんは! ') +
                        hour + '時だよ!'}
            >
                <p class='my-2.5 mx-5 text-lg'>
                    NPG418です。はい。<br />
                    作ったものとか置いてこうと思います。よろ。<br />
                    何かあったらTwitter:{' '}
                    <a
                        href='https://twitter.com/npg418'
                        class='text-blue(900 dark:300)) hover:text-underline'
                    >
                        @npg418
                    </a>とかDiscord: npg418#3201までどうぞ。
                </p>
            </Section>
        </>
    );
}
