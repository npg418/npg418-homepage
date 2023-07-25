import { Head } from '$fresh/runtime.ts';
import { AppProps } from '$fresh/server.ts';

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      </Head>
      <body class='w-full'>
        <main>
          <Component />
        </main>
      </body>
    </html>
  );
}
