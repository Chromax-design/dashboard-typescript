"use client"

import Link from "next/link"
import { SidebarMenuButton, useSidebar } from "./ui/sidebar"
import { usePathname } from "next/navigation"

type SidebarlinkProps = {
    href: string,
    icon: React.ReactNode,
    label: string
}

const SidebarLinks = ({href, icon, label}:SidebarlinkProps) => {
    const {setOpenMobile, isMobile} = useSidebar()
    const pathname = usePathname();
    const isActive = pathname === href;

    const handleClick = ()=>{
        if (isMobile) {
            setOpenMobile(false)
        }
    }

    return (
        <SidebarMenuButton asChild className={`px-4 py-6 ${isActive ? 'bg-[#635bff]! text-white! shadow-lg! hover:text-white! hover:bg-[#635bff]!' : 'bg-transparent!'}`} isActive={isActive}>
            <Link href={href} className="hover:text-[#635bff]!" onClick={()=> handleClick()}>
                <span className="text-xl">
                    {icon}
                </span>
                <span className="capitalize text-base">{label}</span>
            </Link>
        </SidebarMenuButton>
    )
}

export default SidebarLinks