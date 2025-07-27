import { CategorySection } from '@/app/modules/home/ui/sections/category-section';
import React from 'react'
 import { Suspense } from 'react'
interface HomeViewProps {
  categoryId?: string;
}
const HomeView = ({ categoryId }: HomeViewProps) => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-[2400px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6 ">
         <Suspense fallback={<div>Loading...</div>}>
            <CategorySection categoryId={categoryId} />
         </Suspense>
      </div>
    </div>
  )
}

export default HomeView;