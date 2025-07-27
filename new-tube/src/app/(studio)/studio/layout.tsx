import React from 'react'
import StudioLayout from '@/app/modules/studio/ui/layouts/studio-layout'

interface StudioLayoutProps {
  children: React.ReactNode
}
    
const layout = ({ children }: StudioLayoutProps) => {
  return (
    <StudioLayout>
        {children}
    </StudioLayout>
  )
}

export default layout