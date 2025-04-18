"use client"

import Link from "next/link"
import AvatarComponent from "./AvatarComponent"
import MobileSidebar from "./MobileSidebar"
import { navData } from "@/lib/data"
import { usePathname } from "next/navigation"
import Logo from "./Logo"

const TopBar = () => {
  const pathname = usePathname();

  return (
    <div className={`sticky top-0 right-0 w-full bg-white/30 border-b border-gray-200 backdrop-blur-sm z-20 p-2 h-14 flex justify-center items-center`}>
      <div className="flex justify-between w-full">
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <MobileSidebar />
            </div>
            <Logo />
          </div>
          <div className="max-md:hidden flex gap-5 items-center">
            {
              navData.map((data, i) => {
                return <Link href={data.link} key={i} className={`${pathname === data.link || pathname.startsWith(data.link + `/`) ? 'text-neutral-950 underline tracking-widest font-semibold' : 'text-neutral-500 tracking-normal font-normal'} uppercase hover:text-neutral-950 transition-all ease-in-out text-xs`}>{data.title}</Link>
              })
            }
          </div>
        </div>
        <div className="flex justify-between items-center">
          <AvatarComponent />
        </div>
      </div>
    </div>
  )
}

export default TopBar