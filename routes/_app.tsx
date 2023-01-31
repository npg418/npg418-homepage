import { AppProps } from '$fresh/src/server/types.ts';
import { Head } from '$fresh/runtime.ts';
import Header from '@/islands/Header.tsx';
import { useColorModeValue } from '@/utils/colormode.ts';

export default function App({ Component }: AppProps) {
    return (
        <html lang='ja'>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `document.documentElement.classList.${
                            useColorModeValue('remove', 'add')
                        }('dark');`,
                    }}
                />
            </Head>
            <body class='bg-gray-100 text-gray-900 transition-colors overflow-y-scroll'>
                <Header />
                <main class='mx-auto max-w-screen-lg p-4'>
                    <Component />
                </main>
            </body>
        </html>
    );
}
