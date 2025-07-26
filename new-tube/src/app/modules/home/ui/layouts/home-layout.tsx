import React from 'react'
import Image from 'next/image'
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar'
import HomeNavbar from '@/app/modules/home/ui/components/home-navbar'
import HomeSidebar from '../components/home-sidebar'
const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider> 
        <div className='min-h-screen bg-gray-50'>
            {/* Fixed Header */}
            <HomeNavbar/>
            
            {/* Main Content Area */}
            <div className='flex pt-16'>
                {/* Sidebar */}
                <HomeSidebar />
                
                {/* Main Content */}
                <main className='flex-1 overflow-y-auto bg-gray-50 min-h-[calc(100vh-4rem)]'>
                    <div className='p-4 md:p-6 max-w-full'>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    </SidebarProvider>
  )
}

export default HomeLayout