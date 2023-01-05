import { z } from 'zod';

export const database = {
    article: z.object({
        id: z.string().uuid(),
        created_at: z.string().datetime(),
        updated_at: z.string().datetime(),
        title: z.string(),
        body: z.string(),
        tags: z.array(z.string()).optional(),
        slug: z.string().optional(),
        release: z.boolean(),
        publish_at: z.string().datetime().optional(),
    }),
    tag: z.object({
        id: z.string(),
        text: z.string(),
        color: z.string(),
    }),
};

export type Article = z.infer<typeof database.article>;
export type Tag = z.infer<typeof database.tag>;
