"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenuButton,
    SidebarSeparator,
    useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { MdOutlineDashboardCustomize, MdAddCard } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { AiOutlineProject } from 'react-icons/ai';
import { IoClose } from "react-icons/io5";
import SidebarLinks from "./SidebarLinks";

export function AppSidebar() {
    const { isMobile, setOpenMobile } = useSidebar()
    return (
        <Sidebar variant="inset" className="outline-none border-none bg-white!">
            <SidebarHeader className="bg-white! h-14 flex! flex-row items-center relative justify-between">
                <Link href={'/'} className="text-3xl font-semibold">Cromax</Link>
                <span className={`text-3xl ${isMobile ? 'inline-block' : 'hidden'}`} onClick={() => setOpenMobile(false)}><IoClose /></span>
            </SidebarHeader>
            <SidebarContent className=" overflow-x-hidden bg-white">
                <SidebarGroup className="space-y-2">
                    <SidebarGroupLabel className="uppercase">home</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarLinks href="/" icon={<MdOutlineDashboardCustomize />} label="dashboard" />
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarSeparator />
                <SidebarGroup className="space-y-2">
                    <SidebarGroupLabel className="uppercase">utilities</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarLinks href="/projects" icon={<AiOutlineProject />} label="all projects" />
                        <SidebarLinks href="/addproject" icon={<MdAddCard />} label="add project" />
                        <SidebarLinks href="/settings" icon={<IoIosSettings />} label="settings" />
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarSeparator />
                <SidebarGroup className="space-y-2">
                    <SidebarGroupLabel className="uppercase">auth</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenuButton asChild>
                            <Link href={'/'} className="px-4 py-6">
                                <span className="text-xl">
                                    <TbLogout2 />
                                </span>
                                <span className="capitalize text-base">log out</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="bg-white">
                copyright &copy; {new Date().getFullYear()}
            </SidebarFooter>
        </Sidebar>
    )
}
