import { Head } from '$fresh/runtime.ts';
import FadeUpSection from '@/islands/FadeUpSection.tsx';

export default function Home() {
    return (
        <>
            <Head>
                <title>NPG418 Homepage</title>
            </Head>
            <FadeUpSection>
                <h1 class='font-bold'>Hello World!</h1>
            </FadeUpSection>
        </>
    );
}
