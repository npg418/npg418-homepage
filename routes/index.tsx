import { asset, Head } from '$fresh/runtime.ts';
import IconArrowCurveLeft from 'tabler-icons/arrow-curve-left.tsx';
import {
  CplusplusOriginal,
  CsharpOriginal,
  Css3Original,
  Html5Original,
  JavaOriginal,
  JavascriptOriginal,
  KotlinOriginal,
  LuaOriginal,
  PythonOriginal,
  TypescriptOriginal,
} from 'devicons';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>NPG418 HP</title>
      </Head>
      <div class='text-center mb-32'>
        <h1 class='text-8xl mt-5'>NPG418 IS HERE!!</h1>
        <figure class='relative w-fit inline-block'>
          <img src={asset('penguin_transparent.png')} alt='NPG418' />
          <figcaption class='absolute top-20 right-10 -rotate-12'>
            <p class='flex items-start text-lg'>
              <IconArrowCurveLeft class='-rotate-90 translate-y-2' />
              me
            </p>
          </figcaption>
        </figure>
      </div>
      <section>
        <h2 class='text-4xl mb-8'>About me!</h2>
        <div class='mx-16'>
          <blockquote class='flex items-end'>
            <div class='border rounded-3xl w-1/2 h-32 mx-auto relative'>
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
                Html5Original,
                Css3Original,
                JavascriptOriginal,
                TypescriptOriginal,
                PythonOriginal,
                CplusplusOriginal,
                CsharpOriginal,
                LuaOriginal,
                JavaOriginal,
                KotlinOriginal,
              ]
                .map((Icon, i) => (
                  <li key={i}>
                    <Icon />
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
        <h2 className='text-4xl mb-8'></h2>
      </section>
    </>
  );
}
