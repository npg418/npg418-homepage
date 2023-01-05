type Nullish<T> = {
    [K in keyof T]: T[K] | null;
};

export type Filter<T> = Partial<
    Nullish<{
        eq: T;
        gt: T;
        gte: T;
        in: Array<T>;
        lt: T;
        lte: T;
        neq: T;
    }>
>;

export type BigIntFilter = Filter<bigint>;

export type BooleanFilter = Filter<boolean>;

export type IdFilter = Pick<Filter<string>, 'eq'>;

export type NumberFilter = Filter<number>;

export type StringFilter = Filter<string>;

export type TimeFilter = Filter<string>;

export type UuidFilter = Pick<Filter<string>, 'eq' | 'in' | 'neq'>;
