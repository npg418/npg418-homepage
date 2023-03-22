import { useEffect, useState } from 'preact/hooks';
import { JSX } from 'preact';

export default function NavButton(
    props: Pick<JSX.HTMLAttributes<HTMLAnchorElement>, 'href' | 'children'>,
) {
    const location = useLocation();

    return (
        <li
            class={location?.pathname === props.href
                ? 'text-gray-400'
                : 'hover:bg-gray(300 dark:800)'}
        >
            <a
                class='p-3 inline-block'
                {...(location?.pathname === props.href
                    ? { tabIndex: -1, children: props.children }
                    : props)}
            />
        </li>
    );
}

function useLocation() {
    const [location, setLocation] = useState<Location | null>(null);

    useEffect(() => {
        setLocation(window.location);
    }, []);

    return location;
}
