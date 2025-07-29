import StudioView from "@/app/modules/studio/ui/view/studio-view";
import { HydrateClient } from "@/trpc/hydrate-client";

const Studio = async () => {
   return (
    <HydrateClient>
      <StudioView />
    </HydrateClient>
  );
};

export default Studio;
