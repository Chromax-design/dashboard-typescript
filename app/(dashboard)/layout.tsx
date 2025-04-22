import { auth } from "@/auth";
import PageWrapper from "@/components/PageWrapper";
import { ThemeProvider } from "@/components/ThemeProvider";
import TopBar from "@/components/TopBar";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="bg-background">
        <TopBar />
        <PageWrapper>{children}</PageWrapper>
        <footer className="mt-10 text-center text-gray-500 text-sm p-4">
          Developed and designed by Cromax. Copyright &copy;{" "}
          {new Date().getFullYear()}
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default layout;
