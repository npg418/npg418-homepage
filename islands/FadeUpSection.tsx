import { JSX } from 'preact';
import FadeUp from '@/islands/FadeUp.tsx';
import { Replace } from '@/types/util.ts';
import { Child } from '@/types/component.ts';

export default function FadeUpSection(
    props: Replace<JSX.HTMLAttributes<HTMLElement>, {
        children: Child[] | Child;
    }>,
) {
    return (
        <>
            {props.children instanceof Array
                ? props.children.map((child) => <FadeUp>{child}</FadeUp>)
                : <FadeUp>{props.children}</FadeUp>}
        </>
    );
}
