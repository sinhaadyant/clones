import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection.observer";
import { ArrowDown, Loader2 } from "lucide-react";
import { useEffect, useRef } from "react";

interface InfiniteScrollProps {
  isManual?: boolean;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

export const InfiniteScroll = ({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  isManual = false,
}: InfiniteScrollProps) => {
  const { targetRef, isIntersecting }: any = useIntersectionObserver({
    rootMargin: "100px",
    threshold: 1.0,
  });

  useEffect(() => {
    if (isIntersecting && hasNextPage && !isFetchingNextPage && !isManual) {
      fetchNextPage();
    }
  }, [
    isIntersecting,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isManual,
  ]);
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div ref={targetRef} className="h-1">
        {hasNextPage ? (
          <Button 
          variant="secondary" 
          disabled={isFetchingNextPage || !hasNextPage}
          onClick={() => fetchNextPage()} >
            {isFetchingNextPage ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowDown className="w-4 h-4" />}
            Load More
          </Button>
        ) : (
          <div className="text-sm text-gray-500">No more data</div>
        )}
      </div>
    </div>
  );
};
