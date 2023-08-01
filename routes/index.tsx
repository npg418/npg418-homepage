import { asset, Head } from '$fresh/runtime.ts';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>NPG418 HP</title>
      </Head>
      <h1 class='text-8xl text-center'>NPG418 IS HERE!!</h1>
      <img src={asset('penguin_transparent.png')} alt='NPG418' class='mx-auto' />
    </>
  );
}
