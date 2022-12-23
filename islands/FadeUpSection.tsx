import FadeUp from '@/islands/FadeUp.tsx';
import { Child } from '@/types/component.ts';
import { JSX } from 'preact/jsx-runtime';

export default function FadeUpSection(
    props: {
        children: Child[] | Child;
        delay?: number;
        duration?: number;
        as?: JSX.ElementType;
        props?: (typeof props.as) extends undefined ? never
            : JSX.HTMLAttributes<HTMLElement>;
    },
) {
    const children = props.children instanceof Array
        ? props.children.map((child, i) => (
            <FadeUp
                duration={props.duration}
                delay={props.delay && props.delay * (i + 1)}
            >
                {child}
            </FadeUp>
        ))
        : (
            <FadeUp duration={props.duration} delay={props.delay}>
                {props.children}
            </FadeUp>
        );

    return props.as
        ? <props.as {...props.props}>{children}</props.as>
        : <>{children}</>;
}
