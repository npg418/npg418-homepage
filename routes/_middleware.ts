import { MiddlewareHandlerContext } from '$fresh/server.ts';
import { updateTheme } from '@/utils/colormode.ts';

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext,
) {
  updateTheme(req.headers);
  return await ctx.next();
}
