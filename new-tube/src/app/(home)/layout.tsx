import React from 'react'
import HomeLayout from '@/app/modules/home/ui/layouts/home-layout'

interface HomeLayoutProps {
  children: React.ReactNode
}
    
const layout = ({ children }: HomeLayoutProps) => {
  return (
    <HomeLayout>
        {children}
    </HomeLayout>
  )
}

export default layout