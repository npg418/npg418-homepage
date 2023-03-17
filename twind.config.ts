import { Options } from '$fresh/plugins/twind.ts';

const option: Options = {
    selfURL: import.meta.url,
    darkMode: 'class',
    preflight: {
        '.dark': {
            colorScheme: 'dark',
        },
    },
};

export default option;
