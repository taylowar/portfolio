import { getUrl, transformer } from './shared';

import { type AppRouter } from '~/server/api/root';

import {
    createTRPCProxyClient,
    loggerLink,
    unstable_httpBatchStreamLink,
} from '@trpc/client';
import { headers } from 'next/headers';


export const api = createTRPCProxyClient<AppRouter>({
    transformer,
    links: [
        loggerLink({
            enabled: (op) =>
                process.env.NODE_ENV === 'development' ||
        (op.direction === 'down' && op.result instanceof Error),
        }),
        unstable_httpBatchStreamLink({
            url: getUrl(),
            headers() {
                const heads = new Map(headers());
                heads.set('x-trpc-source', 'rsc');
                return Object.fromEntries(heads);
            },
        }),
    ],
});
