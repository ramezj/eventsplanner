import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { UserDropdown } from "./user-dropdown"
import { getServerSession } from "@/lib/get-session"
import { User } from "@/lib/generated/prisma"

const items = [{ title: "Home",url: "#", icon: Home }, {title: "Inbox", url: "#", icon: Inbox }, 
    { title: "Calendar", url: "#", icon: Calendar }, { title: "Search", url: "#", icon: Search},
    { title: "Settings", url: "#", icon: Settings }]

export async function AppSidebar() {
    const session = await getServerSession();
    const user = session?.user;
    if (!user) return null;
  return (
    <Sidebar>
    <SidebarHeader>
     <UserDropdown user={user as User} />
     </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}