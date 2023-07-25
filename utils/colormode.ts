import { signal } from '@preact/signals-core';
import { getCookies } from '$std/http';

export type Theme = 'auto' | 'light' | 'dark';

export const theme = signal<Theme>('auto');

export function getTheme(input: string | Headers): Theme {
  if (typeof input === 'string') {
    return (input.match(/theme=(light|dark);?/)?.[1] ?? 'auto') as Theme;
  } else {
    return (getCookies(input)['theme'] ?? 'auto') as Theme;
  }
}
