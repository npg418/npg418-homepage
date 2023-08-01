import { asset, Head } from '$fresh/runtime.ts';
import { AppProps } from '$fresh/server.ts';
import { theme } from '@/utils/colormode.ts';

export default function App({ Component }: AppProps) {
  return (
    <html class={theme.value === 'dark' ? 'dark' : ''}>
      <Head>
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
        {theme.value === 'auto' ? <script defer src={asset('auto-colormode.js')} /> : null}
      </Head>
      <body class='min-h-screen bg-gray-300 text-gray-900'>
        <main class='max-w-screen-lg mx-auto'>
          <Component />
        </main>
      </body>
    </html>
  );
}
