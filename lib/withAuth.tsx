"use client";

import Preloader from "@/components/Preloader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";

const withAuth = (Component: FC) => {
  return () => {
    const router = useRouter();
    const { status } = useSession();
    const isAuthenticated = status === "authenticated";
    const isNotAuthenticated = status === "unauthenticated";
    const isLoading = status === "loading";

    useEffect(() => {
      if (isNotAuthenticated) {
        router.replace("/login");
      }
    }, [status, router]);

    if (isLoading) {
      return <Preloader />;
    }
    return isAuthenticated ? <Component /> : <></>;
  };
};

export default withAuth;
