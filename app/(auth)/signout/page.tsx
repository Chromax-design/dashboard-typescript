"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const page = () => {
  const handleClick = () => {
    signOut({ callbackUrl: "/login" });
  };
  return (
    <section className="w-full flex flex-col gap-4 items-center">
      <h1 className="text-4xl text-center font-semibold">
        Are you sure you wanna log out?
      </h1>
      <Button className=" w-fit capitalize" onClick={handleClick}>
        log me out!
      </Button>
    </section>
  );
};

export default page;
