import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { LogOutIcon, VideoIcon } from "lucide-react";
import Link from "next/link";
import StudioSidebarHeader from "./StudioSidebarHeader";

const StudioSidebar = () => {
  return (
    <Sidebar
      collapsible="icon"
      className="border-none border-gray-200 bg-white h-[calc(100vh-4rem)] mt-16 lg:w-64 data-[state=collapsed]:lg:w-16 transition-all duration-200"
    >
      <SidebarContent className="bg-background">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <StudioSidebarHeader />
              {/* remove loop and use only one item */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Content"
                  className="hover:bg-gray-100 rounded-lg mx-3 mb-2 group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:h-10"
                >
                  <Link
                    href="/"
                    className="flex items-center gap-6 px-3 py-2 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:h-10 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:gap-0"
                  >
                    <VideoIcon className="size-5 text-gray-700" />
                    <span className="text-sm text-gray-800 group-data-[collapsible=icon]:hidden">
                      Content
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarSeparator />
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Exit Studio"
                  className="hover:bg-gray-100 rounded-lg mx-3 mb-2 group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:h-10"
                >
                  <Link
                    href="/"
                    className="flex items-center gap-6 px-3 py-2 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:h-10 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:gap-0"
                  >
                    <LogOutIcon className="size-5 text-gray-700" />
                    <span className="text-sm text-gray-800 group-data-[collapsible=icon]:hidden">
                      Exit Studio
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default StudioSidebar;
