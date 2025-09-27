import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/shared/app-sidebar"
import { getServerSession } from "@/lib/get-session"
import LayoutNavigation from "@/components/shared/app-layout"
import { Session } from "@/lib/auth-client"
import { redirect } from "next/navigation"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession()
  if (!session?.user) {
    redirect('/auth')
  }
  return (
    <LayoutNavigation 
    session={session as Session}>
      <main className="p-5">
        {/* <SidebarTrigger /> */}
        {children}
      </main>
      </LayoutNavigation>
  )
}