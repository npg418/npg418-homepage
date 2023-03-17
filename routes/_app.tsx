import { AppProps } from '$fresh/server.ts';
import Header from '@/components/Header.tsx';
import ColormodeClient from '@/islands/ColormodeClient.tsx';

export default function App({ Component }: AppProps) {
    return (
        <html>
            <ColormodeClient />
            <body class='min-h-screen'>
                <Header />
                <Component />
            </body>
        </html>
    );
}
