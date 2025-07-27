import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import StudioSidebar from "../components/studio-sidebar";
import StudioNavbar from "../components/studio-navbar";
const StudioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Fixed Header */}
        <StudioNavbar />

        {/* Main Content Area */}
        <div className="flex pt-16">
          {/* Sidebar */}
          <StudioSidebar />

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto bg-gray-50 max-w-full">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

  export default StudioLayout;
