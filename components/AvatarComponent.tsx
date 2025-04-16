import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { Button } from "./ui/button";


const AvatarComponent = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none active:outline-none cursor-pointer">
                <Avatar>
                    {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                    <AvatarFallback>G</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" -translate-x-5 space-y-2">
                <DropdownMenuItem className=" group">
                    <Link href={'/profile'} className="flex gap-2 items-center group-hover:text-blue-600">
                        <FaUserCircle className="size-5 group-hover:text-blue-600" />
                        <span className="capitalize text-base">my profile</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                    <Button className=" w-full rounded-sm cursor-pointer bg-blue-600 hover:bg-blue-500 text-white capitalize">log out</Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default AvatarComponent