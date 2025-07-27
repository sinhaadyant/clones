import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import React from "react";

const StudioUploadModal = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      className="rounded-2xl flex items-center gap-2"
    >
      <PlusIcon className="w-4    h-4" />
      <span className="hidden sm:block">Create</span>
    </Button>
  );
};

export default StudioUploadModal;
