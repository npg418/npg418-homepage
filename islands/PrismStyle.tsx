import { useColorModeValue } from '@/utils/colormode.ts';

export default function PrismStyle() {
    return (
        <link
            rel='stylesheet'
            href={`https://esm.sh/prismjs@1.29.0/themes/prism${
                useColorModeValue('', '-tomorrow')
            }.css`}
        />
    );
}
