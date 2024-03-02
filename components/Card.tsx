import { ComponentChildren } from 'preact';

type Props = {
  class?: string;
  img?: string;
  title: string;
  children?: ComponentChildren;
  href?: string;
};

export default function Card(props: Props) {
  return (
    <a href={props.href} class={props.class}>
      <div class='max-w-sm rounded overflow-hidden bg-opacity-25 bg-gray-500 shadow-lg'>
        {props.img ? <img src={props.img} /> : (
          <div class='text-center align-middle'>
            <span class='i-tabler-photo-off text-5xl h-44' />
          </div>
        )}
        <div class='px-6 py-4 bg-white dark:bg-gray-100'>
          <div class='font-bold text-xl mb-2'>{props.title}</div>
          <p class='text-gray-700 text-base'>
            {props.children}
          </p>
        </div>
      </div>
    </a>
  );
}
