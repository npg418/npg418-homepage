import { JSX } from 'preact/jsx-runtime';
import { Replace } from '@/types/util.ts';
import { escape, Marked } from 'markdown';
import { Renderer } from '@/utils/renderer.ts';

export default function Markdown(
    props: Replace<JSX.HTMLAttributes<HTMLElement>, { children: string }>,
) {
    const content = Marked.parse(props.children, {
        renderer: new Renderer(),
        silent: true,
        escape: escape,
    }).content;
    return (
        <article class='mx-10' dangerouslySetInnerHTML={{ __html: content }} />
    );
}
