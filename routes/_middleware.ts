import { MiddlewareHandlerContext } from '$fresh/server.ts';

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext,
) {
  return await ctx.next();
}
