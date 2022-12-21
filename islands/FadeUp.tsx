import { cloneElement } from 'preact';
import { animation } from 'twind/css';
import { tw } from 'twind';
import { Child } from '@/types/component.ts';

export default function FadeUp(
    props: { children: Child },
) {
    return (
        <>
            {cloneElement(props.children, {
                ...props.children.props,
                class: tw`${
                    animation('0.7s ease-out 1', {
                        from: {
                            transform: 'translateY(3rem)',
                            opacity: 0,
                        },
                        to: {
                            transform: 'translateY(0)',
                            opacity: 1,
                        },
                    })
                } ${props.children.props.class}`,
            })}
        </>
    );
}

export const load = 'viewport';
