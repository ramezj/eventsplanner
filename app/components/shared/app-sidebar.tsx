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
import { Calendar, Home, Inbox, Search, Settings, } from "lucide-react"
import { UserDropdown } from "./user-dropdown"
import { getServerSession } from "@/lib/get-session"
import { User } from "@/lib/generated/prisma"

const items = [{ title: "Events", url: "#", icon: Calendar }]

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
        <SidebarGroupLabel>Platform</SidebarGroupLabel>
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