import { cloneElement, JSX } from 'preact';
import { animation } from 'twind/css';
import { tw } from 'twind';
import { Child } from '@/types/component.ts';

export default function FadeUp(
    props: { children: Child; duration?: number; delay?: number },
) {
    return (
        <>
            {cloneElement(props.children, {
                ...props.children.props,
                class: tw`opacity-0 ${
                    animation(
                        `${props.duration || '700'}ms ${
                            props.delay || '0'
                        }ms ease-out 1 forwards`,
                        {
                            from: {
                                transform: 'translateY(3rem)',
                                opacity: 0,
                            },
                            to: {
                                transform: 'translateY(0)',
                                opacity: 1,
                            },
                        },
                    )
                } ${props.children.props.class}`,
            })}
        </>
    );
}

export const load = 'viewport';
