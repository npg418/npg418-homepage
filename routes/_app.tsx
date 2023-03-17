import { AppProps } from '$fresh/server.ts';
import ColormodeClient from '../islands/ColormodeClient.tsx';

export default function App({ Component }: AppProps) {
    return (
        <html>
            <ColormodeClient />
            <body class='min-h-screen'>
                <Component />
            </body>
        </html>
    );
}
