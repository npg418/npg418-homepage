import { asset, Head } from '$fresh/runtime.ts';
import { AppProps } from '$fresh/server.ts';
import { theme } from '@/utils/colormode.ts';

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
        {theme.value === 'auto' ? <script defer src={asset('auto-colormode.js')} /> : null}
      </Head>
      <body class={theme.value === 'dark' ? 'dark' : ''}>
        <main class='min-h-screen bg-gray-300'>
          <Component />
        </main>
      </body>
    </html>
  );
}
