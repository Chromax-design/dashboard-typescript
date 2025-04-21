import { auth } from "@/auth";
import PageWrapper from "@/components/PageWrapper";
import MySessionProvider from "@/components/SessionProvider";
import TopBar from "@/components/TopBar";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return (
    <MySessionProvider>
      <div className=" bg-neutral-50">
        <TopBar />
        <PageWrapper>{children}</PageWrapper>
        <footer className="mt-10 text-center text-gray-500 text-sm p-4">
          Developed and designed by Cromax. Copyright &copy;{" "}
          {new Date().getFullYear()}
        </footer>
      </div>
    </MySessionProvider>
  );
};

export default layout;
