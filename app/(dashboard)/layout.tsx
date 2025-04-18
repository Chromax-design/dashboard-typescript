import PageWrapper from "@/components/PageWrapper"
import TopBar from "@/components/TopBar"


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="">
            <TopBar />
            <PageWrapper>
                {children}
                <footer className="mt-10 text-center text-gray-500 text-sm">Developed and designed by Cromax. Copyright &copy; {new Date().getFullYear()}</footer>
            </PageWrapper>
        </div>
    )
}

export default layout