import { JSX } from 'preact/jsx-runtime';
import { Replace } from '@/types/util.ts';
import { escape, Marked } from 'markdown';
import { Renderer } from 'markdown';
import { tw } from 'twind';

export class CustomRenderer extends Renderer {
    heading(text: string, level: number): string {
        const id = text.trim().toLocaleLowerCase().replace(/\s+/g, '-');
        return `<h${level} id="${id}" class="${
            tw(`text-${-level + 7}xl`, 'my-2 border-b-1 leading-normal')
        }">${text}</h${level}>`;
    }
    paragraph(text: string): string {
        return `<p>${text.replaceAll(/\n/g, '</p><p>')}</p>`;
    }
    list(body: string, ordered?: boolean | undefined): string {
        const type = ordered ? 'ol' : 'ul';
        return `\n<${type} class="${tw`${
            ordered ? 'list-decimal' : 'list-disc'
        } pl-5`}">${body}</${type}>\n`;
    }
    blockquote(quote: string): string {
        return `<blockquote class="${tw`border-l-2 pl-4 my-1`}">\n${quote}\n</blockquote>`;
    }
}

export default function Markdown(
    props: Replace<JSX.HTMLAttributes<HTMLElement>, { children: string }>,
) {
    const content = Marked.parse(props.children, {
        renderer: new CustomRenderer(),
        silent: true,
        escape: escape,
    }).content;
    return (
        <article class='mx-10' dangerouslySetInnerHTML={{ __html: content }} />
    );
}
