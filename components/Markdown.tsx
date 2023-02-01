import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';
import loadLanguage from 'prismjs/components/index.js';
import { JSX } from 'preact/jsx-runtime';
import footnote from 'md-footnote';
import emoji from 'md-emoji';
import math from 'md-math';
import katex from 'katex';
import { anchor, codeblock } from '@/utils/plugins.tsx';
import { dedent } from '@/utils/strings.ts';
import MdStyles from '@/islands/MdStyles.tsx';

export default function Markdown(props: {
    as?: keyof JSX.IntrinsicElements;
    class?: string;
    children: string;
}) {
    loadLanguage();

    const md = new MarkdownIt({
        highlight: (code, lang) => {
            if (!(lang in Prism.languages)) return code;

            return Prism.highlight(
                code,
                Prism.languages[lang],
                lang,
            );
        },
    });

    md.use(anchor).use(codeblock).use(footnote).use(emoji).use(math, {
        allow_space: true,
        allow_digits: true,
        double_inline: true,
        allow_labels: true,
        renderer(content, { displayMode }) {
            return katex.renderToString(content, {
                displayMode,
                throwOnError: false,
            });
        },
    });

    const Tag = props.as || 'div';

    return (
        <>
            <MdStyles />
            <Tag
                dangerouslySetInnerHTML={{ __html: md.render(props.children) }}
                class={`${props.class ?? ''} ${'prose'} mx-auto`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: dedent`
                        [...document.getElementsByClassName('copy-button')].forEach((button) => {
                            button.addEventListener('click', () => {
                                const code = button.previousElementSibling.textContent;
                                const inner = button.innerHTML;
                                if (code && inner !== 'Copied!') {
                                    window.navigator.clipboard.writeText(code);
                                    button.innerHTML = 'Copied!';
                                    setTimeout(() => {
                                        button.innerHTML = inner;
                                    }, 1500);
                                }
                            });
                        });
                    `,
                }}
            />
        </>
    );
}
