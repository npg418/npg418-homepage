import { Head } from '$fresh/runtime.ts';
import { PageProps } from '$fresh/server.ts';
import nightwind from 'nightwind/helper.js';
import Footer from '@/components/Footer.tsx';
import Header from '@/components/Header.tsx';

export default function App({ Component }: PageProps) {
  return (
    <html lang='jp'>
      <Head>
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
        <link rel='stylesheet' href='/styles.css' />
        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }}></script>
      </Head>
      <body class='min-h-screen bg-gray-300 text-gray-900 flex flex-col'>
        <main class='max-w-screen-md mx-auto flex-1'>
          <Header />
          <Component />
          <Footer />
        </main>
      </body>
    </html>
  );
}
