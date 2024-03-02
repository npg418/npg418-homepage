import { ComponentChildren } from 'preact';

type Props = {
  class?: string;
  img?: ComponentChildren | string;
  title: string;
  desc?: string;
};

export default function Card(props: Props) {
  return (
    <div class='max-w-sm rounded overflow-hidden bg-opacity-25 bg-gray-500 shadow-lg'>
      {props.img ? (typeof props.img === 'string' ? <img src={props.img} /> : props.img) : (
        <div>
          <span class='i-tabler-photo-off text-5xl m-auto' />
        </div>
      )}
      <div class='px-6 py-4 bg-white dark:bg-gray-100'>
        <div class='font-bold text-xl mb-2'>{props.title}</div>
        <p class='text-gray-700 text-base'>
          {props.desc}
        </p>
      </div>
    </div>
  );
}
