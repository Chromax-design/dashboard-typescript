import PageWrapper from "@/components/PageWrapper"
import TopBar from "@/components/TopBar"
import { SidebarProvider } from "@/components/ui/sidebar"


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <TopBar />
            <PageWrapper>
                {children}
            </PageWrapper>
        </SidebarProvider>
    )
}

export default layout