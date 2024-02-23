import { asset, Head } from '$fresh/runtime.ts';
import { AppProps } from '$fresh/server.ts';
import { theme } from '@/utils/colormode.ts';
import Footer from '@/components/Footer.tsx';

export default function App({ Component }: AppProps) {
  return (
    <html class={theme.value === 'dark' ? 'dark' : ''}>
      <Head>
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
        {theme.value === 'auto' ? <script defer src={asset('auto-colormode.js')} /> : null}
      </Head>
      <body class='min-h-screen bg-gray-300 text-gray-900 flex flex-col'>
        <main class='max-w-screen-md mx-auto flex-1'>
          <Component />
        </main>
        <Footer />
      </body>
    </html>
  );
}
