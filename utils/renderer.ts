import { Renderer as _Renderer } from 'markdown';
import { tw } from 'twind';

export class Renderer extends _Renderer {
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
