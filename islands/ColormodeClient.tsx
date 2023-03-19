import { useEffect } from 'preact/hooks';
import { theme } from '@/utils/colormode.ts';

export default function ColormodeClient() {
    useEffect(() => {
        const cls = window.document.documentElement.classList;
        switch (theme.value) {
            case 'auto': {
                const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                isDark ? cls.add('dark') : cls.remove('dark');
                break;
            }
            case 'dark':
                cls.add('dark');
                break;
            case 'light':
                cls.remove('light');
                break;
        }
    }, []);
    // TO-DO: remove element
    return <div></div>;
}
