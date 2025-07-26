'use client'
import { FlameIcon, HomeIcon, HistoryIcon, PlaySquareIcon, ClockIcon, ThumbsUpIcon, SettingsIcon, FlagIcon, HelpCircleIcon, MessageSquareIcon } from 'lucide-react'
import { SidebarGroup, SidebarGroupContent, SidebarMenuButton, SidebarMenuItem, SidebarGroupLabel, SidebarMenu } from '@/components/ui/sidebar'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useUser, useClerk } from '@clerk/nextjs'

const MainSection = () => {
    const router = useRouter()
    const { user, isSignedIn } = useUser()
    const { openSignIn } = useClerk()
    const mainItems = [
        {
            title: 'Home',
            icon: HomeIcon,
            href: '/',
            auth: true,
        },
        {
            title: 'Subscriptions',
            icon: PlaySquareIcon,
            href: '/feed/subscriptions',
            auth: true,
        },
        {
            title: 'Trending',
            icon: FlameIcon,
            href: '/feed/trending',
            auth: true,
        },
    ]
 
   
  return (
    <div className="flex flex-col">
        {/* Main Navigation */}
        <SidebarGroup>           
            <SidebarGroupContent>
                <SidebarMenu>
                    {mainItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                             <SidebarMenuButton 
                                asChild 
                                tooltip={item.title}
                                className="hover:bg-gray-100 rounded-lg mx-3 mb-2 group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:h-10"
                                onClick={(e) => {
                                    if (!isSignedIn && item.auth) {
                                       e.preventDefault()           
                                       e.stopPropagation()
                                       return openSignIn();
                                    }  
                                }}
                             >
                                <Link href={item.href} className='flex items-center gap-6 px-3 py-2 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:h-10 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:gap-0'>
                                    <item.icon className='size-5 text-gray-700' />
                                    <span className="text-sm text-gray-800 group-data-[collapsible=icon]:hidden">
                                        {item.title}
                                    </span>
                                </Link>
                             </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
 
    </div>
    )
}

export default MainSection