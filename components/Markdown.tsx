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
        <>
            <article class={props.class}>
                {new CustomParser({
                    renderer: new CustomRenderer({
                        highlight: (code, lang) => {
                            return lang in Prism.languages
                                ? Prism.highlight(
                                    code,
                                    Prism.languages[lang],
                                    lang,
                                )
                                : code;
                        },
                    }),
                }).parse(tokens)}
            </article>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        [...document.getElementsByClassName('copy-button')].forEach((element) => {
                            element.addEventListener('click', (event) => {
                                const code = element.previousElementSibling.textContent;
                                const inner = element.innerHTML;
                                if (code && inner !== 'Copied!') {
                                    window.navigator.clipboard.writeText(code);
                                    element.innerHTML = 'Copied!';
                                    setTimeout(() => {
                                        element.innerHTML = inner;
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
