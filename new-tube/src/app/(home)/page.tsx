import React, { Suspense } from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { HydrateClient } from "@/trpc/hydrate-client";
import { ErrorBoundary } from "@/components/error-boundary";
import Client from "./client";

const Page = (): React.JSX.Element => {
  return (
    <div className="w-full">
      <SignedIn>
        <HydrateClient>
          <ErrorBoundary
            fallback={
              <div className="p-4 text-red-600">Failed to load content</div>
            }
          >
            <Suspense
              fallback={
                <div className="flex items-center justify-center p-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <span className="ml-2 text-gray-600">Loading...</span>
                </div>
              }
            >
              <Client />
            </Suspense>
          </ErrorBoundary>
        </HydrateClient>
      </SignedIn>

      <SignedOut>
        <div className="p-6">
          <SignInButton />
        </div>
      </SignedOut>
    </div>
  );
};

export default Page;
