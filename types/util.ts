export type Require<T, K extends keyof T> =
    & {
        [P in K]-?: T[P];
    }
    & Omit<T, K>;

export type Replace<T, R extends Partial<Record<keyof T, unknown>>> =
    & Omit<T, keyof R>
 & R;
