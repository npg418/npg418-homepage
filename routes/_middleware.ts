import { MiddlewareHandlerContext } from '$fresh/server.ts';
import { getTheme, theme } from '@/utils/colormode.ts';

export async function handler(
    req: Request,
    ctx: MiddlewareHandlerContext,
) {
    theme.value = getTheme(req.headers);
    return await ctx.next();
}
