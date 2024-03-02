import nightwind from 'nightwind/helper.js';
import clsx from 'clsx';

export default function ThemeToggleButton(props: { class?: string }) {
  return (
    <button
      class={clsx(
        'hover:bg-opacity-50 hover:bg-gray-200 p-3 rounded-xl',
        props.class,
      )}
      onClick={nightwind.toggle}
    >
      <span class='i-tabler-sun dark:i-tabler-moon text-3xl align-middle'></span>
    </button>
  );
}
