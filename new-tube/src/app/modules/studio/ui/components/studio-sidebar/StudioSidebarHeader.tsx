"use client";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import UserAvatar from "@/components/user-avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";

const StudioSidebarHeader = () => {
  const { user } = useUser();
  const {state} = useSidebar();
  if (!user)
    return (
      <div className="flex flex-col items-center justify-center pb-4 gap-y-1">
        <Skeleton className="size-[112px] rounded-full" />
        <Skeleton className="w-[80px] h-4" />
        <Skeleton className="w-[100px] h-4" />
      </div>
    );
  if (state === "collapsed") return (  
    <SidebarMenuItem>
        <SidebarMenuButton
            asChild
        >
            <Link href="/users/current">
                <UserAvatar
                    imageUrl={user?.imageUrl || ""}
                    name={user?.fullName || "User"}
                    size="xs"
                />
                <span className="text-sm">Your Profile</span>
            </Link>
        </SidebarMenuButton>
    </SidebarMenuItem>
  );
  return (
    <div className="flex flex-col items-center justify-center pb-4">
      <Link href="/users/current">
        <UserAvatar
          imageUrl={user?.imageUrl || ""}
          name={user?.fullName || ""}
          size="lg"
          className="size-[112px] hover:opacity-80 transition-opacity duration-200 cursor-pointer"
        />
      </Link>
      <div className="flex flex-col gap-1 text-center mt-2 w-full gap-y-1">
        {" "}
        <p className="text-sm font-medium">Your Profile</p>
        <p className="text-xs text-gray-500">{user?.fullName}</p>
      </div>
    </div>
  );
};

export default StudioSidebarHeader;
