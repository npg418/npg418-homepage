export const dedent = (text: TemplateStringsArray, ...values: unknown[]) => {
    const lines = text.map((t, i) => t + (values[i] ?? '')).join('').replaceAll(
        /(^\n)|(\n$)/g,
        '',
    ).split('\n');

    const indents = lines.map((l) => l.match(/^ */)?.[0].length ?? 0);
    const min = indents.reduce((i, j) => Math.min(i, j));

    return lines.map((l) => l.slice(min)).join('\n');
};
