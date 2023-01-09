import { IS_BROWSER } from '$fresh/runtime.ts';
import { JSX } from 'preact/jsx-runtime';

export default function BackButton(
    props: JSX.HTMLAttributes<HTMLButtonElement>,
) {
    return (
        <button
            {...props}
            onClick={(e) => {
                window.history.back();
            }}
        />
    );
}
