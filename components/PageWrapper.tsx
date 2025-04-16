"use client"

import { useSidebar } from "./ui/sidebar"

const PageWrapper = ({children}:{children: React.ReactNode}) => {
    const { open, isMobile } = useSidebar()
    return (
        <main className={`max-md:w-full ml-auto mt-14 p-5 ${open ? 'w-[calc(100%-16rem)] duration-300' : 'w-full'} transition-all ease-in-out bg-neutral-100 ${isMobile ? 'w-full' : ''}`}>
            {children}
        </main>
    )
}

export default PageWrapper