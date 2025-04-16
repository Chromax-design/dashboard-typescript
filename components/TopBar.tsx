"use client"

import { AppSidebar } from "./app-sidebar"
import AvatarComponent from "./AvatarComponent"
import { SidebarTrigger, useSidebar } from "./ui/sidebar"

const TopBar = () => {
  const { open, isMobile } = useSidebar()

  return (
    <div className={`fixed top-0 right-0 max-md:w-full ${open ? 'w-[calc(100%-16rem)] duration-300' : 'w-full'} transition-all ease-in-out bg-white h-14 p-3 ${isMobile ? 'w-full shadow' : ''}`}>
      <AppSidebar />
      <div className="flex justify-between items-center">
        <SidebarTrigger />
        <AvatarComponent />
      </div>
    </div>
  )
}

export default TopBar