import { renderToString } from 'preact-render-to-string';
import MarkdownIt from 'markdown-it';
import { RenderRule } from 'markdown-it/renderer.d.ts';
import footnote from 'md-footnote';
import emoji from 'md-emoji';
import math from 'md-math';
import katex from 'katex';
import { FaRegCopy } from 'react-icons/fa';
import { DOMParser, Element } from 'deno-dom';
import Prism from 'prismjs';

const anchor: MarkdownIt.PluginSimple = (md) => {
    md.core.ruler.push('anchor', ({ tokens }) => {
        const definedSlugs: string[] = [];
        tokens.forEach((token, idx, tokens) => {
            if (token.type !== 'heading_open' || !tokens[idx + 1].children) {
                return;
            }

            const slug = tokens[idx + 1].children!.filter((t) =>
                ['text', 'code_inline'].includes(t.type)
            )
                .map((t) => t.content)
                .join('')
                .toLocaleLowerCase()
                .replaceAll(/\s+/g, '-');

            if (!slug) return;
            definedSlugs.push(slug);
            token.attrSet('id', slug);
        });
    });
};

const codeblock: MarkdownIt.PluginSimple = (md) => {
    const rule: RenderRule = (tokens, idx) => {
        const target = tokens[idx];
        const [lang, filename] = target.info.split(':');

        return renderToString(
            <pre
                class={`${
                    md.options.langPrefix + (lang || 'none')
                } rounded relative group`}
            >
                {filename
                    ? <div class="py-1 px-2 bg-gray(300 dark:600) w-[fit-content] -mt-4 -ml-4 mb-1">{filename}</div>
                    : ''
                }
                <code dangerouslySetInnerHTML={{__html: target.content}} />
                <button class={`${'copy-button'} absolute top-4 right-4 opacity-0 transition-opacity group-hover:opacity-100`} title="クリップボードにコピー">
                    <FaRegCopy />
                </button>
            </pre>,
        );
    };

    md.renderer.rules.fence = md.renderer.rules.code_block = rule;
};

const md = new MarkdownIt()
    .use(anchor)
    .use(codeblock)
    .use(footnote)
    .use(emoji)
    .use(math, {
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
export default md;

export async function highlightCode(src: string) {
    const dom = new DOMParser().parseFromString(src, 'text/html');

    if (!dom) return src;

    await Promise.all(
        [...dom.querySelectorAll('pre[class*="language-"]')].map(
            async (node) => {
                if (node instanceof Element) {
                    const target = node as Element;

                    const lang = [...target.classList].find((cls) =>
                        cls.startsWith('language-')
                    )?.substring(9);

                    if (!lang || lang === 'none') return;

                    try {
                        await import(
                            `${
                                import.meta.resolve('prismjs')
                            }/components/prism-${lang}.js`
                        );
                    } catch {
                        //ignore errors
                    }

                    if (lang in Prism.languages) {
                        target.getElementsByTagName('code').forEach((code) => {
                            code.innerHTML = Prism.highlight(
                                code.innerHTML,
                                Prism.languages[lang],
                                lang,
                            );
                        });
                    }
                }
            },
        ),
    );

    return dom.body.innerHTML;
}
