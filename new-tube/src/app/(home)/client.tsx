"use client";

import HomeView from "@/components/views/home-view";
import { HydrateClient } from "@/trpc/hydrate-client";

const Client = () => {
  return (
    <div className="w-full">
      <HydrateClient>
        <HomeView />
      </HydrateClient>
    </div>
  );
};
        
export default Client;  