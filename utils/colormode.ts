import { signal } from '@preact/signals';
import { IS_BROWSER } from '$fresh/runtime.ts';

export const colorMode = signal<'light' | 'dark' | null>(
    IS_BROWSER
        ? (localStorage.theme === 'dark' ||
                (!('theme' in localStorage) &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches)
            ? 'dark'
            : 'light')
        : null,
);

export const toggleColorMode = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.theme = colorMode.value = colorMode.value === 'light'
        ? 'dark'
        : 'light';
};

export const useColorModeValue = <L, D>(light: L, dark: D) =>
    colorMode.value === 'dark' ? dark : light;
