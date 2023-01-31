import { JSX } from 'preact/jsx-runtime';

export default function BackButton(
    props: JSX.HTMLAttributes<HTMLButtonElement>,
) {
    return (
        <button
            {...props}
            onClick={() => {
                window.history.back();
            }}
        />
    );
}
