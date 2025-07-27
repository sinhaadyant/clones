"use client";

import { trpc } from "@/lib/trpc/client";
import { ErrorBoundary } from "@/components/error-boundary";
import { Suspense } from "react";
import { Filter } from "lucide-react";
import { FilterCarousel } from "@/app/components/filter-carousel";
import { useRouter, useSearchParams } from "next/navigation";

interface CategorySectionProps {
    categoryId?: string;
}

export const CategorySection = ({ categoryId }: CategorySectionProps) => {
    return (
        <Suspense fallback={<FilterCarousel isLoading={true} value={""} onSelect={() => {}} data={[]}   />}>
            <ErrorBoundary fallback={<div>Error...</div>}>
                <CategorySectionSuspense categoryId={categoryId} />
            </ErrorBoundary>
        </Suspense>
    )
}

const CategorySectionSuspense = ({ categoryId }: CategorySectionProps) => {
    const [categories] = trpc.categories.getMany.useSuspenseQuery();
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentCategoryId = searchParams.get("categoryId") ?? "";
    const onSelect = (value: string) => {
        const url = new URL(window.location.href);
        if(value) {
            url.searchParams.set("categoryId", value);
        } else {
            url.searchParams.delete("categoryId");
        }
        router.push(url.toString());
    }
    return (
      <>
        <FilterCarousel
          value={currentCategoryId}
          isLoading={false}
          onSelect={onSelect}
          data={categories.map((category) => ({
            value: category.id,
            label: category.name,
          }))}
        />
      </>
    );
}