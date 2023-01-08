import { signal } from '@preact/signals';
import { IS_BROWSER } from '$fresh/runtime.ts';

export type ColorMode = 'light' | 'dark';

export const colorMode = signal<ColorMode | undefined>(
    IS_BROWSER
        ? document.cookie.match(/theme=(light|dark);?/)?.[1] as ColorMode
        : undefined,
);

export const expires = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 10);
    return date;
};

export const toggleColorMode = () => {
    let next: ColorMode = 'light';
    document.cookie = document.cookie.replace(
        /theme=(light|dark);?/,
        (_: string, current: string) => {
            next = current === 'light' ? 'dark' : 'light';
            return `theme=${next}; expires=${expires().toUTCString()}`;
        },
    );
    document.documentElement.classList.toggle('dark');
    colorMode.value = next;
};

export const useColorModeValue = <L, D>(light: L, dark: D) => {
    return colorMode.value === 'dark' ? dark : light;
};
