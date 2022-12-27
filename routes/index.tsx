import { Head } from '$fresh/runtime.ts';
import FadeUp from '../islands/FadeUp.tsx';

export default function Home() {
    return (
        <>
            <Head>
                <title>NPG418 Homepage</title>
                <link rel='preload' href='npg418.png' as='image/png' />
            </Head>
            <div class='h-[150vh]'></div>
            <div class='flex items-center'>
                <img class='w-1/2' src='npg418.png' />
                <h1 class='font-bold text-7xl ml-4 flex flex-col'>
                    <span class='text-green-500'>Hello!</span>
                    <span>I'm NPG418</span>
                </h1>
            </div>
        </>
    );
}
