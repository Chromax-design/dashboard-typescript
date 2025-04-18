import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenuButton,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { MdOutlineDashboardCustomize} from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
import SidebarLinks from "./SidebarLinks";

export function AppSidebar() {
    return (
        <Sidebar variant="inset" className="outline-none border-none bg-white!">
            <SidebarHeader className="bg-white! h-14">
                <Link href={'/'} className="text-3xl font-semibold">Cromax</Link>
            </SidebarHeader>
            <SidebarContent className=" overflow-x-hidden bg-white pt-4 px-2">
                <SidebarLinks href="/" icon={<MdOutlineDashboardCustomize />} label="home" />
                <SidebarSeparator />
                <SidebarLinks href="/projects" icon={<FaDiagramProject />} label="My projects" />
                <SidebarSeparator />
                <SidebarMenuButton asChild>
                    <Link href={'/'} className="px-4 py-6">
                        <span className="text-xl">
                            <TbLogout2 />
                        </span>
                        <span className="capitalize text-base">log out</span>
                    </Link>
                </SidebarMenuButton>

            </SidebarContent>
        </Sidebar>
    )
}
