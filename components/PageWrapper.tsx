"use client";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className={`max-md:w-full ml-auto p-2 md:px-5 md:pt-10 duration-300 transition-all ease-in-out max-w-6xl mx-auto min-h-screen`}
    >
      {children}
    </main>
  );
};

export default PageWrapper;
