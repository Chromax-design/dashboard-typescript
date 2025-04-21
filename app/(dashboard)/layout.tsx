import PageWrapper from "@/components/PageWrapper";
import TopBar from "@/components/TopBar";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-neutral-50">
      <TopBar />
      <PageWrapper>{children}</PageWrapper>
      <footer className="mt-10 text-center text-gray-500 text-sm p-4">
        Developed and designed by Cromax. Copyright &copy;{" "}
        {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default layout;
