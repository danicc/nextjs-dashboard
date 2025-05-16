import SideNav from "@/app/ui/dashboard/sidenav";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// export const experimental_ppr = true;


export default function Layout({children}: {children: React.ReactNode}){
    return (
        <SidebarProvider>
            <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                <div className="w-full flex-none md:w-64">
                    <SideNav />
                </div>
                <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                    <SidebarTrigger />
                    {children}
                </div>
            </div>
        </SidebarProvider>
    )
}