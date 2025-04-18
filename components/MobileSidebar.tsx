"use client"

import Link from "next/link"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react";
import { navData } from "@/lib/data";
import { Separator } from "./ui/separator";
import SidebarAvatar from "./SidebarAvatar";
import Logo from "./Logo";
import { useRouter } from "next/navigation";


const MobileSidebar = () => {
    const router = useRouter()
    return (
        <Sheet>
            <SheetTrigger><MenuIcon /></SheetTrigger>
            <SheetContent side="left" className=" max-sm:w-full flex flex-col">
                <SheetHeader>
                    <div className="w-full sticky top-0">
                        <Logo />
                    </div>
                    <SheetTitle className="sr-only">sidebar</SheetTitle>
                    <SheetDescription className="sr-only">Navigate through the app</SheetDescription>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto flex gap-4 flex-col px-4 pb-10">
                    {
                        navData.map((data, i) => (
                            <div className="space-y-2" key={i}>
                                <SheetClose asChild>
                                    <button
                                        onClick={() => {
                                            router.push(data.link);
                                        }}
                                        className="capitalize text-base block text-left w-full"
                                    >
                                        {data.title}
                                    </button>
                                </SheetClose>
                                <Separator />
                            </div>
                        ))
                    }
                </div>
                <SheetFooter className="flex items-center gap-2 flex-row">
                    <SidebarAvatar />
                    <p>godskey@gmail.com</p>
                </SheetFooter>
            </SheetContent>
        </Sheet>

    )
}

export default MobileSidebar
