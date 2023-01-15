import { FaRegCopy } from 'react-icons/fa';
import { marked, Tokenizer } from 'marked';
import { ComponentChildren } from 'preact';
import { render } from 'preact-render-to-string';

type Tokens = marked.Token[] | marked.TokensList;
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export class CustomRenderer {
    options: marked.MarkedOptions;

    constructor(options?: marked.MarkedOptions) {
        this.options = options || marked.defaults;
    }

    heading(text: ComponentChildren, level: HeadingLevel) {
        const Tag: `h${typeof level}` = `h${level}`;
        const id = render(<>{text}</>).trim().toLocaleLowerCase().replace(
            /\s+/g,
            '-',
        );
        const fontSize = {
            1: '5xl',
            2: '4xl',
            3: '3xl',
            4: '2xl',
            5: 'xl',
            6: 'lg',
        };
        return (
            <Tag
                id={id}
                class={`text-${fontSize[level]} ${
                    level <= 3 ? 'border-b pb-2' : ''
                } my-3`}
            >
                {text}
            </Tag>
        );
    }

    paragraph(children: ComponentChildren) {
        return <p>{children}</p>;
    }

    link(href: string, children: ComponentChildren, title?: string) {
        if (href === '') return <>{children}</>;
        return (
            <a
                href={href}
                title={title}
                class='text-blue(700 dark:400) hover:underline'
            >
                {children}
            </a>
        );
    }

    image(src: string, alt: string, title?: string) {
        return <image src={src} alt={alt} title={title} />;
    }

    codespan(code: string) {
        return (
            <code class='bg(gray-200 dark:gray-600) inline-block rounded px-1'>
                {code}
            </code>
        );
    }

    code(code: string, info: string | undefined) {
        const [lang, filename] = info
            ? info.split(':') as [string, string | undefined]
            : ['', ''];

        if (this.options.highlight) {
            const out = this.options.highlight(code, lang);
            if (out != null && out !== code) {
                code = out;
            }
        }
        code = code.replace(/\n$/, '') + '\n';

        return (
            <pre
                class={`language-${
                    lang || 'none'
                } rounded flex flex-col relative group`}
            >
                {filename ? <div class='py-1 px-2 bg-gray(300 dark:600) w-[fit-content] -mt-4 -ml-4 rounded-br'>{filename}</div> : ''}
                <code dangerouslySetInnerHTML={{ __html: code }} />
                <button class={`absolute top-4 right-4 opacity-0 transition-opacity group-hover:opacity-100 ${'copy-button'}`} title='クリップボードにコピー'>
                    <FaRegCopy />
                </button>
            </pre>
        );
    }

    blockquote(children: ComponentChildren) {
        return (
            <blockquote class='border(l-4 gray(300 dark:600)) pl-2 m-1'>
                {children}
            </blockquote>
        );
    }

    list(children: ComponentChildren, ordered: boolean) {
        const Tag = ordered ? 'ol' : 'ul';
        return (
            <Tag class={`m-1 pl-6 ${ordered ? 'list-decimal' : 'list-disc'}`}>
                {children}
            </Tag>
        );
    }

    listItem(children: ComponentChildren) {
        return <li>{children}</li>;
    }

    checkbox(checked: boolean) {
        return <input type='checkbox' checked={checked} disabled />;
    }

    table(children: ComponentChildren) {
        return <table>{children}</table>;
    }

    tableHeader(children: ComponentChildren) {
        return <thead>{children}</thead>;
    }

    tableBody(children: ComponentChildren) {
        return <tbody>{children}</tbody>;
    }

    tableRow(children: ComponentChildren) {
        return <tr>{children}</tr>;
    }

    tableCell(children: ComponentChildren, flags: {
        header?: boolean;
        align?: 'center' | 'left' | 'right' | null;
    }) {
        const Tag = flags.header ? 'th' : 'td';
        return (
            <Tag class={flags.align ? `text-${flags.align}` : ''}>
                {children}
            </Tag>
        );
    }

    strong(children: ComponentChildren) {
        return <strong>{children}</strong>;
    }

    em(children: ComponentChildren) {
        return <em>{children}</em>;
    }

    del(children: ComponentChildren) {
        return <del>{children}</del>;
    }

    text(children: ComponentChildren) {
        return <>{children}</>;
    }

    html(children: ComponentChildren) {
        return <>{children}</>;
    }

    hr() {
        return <hr />;
    }

    br() {
        return <br />;
    }
}

export class CustomParser {
    renderer: CustomRenderer;

    constructor(options: { renderer: CustomRenderer }) {
        this.renderer = options.renderer;
    }

    parse(tokens: Tokens): ComponentChildren {
        return tokens.map((token) => {
            switch (token.type) {
                case 'space': {
                    return null;
                }

                case 'heading':
                    return this.renderer.heading(
                        this.parseInline(token.tokens),
                        token.depth as HeadingLevel,
                    );

                case 'paragraph':
                    return this.renderer.paragraph(
                        this.parseInline(token.tokens),
                    );

                case 'text': {
                    const textTokens = (token as marked.Tokens.Text).tokens;
                    return textTokens
                        ? this.parseInline(textTokens)
                        : token.text;
                }

                case 'blockquote':
                    return this.renderer.blockquote(this.parse(token.tokens));

                case 'list':
                    return this.renderer.list(
                        token.items.map((item) => {
                            const listItemChildren = [];

                            if (item.task) {
                                listItemChildren.push(
                                    this.renderer.checkbox(
                                        item.checked ?? false,
                                    ),
                                );
                            }

                            listItemChildren.push(this.parse(item.tokens));

                            return this.renderer.listItem(listItemChildren);
                        }),
                        token.ordered,
                    );

                case 'code':
                    return this.renderer.code(token.text, token.lang);

                case 'html':
                    return this.renderer.html(token.text);

                case 'table':
                    return this.renderer.table([
                        this.renderer.tableHeader(
                            this.renderer.tableRow(
                                token.header.map((cell, index) => {
                                    return this.renderer.tableCell(
                                        this.parseInline(cell.tokens),
                                        {
                                            header: true,
                                            align: token.align[index],
                                        },
                                    );
                                }),
                            ),
                        ),
                        this.renderer.tableBody(
                            token.rows.map((row) =>
                                this.renderer.tableRow(
                                    row.map((cell, index) => {
                                        return this.renderer.tableCell(
                                            this.parseInline(cell.tokens),
                                            {
                                                header: false,
                                                align: token.align[index],
                                            },
                                        );
                                    }),
                                )
                            ),
                        ),
                    ]);

                case 'hr':
                    return this.renderer.hr();

                default:
                    console.warn(
                        `Token with "${token.type}" type was not found`,
                    );
                    return null;
            }
        });
    }

    parseInline(tokens: Tokens): ComponentChildren {
        return tokens.map((token) => {
            switch (token.type) {
                case 'text':
                    return this.renderer.text(this.escape(token.text));

                case 'strong':
                    return this.renderer.strong(this.parseInline(token.tokens));

                case 'em':
                    return this.renderer.em(this.parseInline(token.tokens));

                case 'del':
                    return this.renderer.del(this.parseInline(token.tokens));

                case 'codespan':
                    return this.renderer.codespan(unescape(token.text));

                case 'link':
                    return this.renderer.link(
                        token.href,
                        this.parseInline(token.tokens),
                    );

                case 'image':
                    return this.renderer.image(
                        token.href,
                        token.text,
                        token.title,
                    );

                case 'html':
                    return this.renderer.html(token.text);

                case 'br':
                    return this.renderer.br();

                case 'escape':
                    return this.renderer.text(token.text);

                default:
                    console.warn(
                        `Token with "${token.type}" type was not found`,
                    );
                    return;
            }
        });
    }

    private escape(text: string) {
        const regexp = /&(?:amp|lt|gt|quot|#(?:0+)?39);/g;
        return RegExp(regexp.source).test(text)
            ? text.replaceAll(regexp, (_, v) => {
                switch (v) {
                    case 'amp':
                        return '&';
                    case 'lt':
                        return '<';
                    case 'quot':
                        return '"';
                    case '#39':
                    default:
                        return '\'';
                }
            })
            : text;
    }
}

export class CustomTokenizer extends Tokenizer {
}
