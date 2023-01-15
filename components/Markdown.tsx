import { Lexer } from 'marked';
import { CustomParser, CustomRenderer } from '@/utils/markdown.tsx';
import Prism from 'prismjs';
import loadLanguage from 'prismjs/components/index.js';

loadLanguage();

export default function Markdown(props: { children: string; class?: string }) {
    const tokens = Lexer.lex(props.children, {
        breaks: false,
        gfm: true,
    });

    return (
        <article class={props.class}>
            {new CustomParser({
                renderer: new CustomRenderer({
                    highlight: (code, lang) => {
                        return lang in Prism.languages
                            ? Prism.highlight(code, Prism.languages[lang], lang)
                            : code;
                    },
                }),
            }).parse(tokens)}
        </article>
    );
}
