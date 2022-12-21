import { BsMoonStars, BsSun } from 'react-icons/bs';
import { toggleColorMode, useColorModeValue } from '@/utils/colormode.tsx';

export default function ThemeToggleButton(
    { className = '' }: { className?: string },
) {
    return (
        <button
            class={`rounded-lg p-4 focus:(outline-none) hover:(bg(opacity-25 gray-500)) ring-1 transition ${className}`}
            onClick={toggleColorMode}
        >
            {useColorModeValue(<BsSun />, <BsMoonStars />)}
        </button>
    );
}
