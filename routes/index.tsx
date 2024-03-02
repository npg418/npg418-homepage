import { asset, Head } from '$fresh/runtime.ts';
import clsx from 'clsx';
import Card from '@/components/Card.tsx';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>NPG418 HP</title>
      </Head>
      <div class='text-center mb-32'>
        <h1 class='text-8xl'>NPG418 IS HERE!!</h1>
        <figure class='relative w-fit inline-block'>
          <img src={asset('penguin_transparent.png')} alt='NPG418' />
          <figcaption class='absolute top-20 right-10 -rotate-12'>
            <p class='flex items-start text-lg'>
              <span class='i-tabler-arrow-curve-left -rotate-90 translate-y-2' />
              me
            </p>
          </figcaption>
        </figure>
      </div>
      <article class='oy-10'>
        <section>
          <h2 class='text-4xl mb-8'>About me!</h2>
          <div class='mx-16'>
            <blockquote class='flex items-end'>
              <div class='border border-gray-800 rounded-3xl w-1/2 h-32 mx-auto relative'>
                <h1 class='inline-block translate-x-1/2 absolute top-16 right-0'>
                  CSS なんもわからん
                </h1>
              </div>
              <footer>
                ─ <cite>NPG418</cite>
              </footer>
            </blockquote>
            <section class='mt-32'>
              <h3 class='text-xl mb-4'>よく使う言語</h3>
              <ul class='flex gap-3 flex-wrap items-end'>
                {[
                  'i-devicon-html',
                  'i-devicon-css3',
                  'i-devicon-javascript',
                  'i-devicon-typescript',
                  'i-devicon-python',
                  'i-devicon-cplusplus',
                  'i-devicon-csharp',
                  'i-devicon-lua',
                  'i-devicon-java',
                  'i-devicon-kotlin',
                ]
                  .map((icon, i) => (
                    <li key={i}>
                      <span class={clsx(icon, 'text-6xl')} />
                    </li>
                  ))}
                <li>
                  <span class='text-2xl'>...</span>
                </li>
              </ul>
            </section>
          </div>
        </section>
        <section>
          <h2 class='text-4xl mb-8'>
            作ったものとか
          </h2>
          <ul class='flex'>
            <li>
              <Card href='https://deno.land/x/devicons_tsx' title='Devicons TSX'>
                An TSX implement of{' '}
                <a class='text-blue-500 hover:underline' href='https://devicon.dev/'>
                  Devicons
                </a>. Easy to use in your fresh project!
              </Card>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
