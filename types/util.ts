import { Handlers, PageProps } from '$fresh/server.ts';

export type Require<T, K extends keyof T> =
    & {
        [P in K]-?: T[P];
    }
    & Omit<T, K>;

export type Replace<T, R extends Partial<Record<keyof T, unknown>>> =
    & Omit<T, keyof R>
    & R;

export type InferPageProps<T extends Handlers> = T extends Handlers<infer U>
    ? PageProps<U | undefined>
    : never;
