import { useColorModeValue } from '@/utils/colormode.ts';

export default function MarkdownStyles() {
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
                href={`https://esm.sh/github-markdown-css@5.1.0/github-markdown-${
                    useColorModeValue('light', 'dark')
                }.css`}
            />
        </>
    );
}
