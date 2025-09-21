import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/shared/app-sidebar"
import { getServerSession } from "@/lib/get-session"
import LayoutNavigation from "@/components/shared/app-layout"
import { User } from "@/lib/generated/prisma"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession()
  if (!session?.user) {
    return <div>Please sign in to access the app.</div>
  }
  return (
    <LayoutNavigation 
    user={session.user as User}>
      <main className="p-5">
        {/* <SidebarTrigger /> */}
        {children}
      </main>
      </LayoutNavigation>
  )
}