import { useColorModeValue } from '@/utils/colormode.ts';
import { useEffect } from 'preact/hooks';

export default function MdClient() {
    useEffect(() => {
        [...document.getElementsByClassName('copy-button')].forEach(
            (element) => {
                element.addEventListener('click', () => {
                    const inner = element.innerHTML;
                    const code = element.previousElementSibling?.textContent;

                    if (inner !== 'Copied!' && code) {
                        navigator.clipboard.writeText(code);
                        element.innerHTML = 'Copied!';

                        setTimeout(() => {
                            element.innerHTML = inner;
                        }, 1500);
                    }
                });
            },
        );
    }, []);

    return (
        <>
            <link
                rel='stylesheet'
                href={`https://esm.sh/prism-themes@1.9.0/themes/prism-${
                    useColorModeValue('vs', 'vsc-dark-plus')
                }.css`}
            />
            <link
                rel='stylesheet'
                href='https://esm.sh/katex@0.16.4/dist/katex.min.css'
            />
        </>
    );
}
