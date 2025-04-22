"use client";

import Link from "next/link";
import AvatarComponent from "./AvatarComponent";
import MobileSidebar from "./MobileSidebar";
import { navData } from "@/lib/data";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const TopBar = () => {
  const pathname = usePathname();
  return (
    <div
      className={`sticky top-0 z-20 w-full h-14 border-b border-gray-200 bg-background/30 backdrop-blur-sm backdrop-saturate-150 p-2 `}
    >
      <div className="max-w-7xl mx-auto flex items-center h-full">
        <div className="flex justify-between w-full items-center h-full">
          <div className="flex gap-10 items-center h-full">
            <div className="flex items-center gap-2 h-full">
              <MobileSidebar />
              <Logo />
            </div>
            <div className="max-md:hidden flex gap-5 items-center">
              {navData.map((data, i) => {
                return (
                  <Link
                    href={data.link}
                    key={i}
                    className={`${
                      pathname === data.link ||
                      pathname.startsWith(data.link + `/`)
                        ? "text-foreground underline tracking-widest font-semibold"
                        : "text-foreground/65 tracking-normal font-normal"
                    } uppercase hover:text-foreground/50 transition-all ease-in-out text-xs`}
                  >
                    {data.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <ThemeToggle />
            <AvatarComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
