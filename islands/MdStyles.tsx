import { useColorModeValue } from '@/utils/colormode.ts';

export default function MdStyles() {
    return (
        <>
            <link
                rel='stylesheet'
                href={`https://esm.sh/prismjs@1.29.0/themes/prism${
                    useColorModeValue('', '-tomorrow')
                }.css`}
            />
            <link
                rel='stylesheet'
                href='https://esm.sh/katex@0.16.4/dist/katex.min.css'
            />
        </>
    );
}
