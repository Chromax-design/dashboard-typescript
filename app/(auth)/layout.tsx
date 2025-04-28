import { auth } from "@/auth";
import UnsplashComponent from "@/components/UnsplashComponent";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }
  return (
    <main className="sm:grid sm:grid-cols-12 w-full gap-0 max-sm:p-20 max-sm:min-h-screen max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
      <div className="max-sm:h-full sm:col-span-6 lg:col-span-4 flex justify-center flex-col items-center w-full p-6 md:p-10 space-y-4">
        {children}
      </div>
      <UnsplashComponent />
    </main>
  );
};

export default layout;
