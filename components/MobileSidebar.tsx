import Link from "next/link"
import {
    Sheet,
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


const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger><MenuIcon /></SheetTrigger>
            <SheetContent side="left" className=" max-sm:w-full flex flex-col">
                <SheetHeader>
                    <div className="w-full sticky top-0">
                        <Logo />
                    </div>
                    <SheetTitle className="hidden">sidebar</SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto flex gap-4 flex-col px-4 pb-10">
                    {
                        navData.map((data, i) => (
                            <div key={i} className="space-y-2">
                                <Link href={data.link} className="capitalize text-base block">
                                    {data.title}
                                </Link>
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
