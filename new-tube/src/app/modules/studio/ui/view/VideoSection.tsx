"use client";
import { ErrorBoundary } from "@/components/error-boundary";
import { InfiniteScroll } from "@/app/components/infinite-scroll";
import { trpc } from "@/lib/trpc/client";
import React, { Suspense } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { format } from "date-fns";

export const VideoSection = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary fallback={<div>Error</div>}>
        <VideoSectionSuspense />
      </ErrorBoundary>
    </Suspense>
  );
};
const VideoSectionSuspense = () => {
  const [videos, query] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    {
      limit: 10,
    },
    {
      getNextPageParam: (lastPage: any) => lastPage?.nextCursor ?? null,
    }
  );

  return (
    <>
      <div>
        <div className="border-y">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Video</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {videos.pages
                .flatMap((page) => page.items)
                .map((video) => (
                  <TableRow className="cursor-pointer hover:bg-gray-50">
                    <TableCell className="pl-6">
                      <div className="flex flex-col">
                        <div className="font-medium">{video.title}</div>
                        {video.description && (
                          <div className="text-sm text-gray-500 truncate max-w-[300px]">
                            {video.description}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {video.categoryId ? "Category" : "No Category"}
                    </TableCell>
                    <TableCell>
                      {format(new Date(video.createdAt), "MMM d, yyyy")}
                    </TableCell>
                    <TableCell>
                      {format(new Date(video.updatedAt), "MMM d, yyyy")}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link href={`/studio/${video.id}`} key={video.id}>
                          <span className="text-sm text-gray-500">Edit</span>
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
        <InfiniteScroll
          hasNextPage={query.hasNextPage}
          isFetchingNextPage={query.isFetchingNextPage}
          fetchNextPage={query.fetchNextPage}
          isManual
        />
      </div>
    </>
  );
};
