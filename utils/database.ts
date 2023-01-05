import { gql, GraphQLClient } from 'graphql-request';
import { database } from '@/types/schema.ts';
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

type GraphqlResponse<T, Name extends `${keyof typeof database}Collection`> = {
    [K in Name]: {
        edges: {
            node: T;
        }[];
    };
};

export const getData = async (table: keyof typeof database) => {
    const response = await client.request<
        GraphqlResponse<
            z.infer<typeof database[typeof table]>,
            `${typeof table}Collection`
        >
    >(gql`{
        ${table}Collection {
            edges {
                node {
                    ${Object.keys(database[table].shape).join('\n')}
                }
            }
        }
    }`);

    return response[`${table}Collection`].edges.map(v => v.node);
};
