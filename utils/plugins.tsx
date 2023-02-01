import { tx } from '@twind/core';
import { renderToString } from 'preact-render-to-string';
import MarkdownIt from 'markdown-it';
import { FaRegCopy } from 'react-icons/fa';
import { RenderRule } from 'markdown-it/renderer.d.ts';
import { dedent } from '@/utils/strings.ts';

export const anchor: MarkdownIt.PluginSimple = (md) => {
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

export const codeblock: MarkdownIt.PluginSimple = (md) => {
    const rule: RenderRule = (tokens, idx) => {
        const target = tokens[idx];
        const [lang, filename] = target.info.split(':');

        if (lang && md.options.highlight) {
            target.content = md.options.highlight(target.content, lang, '');
        }

        return renderToString(
            <pre
                class={`${
                    md.options.langPrefix + (lang || 'none')
                } rounded relative group`}
            >
                {filename
                    ? <div class="py-1 px-2 bg-gray(300 dark:600) w-[fit-content] -mt-4 -ml-4 mb-1 rounded-br">{filename}</div>
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
