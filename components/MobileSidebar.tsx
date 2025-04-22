"use client";

import Link from "next/link";
import { navData } from "@/lib/data";
import { Separator } from "./ui/separator";
import { useEffect, useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openSideBar = () => setIsOpen(true);
  const closeSideBar = () => setIsOpen(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (sidebarRef.current && !sidebarRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="max-md:block hidden">
      <span className=" text-3xl flex items-center" onClick={openSideBar}>
        <IoIosMenu />
      </span>
      {isOpen && (
        <div className="fixed h-screen inset-0 bg-black/40 z-10 transition-transform" />
      )}
      <div
        className={`fixed left-0 top-0 bg-background min-w-72 h-screen z-20 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        ref={sidebarRef}
      >
        <div className="relative">
          <div className="absolute p-4 bg-background w-full flex justify-end">
            <span className="text-4xl" onClick={closeSideBar}>
              <IoClose />
            </span>
          </div>
        </div>
        <div className="h-full overflow-y-auto">
          <ul className=" capitalize flex flex-col pt-20 px-5">
            {navData.map(({ link, title }, i) => (
              <li key={i} className="text-xl">
                <Link
                  href={link}
                  className="capitalize text-base block text-left w-full py-4"
                  onClick={closeSideBar}
                >
                  {title}
                </Link>
                <Separator />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileSidebar;
