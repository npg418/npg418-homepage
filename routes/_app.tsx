import { AppProps } from '$fresh/src/server/types.ts';
import { Head } from '$fresh/runtime.ts';
import Header from '@/islands/Header.tsx';

export default function App({ Component }: AppProps) {
    return (
        <html lang='ja'>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                                document.documentElement.classList.add('dark');
                            } else {
                                document.documentElement.classList.remove('dark');
                            }`,
                    }}
                />
            </Head>
            <body class='bg(gray-100 dark:gray-800) dark:text-gray-100'>
                <Header />
                <main class='mx-auto max-w-screen-lg p-4'>
                    <Component />
                </main>
            </body>
        </html>
    );
}
