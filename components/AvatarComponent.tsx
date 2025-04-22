"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaUserCircle } from "react-icons/fa";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const AvatarComponent = () => {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/login" });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none active:outline-none cursor-pointer">
        <Avatar>
          {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
          <AvatarFallback>G</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" -translate-x-5 space-y-2">
        <DropdownMenuItem className="flex gap-2 items-center">
          <FaUserCircle className="size-5" />
          <span className="capitalize text-base">Godskey</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0">
          <Button
            className=" w-full rounded-sm cursor-pointer bg-primary capitalize"
            type="button"
            onClick={() => handleSignOut()}
          >
            log out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarComponent;
