import UnsplashComponent from "@/components/UnsplashComponent"

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="grid grid-cols-12 w-full gap-0 max-sm:pt-20">
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex justify-center flex-col items-center w-full p-6 md:p-10 space-y-4">
                {children}
            </div>
            <UnsplashComponent />
        </main>
    )
}

export default layout