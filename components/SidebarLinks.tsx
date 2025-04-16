"use client"

import Link from "next/link"
import { SidebarMenuButton } from "./ui/sidebar"
import { usePathname } from "next/navigation"

type SidebarlinkProps = {
    href: string,
    icon: React.ReactNode,
    label: string
}

const SidebarLinks = ({href, icon, label}:SidebarlinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <SidebarMenuButton asChild className={`px-4 py-6 ${isActive ? 'bg-[#635bff]! text-white! shadow-lg! hover:text-white! hover:bg-[#635bff]!' : 'bg-transparent!'}`} isActive={isActive}>
            <Link href={href} className="hover:text-[#635bff]!">
                <span className="text-xl">
                    {icon}
                </span>
                <span className="capitalize text-base">{label}</span>
            </Link>
        </SidebarMenuButton>
    )
}

export default SidebarLinks