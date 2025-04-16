import TopBar from "@/components/TopBar"
import { SidebarProvider } from "@/components/ui/sidebar"


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <main className="grid grid-cols-12">
                <TopBar />
                {children}
            </main>
        </SidebarProvider>
    )
}

export default layout