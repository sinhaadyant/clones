import { db } from "@/db";
import { procedure, router } from "@/trpc/init";
import { videos } from "@/db/schema";
import { z } from "zod";
import { and, eq, or, lt, desc } from "drizzle-orm";
import { TRPCError } from "@trpc/server";

export const studioRouter = router({
  getMany: procedure
    .input(
      z.object({
        cursor: z.object({ 
          id: z.string(), 
          updatedAt: z.string().transform((str) => new Date(str))
        }).nullish(),
        limit: z.number().min(1).max(100).default(10),
        orderBy: z.enum(["asc", "desc"]).default("desc"),
      })
    )
    .query(async ({ ctx, input }) => {
      const { cursor, limit, orderBy } = input;
      const userId = ctx.user?.id;

      const data = await db
        .select()
        .from(videos)
        .where(
          and(
            eq(videos.userId, userId as string),
            cursor
              ? or(
                  lt(videos.updatedAt, cursor.updatedAt),
                  and(
                    eq(videos.updatedAt, cursor.updatedAt),
                    lt(videos.id, cursor.id)
                  )
                )
              : undefined
          )
        )
        // .where(eq(videos.userId, userId as string))
        .orderBy(desc(videos.updatedAt))
        .limit(limit + 1);

      const hasMore = data.length > limit;
      const items = hasMore ? data.slice(0, -1) : data;
      const nextCursor = hasMore
        ? {
            id: items[items.length - 1].id,
            updatedAt: new Date(items[items.length - 1].updatedAt),
          }
        : null;

      return {
        items,
        hasMore,
        nextCursor,
      };
    }),
});
