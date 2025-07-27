"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { useState, useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface FilterCarouselProps {
  value: string;
  isLoading: boolean;
  onSelect: (value: string) => void;
  data: {
    value: string;
    label: string;
  }[];
}

export const FilterCarousel = ({
  value,
  isLoading,
  onSelect,
  data,
}: FilterCarouselProps) => {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const handleSetApi = useCallback((api: any) => {
    if (!api) return;
    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    onSelect();
  }, []);
  return (

    
    <div className="relative w-full">
      {/*  left fade  */}
       
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        setApi={handleSetApi}
      >
        <CarouselContent className="-ml-3 pr-20">
          {/* Left spacer to prevent first badge from being overlapped by left arrow */}
          {canScrollPrev && (
            <CarouselItem onClick={() => onSelect("")} className="pointer-events-none basis-[8px] md:basis-[16px]" />
          )}
          {!isLoading && <CarouselItem className="pl-3 basis-auto">
            <Badge
              variant={value === "" ? "default" : "secondary"}
              className="rounded-lg px-3 py-1 whitespace-nowrap text-sm cursor-pointer"
              onClick={() => onSelect("")}
            >
              All
            </Badge>
          </CarouselItem>}
          {isLoading && Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="pl-3 basis-auto">
              <Skeleton className="rounded-lg px-3 py-1 h-full text-sm w-[100px] font-semibold" >
                &nbsp;
                </Skeleton>
            </CarouselItem>
          ))}
          {!isLoading &&
            data.map((item) => (
              <CarouselItem key={item.value} className="pl-3 basis-auto">
                <Badge
                  variant={value === item.value ? "default" : "secondary"}
                  className="rounded-lg px-3 py-1 whitespace-nowrap text-sm cursor-pointer"
                  onClick={() => onSelect(item.value)}
                >
                  {item.label}
                </Badge>
              </CarouselItem>
            ))}
          {/* Spacer to prevent last badge from being overlapped by right arrow */}
          {canScrollNext && (
            <CarouselItem className="pointer-events-none basis-[48px] md:basis-[56px]" />
          )}
        </CarouselContent>
        {canScrollPrev && (
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-20" />
        )}
        {canScrollNext && (
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-20" />
        )}
      </Carousel>
      
    </div>
  );
};
