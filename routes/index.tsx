import { Head } from '$fresh/runtime.ts';
import TopAnimation from '../islands/TopAnimation.tsx';

export default function IndexPage() {
    return (
        <>
            <Head>
                <title>NPG418 HP</title>
            </Head>
            <TopAnimation />
        </>
    );
}
