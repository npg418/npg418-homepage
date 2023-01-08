import { signal } from '@preact/signals';
import { IS_BROWSER } from '$fresh/runtime.ts';

export type ColorMode = 'light' | 'dark';

export const colorMode = signal<ColorMode | undefined>(
    IS_BROWSER
        ? document.cookie.match(/theme=(light|dark);?/)?.[1] as ColorMode
        : undefined,
);

export const toggleColorMode = () => {
    let next: ColorMode = 'light';
    document.cookie = document.cookie.replace(
        /theme=(light|dark);?/,
        (full: string, current: string) => {
            next = current === 'light' ? 'dark' : 'light';
            return `theme=${next}${full.endsWith(';') ? ';' : ''}`;
        },
    );
    document.documentElement.classList.toggle('dark');
    colorMode.value = next;
};

export const useColorModeValue = <L, D>(light: L, dark: D) => {
    return colorMode.value === 'dark' ? dark : light;
};
