import ThemeToggleButton from '@/islands/ThemeToggleButton.tsx';

export default function Header() {
  return (
    <header class='w-full my-4 mx-auto'>
      <nav class='flex justify-end'>
        <ThemeToggleButton />
      </nav>
    </header>
  );
}
