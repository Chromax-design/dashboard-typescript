"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

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
        <DropdownMenuItem className="flex gap-2 items-center group group-hover:text-blue-600">
          <FaUserCircle className="size-5 group-hover:text-blue-600" />
          <span className="capitalize text-base">Godskey</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0">
          <Link
            href={"/api/auth/signout"}
            className=" w-full rounded-sm cursor-pointer bg-blue-600 hover:bg-blue-500 text-white capitalize p-1.5 text-center"
          >
            log out
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarComponent;
