import { Sidebar, SidebarContent, SidebarSeparator } from '@/components/ui/sidebar'
import React from 'react'
import MainSection from './main-section'
import PersonalSection from './personal-section'
    
const HomeSidebar = () => {
    return (
    <Sidebar 
        collapsible="icon" 
        className='border-r border-gray-200 bg-white h-[calc(100vh-4rem)] mt-16 lg:w-64 data-[state=collapsed]:lg:w-16 transition-all duration-200'
    >    
     <SidebarContent className='bg-background' >
         <MainSection />
          <SidebarSeparator />
         <PersonalSection />
     </SidebarContent>
    </Sidebar>
  )
}

export default HomeSidebar