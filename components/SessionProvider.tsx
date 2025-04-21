"use client";

import { SessionProvider } from "next-auth/react";

const MySessionProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default MySessionProvider;
