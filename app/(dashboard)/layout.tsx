import PageWrapper from "@/components/PageWrapper"
import TopBar from "@/components/TopBar"
import { SidebarProvider } from "@/components/ui/sidebar"


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <TopBar />
            <PageWrapper>
                {children}
                <footer className="mt-10 text-center text-gray-500 text-sm">Developed and designed by Cromax. Copyright &copy; {new Date().getFullYear()}</footer>
            </PageWrapper>
        </SidebarProvider>
    )
}

export default layout