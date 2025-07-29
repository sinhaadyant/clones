import { mux } from "@/lib/mux";
import MuxUploader from "@mux/mux-uploader-react";

interface StudioUploaderProps {
  endpoint: string | null;
  onSuccess: (data: any) => void;
}

export const StudioUploader = async ({
  endpoint,
  onSuccess,
}: StudioUploaderProps) => {
  //   const directUpload = await mux.video.uploads.create({
  //     cors_origin: "*",
  //     new_asset_settings: {
  //       playback_policy: ["public"],
  //     },
  //   });

  return (
    <div>
      endpoint : {endpoint}
      {/* <MuxUploader endpoint={directUpload.url} onSuccess={onSuccess} /> */}
    </div>
  );
};
