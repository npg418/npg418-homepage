import { getCookies, setCookie } from '$std/http/cookie.ts';
import { MiddlewareHandlerContext } from '$fresh/server.ts';
import { ColorMode, colorMode, expires } from '@/utils/colormode.ts';

export async function handler(
    req: Request,
    ctx: MiddlewareHandlerContext,
) {
    colorMode.value = getCookies(req.headers).theme as ColorMode ||
        'light';
    const res = await ctx.next();
    setCookie(res.headers, {
        name: 'theme',
        value: colorMode.value,
        expires: expires()
    });
    return res;
}
