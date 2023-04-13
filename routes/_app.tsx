import { AppProps } from '$fresh/server.ts';
import Header from '@/components/Header.tsx';
import ColormodeClient from '@/islands/ColormodeClient.tsx';
import { Head } from '$fresh/runtime.ts';

export default function App({ Component }: AppProps) {
    return (
        <html>
            <Head>
                <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
            </Head>
            <ColormodeClient />
            <body class='min-h-screen bg-gray-100'>
                <Header />
                <main class='max-w-screen-md mx-auto'>
                    <Component />
                </main>
            </body>
        </html>
    );
}
