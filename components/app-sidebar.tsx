import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenuButton,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { MdOutlineDashboardCustomize, MdAddCard } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { AiOutlineProject } from 'react-icons/ai';
import SidebarLinks from "./SidebarLinks";

export function AppSidebar() {
    return (
        <Sidebar variant="inset" className="outline-none border-none bg-white!">
            <SidebarHeader className="bg-white! h-14">
                <Link href={'/'} className="text-3xl font-semibold">Cromax</Link>
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
        </Sidebar>
    )
}
