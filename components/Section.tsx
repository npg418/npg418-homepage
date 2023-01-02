import { ComponentChildren } from 'preact';

export default function Section(
    { title, children, class: className }: {
        title: string;
        children?: ComponentChildren;
        class?: string;
    },
) {
    return (
        <section class={`p-3 ${className || ''}`}>
            <h2
                class={`text-4xl font-bold border-b p-3 flex before::(${'content'} h-10 w-1 mr-2 rounded bg-gray-500) not-hover:before::invisible`}
            >
                {title}
            </h2>
            {children}
        </section>
    );
}
