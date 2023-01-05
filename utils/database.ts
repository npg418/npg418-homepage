import { gql, GraphQLClient } from 'graphql-request';
import { database, filters } from '@/types/schema.ts';
import { z } from 'zod';

import 'dotenv/load.ts';

export const client = new GraphQLClient(
    Deno.env.get('SUPABASE_URL') + '/graphql/v1',
    {
        headers: {
            apiKey: Deno.env.get('SUPABASE_ANON_KEY')!,
        },
    },
);

type Table = keyof typeof database;
type GraphqlResponse<T, Name extends `${Table}Collection`> = {
    [K in Name]: {
        edges: {
            node: T;
        }[];
    };
};
type GetOption<T extends Table> = { filter?: filters[T] };

const isRecord = (value: unknown): value is Record<keyof unknown, unknown> => {
    return (
        value !== null &&
        (typeof value === 'object' || typeof value === 'function') &&
        !Array.isArray(value)
    );
};

const toObjString = (obj: Record<string, unknown>): string => {
    return '{' + Object.entries(obj).map(([key, value]) => {
        if (isRecord(value)) return [key, toObjString(value)];
        if (typeof value === 'string') return [key, `"${value}"`];
        if (typeof value === 'undefined' || value === null) return ['', ''];
        return [key, value];
    }).map((entries) => entries.join(': ')).join(' ') + '} ';
};

export const getData = async (
    table: Table,
    opt?: GetOption<typeof table>,
) => {
    const response = await client.request<
        GraphqlResponse<
            z.infer<typeof database[typeof table]>,
            `${typeof table}Collection`
        >
    >(gql`{
        ${table}Collection${(!opt || !opt.filter ||
            Object.values(opt.filter).filter(Boolean).length === 0)
            ? ''
            : `(filter: ${toObjString(opt.filter)})`
        } {
            edges {
                node {
                    ${Object.keys(database[table].shape).join(' ')}
                }
            }
        }
    }`);

    return response[`${table}Collection`].edges.map((v) =>
        database[table].parse(v.node)
    );
};
