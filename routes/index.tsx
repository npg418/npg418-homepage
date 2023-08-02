import { asset, Head } from '$fresh/runtime.ts';
import IconArrowCurveLeft from 'tabler-icons/arrow-curve-left.tsx';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>NPG418 HP</title>
      </Head>
      <div class='text-center'>
        <h1 class='text-8xl'>NPG418 IS HERE!!</h1>
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
    </>
  );
}
