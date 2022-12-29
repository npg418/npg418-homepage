import { Head } from '$fresh/runtime.ts';

export default function Home() {
    const hour = new Date().getHours();
    return (
        <>
            <Head>
                <title>NPG418 Homepage</title>
                <link rel='preload' href='npg418.png' as='image/png' />
            </Head>
            <div class='flex items-center mb-32'>
                <img class='w-1/2' src='npg418.png' />
                <h1 class='font-extrabold text-7xl ml-4 flex flex-col'>
                    <span class='text-green-500'>Hello!</span>
                    <span>I'm NPG418</span>
                </h1>
            </div>
            <section class='mx-5'>
                <h2 class='text-4xl font-bold p-3 before::(h-full w-1 rounded-full bg-gray-500)'>
                    {hour >= 4 && hour < 11
                        ? 'おはよう!'
                        : (hour >= 11 && hour < 17
                            ? 'こんにちは!'
                            : 'こんばんは!')}
                    {hour}時だよ!
                </h2>
                <p></p>
            </section>
        </>
    );
}
