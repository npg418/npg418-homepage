import { z } from 'zod';
import { Filter } from '@/types/filter.ts';

export const database = {
    article: z.object({
        id: z.string().uuid(),
        created_at: z.string().datetime({ offset: true }),
        updated_at: z.string().datetime({ offset: true }),
        title: z.string(),
        body: z.string(),
        tags: z.array(z.string()).nullable(),
        slug: z.string().nullable(),
        release: z.boolean(),
        publish_at: z.string().datetime({ offset: true }).nullable(),
    }),
    tag: z.object({
        id: z.string(),
        text: z.string(),
        color: z.string(),
    }),
};

export type Article = z.infer<typeof database.article>;
export type Tag = z.infer<typeof database.tag>;

type filter<T> = {
    [K in keyof T]?: Filter<T[K]>;
};
export type filters = {
    [K in keyof typeof database]: filter<z.infer<typeof database[K]>>;
};
