import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';
import loadLanguage from 'prismjs/components/index.js';
import { DOMParser, Element } from 'deno-dom';
import { JSX } from 'preact/jsx-runtime';
import { tx } from '@twind/core';
import { Head } from '$fresh/runtime.ts';
import { anchor, codeblock } from '@/utils/plugins.ts';
import footnote from 'footnote';
import PrismStyle from '@/islands/PrismStyle.tsx';

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

    md.use(anchor).use(codeblock).use(footnote);

    const result = new DOMParser().parseFromString(
        md.render(props.children),
        'text/html',
    );

    if (!result) return <></>;

    Object.entries({
        h1: tx`text-5xl border-b pb-2 my-3`,
        h2: tx`text-4xl border-b pb-2 my-3`,
        h3: tx`text-3xl border-b pb-2 my-3`,
        h4: tx`text-2xl my-3`,
        h5: tx`text-xl my-3`,
        h6: tx`text-lg my-3`,
        a: tx`text-blue(700 dark:400) hover:underline`,
        ':not(pre) > code':
            tx`bg(gray-200 dark:gray-600) inline-block rounded px-1`,
        blockquote: tx`border(l-4 gray(300 dark:600)) pl-2 m-1`,
        ol: tx`m-1 pl-6 list-decimal`,
        ul: tx`m-1 pl-6 list-disc`,
    }).forEach(([tag, cls]) =>
        [...result.querySelectorAll(tag)].forEach((node) => {
            if (node instanceof Element) {
                (node as Element).classList.add(...cls.split(' '));
            }
        })
    );

    const Tag = props.as || 'div';

    const wrapper = result.createElement(Tag);

    [...result.body.childNodes].forEach((node) => wrapper.appendChild(node));

    return (
        <>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            function copyCode(element) {
                                const code = element.previousElementSibling.textContent;
                                const inner = element.innerHTML;
                                if (code && inner !== 'Copied!') {
                                    window.navigator.clipboard.writeText(code);
                                    element.innerHTML = 'Copied!';
                                    setTimeout(() => {
                                        element.innerHTML = inner;
                                    }, 1500);
                                }
                            }
                        `,
                    }}
                />
            </Head>
            <PrismStyle />
            <Tag dangerouslySetInnerHTML={{ __html: wrapper.innerHTML }} />
        </>
    );
}
