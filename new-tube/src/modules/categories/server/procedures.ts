import { procedure, router } from "@/trpc/init";
import { db } from "@/db";
import { categories } from "@/db/schema";

export const categoriesRouter = router({
  getMany: procedure.query(async () => {
    const data = await db.select().from(categories);
    return data;
  }),
});
