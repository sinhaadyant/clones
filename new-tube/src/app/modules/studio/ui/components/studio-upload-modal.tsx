"use client";
import { ResponsiveModal } from "@/app/components/responsive-modal";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc/client";
import { Loader2, Loader2Icon, UploadIcon } from "lucide-react";
import { toast } from "sonner";
import { StudioUploader } from "./studio-uploader";

const StudioUploadModal = () => {
  const utils = trpc.useUtils();

  const createVideo = trpc.videos.create.useMutation({
    onSuccess: () => {
      utils.studio.getMany.invalidate();
      toast.success("Video created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return (
    <>
      {/* <ResponsiveModal
        open={!createVideo.data?.url}
        title="Upload a Video"
        onOpenChange={() => createVideo.reset()}
      >
        {createVideo.isError ? (
          <div className="text-red-500 flex flex-col gap-2 items-center">
            <span>Error: {createVideo.error?.message || "Unknown error"}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => createVideo.mutate()}
              disabled={createVideo.isPending}
            >
              Retry
            </Button>
          </div>
        ) : createVideo.isPending ? (
          <Loader2Icon className="animate-spin" />
        ) : createVideo.data?.url ? (
          <StudioUploader
            endpoint={createVideo.data?.url ?? null}
            onSuccess={() => {}}
          />
        ) : null}
      </ResponsiveModal> */}
      <Button
        variant="outline"
        size="sm"
        className="rounded-2xl flex items-center gap-2"
        onClick={() => createVideo.mutate()}
        disabled={createVideo.isPending}
      >
        {createVideo.isPending ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <UploadIcon className="w-4 h-4" />
        )}
        <span className="hidden sm:block">Create</span>
      </Button>
    </>
  );
};

export default StudioUploadModal;
