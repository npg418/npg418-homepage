export const dedent = (text: TemplateStringsArray, ...values: unknown[]) => {
    const lines = text.map((t, i) => t + values[i]).join('').trim().split('\n');
    const indents = lines.map((l) => l.match(/^ */)?.[0].length ?? 0);
    const min = indents.reduce((pre, cur) => Math.min(pre, cur), 0);

    return lines.map((l) => l.slice(min)).join('\n');
};
