import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';
import loadLanguage from 'prismjs/components/index.js';
import { JSX } from 'preact/jsx-runtime';
import { anchor, codeblock } from '@/utils/plugins.ts';
import footnote from 'footnote';
import MarkdownStyles from '@/islands/MarkdownStyles.tsx';
import { dedent } from '@/utils/strings.ts';

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

    const Tag = props.as || 'div';

    return (
        <>
            <script
                dangerouslySetInnerHTML={{
                    __html: dedent`
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
            <MarkdownStyles />
            <Tag
                dangerouslySetInnerHTML={{ __html: md.render(props.children) }}
            />
        </>
    );
}
