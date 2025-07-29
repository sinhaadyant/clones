import { db } from "@/db";
import { procedure, router } from "@/trpc/init";
import { videos } from "@/db/schema";
import { mux } from "@/lib/mux";

export const videoRouter = router({
  create: procedure.mutation(async ({ ctx }) => {
    const upload = await mux.video.uploads.create({
      cors_origin: "*",
      new_asset_settings: {
        playback_policy: ["public"],
        passthrough: ctx.user?.id,
        mp4_support: "standard",
      },
    });

    // const directUpload = await client.video.uploads.create({
    //     cors_origin: '*',
    //     new_asset_settings: {
    //       playback_policy: ['public'],
    //     },
    //   });

    const video = await db
      .insert(videos)
      .values({
        userId: ctx.user?.id as string,
        title:
          "Dolly Sahu &heart " + Math.random().toString(36).substring(2, 15),
      })
      .returning();
    return {
      video,
      url: upload.url,
    };
  }),
});
