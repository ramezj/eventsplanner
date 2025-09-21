'use client'

import Link from "next/link"
import { Home, Users, Banknote, Briefcase, Settings, Tags, User2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet"
import { redirect, usePathname } from "next/navigation"
import { Separator } from "../ui/separator"
import { User } from "@/lib/generated/prisma"
import { Session } from "@/lib/generated/prisma"
import { UserDropdown } from "./user-dropdown"
import { Menu } from "lucide-react"
// import { OrganizationsDropdown } from "./dropdown-organizations"
// import { DropdownAvatar } from "./dropdown-avatar"


export default function LayoutNavigation({ children, user }: { children: React.ReactNode; user: User }) {
  if(!user) {
    redirect('/');
  } 
  const path = usePathname();
    return (
      <div className="grid min-h-screen w-full md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr]">
        <div className="hidden border-r border-foreground/20 border-dashed dark:bg-black bg-white md:block">
          <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0 z-50 dark:bg-black bg-white">
            <div className="flex h-16 items-center border-b border-foreground/20 border-dashed dark:bg-black bg-white lg:h-16 text-center justify-center">
            <Link href="/" className="flex items-center z-50">
            <span className="text-2xl tracking-tight dark:text-white text-black font-extrabold">wegotwork</span>
            </Link>
            </div>
            <div className="flex-1 ">
              <nav className="grid items-start px-3 text-sm font-bold gap-2 mt-1">
                <Button asChild variant="ghost" className={` ${path.includes('/overview') ? "dark:bg-accent bg-gray-200" : ""} dark:hover:bg-accent hover:bg-gray-200 font-bold !text-start justify-start w-full rounded-none`}>
                  <Link href='/overview'>
                  <Home className="size-4" />
                  Overview
                  </Link>
                </Button>
                <Button asChild variant="ghost" className={` ${path.includes('/jobs') ? "dark:bg-accent bg-gray-200" : ""} dark:hover:bg-accent hover:bg-gray-200 font-bold !text-start justify-start w-full rounded-none`}>
                  <Link href='/jobs'>
                  <Briefcase className="size-4" />
                  Jobs
                  </Link>
                </Button>
                <Button asChild variant="ghost" className={` ${path.includes('/applicants') ? "dark:bg-accent bg-gray-200" : ""} dark:hover:bg-accent hover:bg-gray-200 font-bold !text-start justify-start w-full rounded-none`}>
                <Link href='/applicants'>
                <Users className="h-4 w-4" />
                  Applicants
                </Link>
                </Button>
                <Button asChild variant="ghost" className={` ${path.includes('/categories') ? "dark:bg-accent bg-gray-200" : ""} dark:hover:bg-accent hover:bg-gray-200 font-bold !text-start justify-start w-full rounded-none`}>
                <Link href='/categories'>
                <Tags className="h-4 w-4" />
                  Categories
                </Link>
                </Button>
                <Button asChild variant="ghost" className={` ${path.includes('/billing') ? "dark:bg-accent bg-gray-200" : ""} dark:hover:bg-accent hover:bg-gray-200 font-bold !text-start justify-start w-full rounded-none`}>
                <Link href='/billing'>
                <Banknote className="h-4 w-4" />
                  Billing
                </Link>
                </Button>
                <Button asChild variant="ghost" className={` ${path.includes('/members') ? "dark:bg-accent bg-gray-200" : ""} dark:hover:bg-accent hover:bg-gray-200 font-bold !text-start justify-start w-full rounded-none`}>
                <Link href='/members'>
                <Users className="h-4 w-4" />
                  Members
                </Link>
                </Button>
                <Button asChild variant="ghost" className={` ${path.includes('/settings') ? "dark:bg-accent bg-gray-200" : ""} dark:hover:bg-accent hover:bg-gray-200 font-bold !text-start justify-start w-full rounded-none`}>
                <Link href='/settings'>
                <Settings className="h-4 w-4" />
                  Organization
                </Link>
                </Button>
                <Separator />
                <Button asChild variant="ghost" className={` ${path === '/me' ? "dark:bg-accent bg-gray-200" : ""} dark:hover:bg-accent hover:bg-gray-200 font-bold !text-start justify-start w-full rounded-none`}>
                <Link href='/settings'>
                <User2 className="h-4 w-4" />
                  Account
                </Link>
                </Button>
              </nav>
            </div>
            <div className="p-4 w-full flex gap-2">
              {/* <NavUser session={session} /> */}
              <UserDropdown user={user} />
              {/* <DropDownMenuUser session={session} /> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col sticky">
          <header className="z-50 flex h-16 items-center gap-4 border-b border-foreground/20 border-dashed dark:bg-black bg-white lg:h-16 sticky top-0">
            <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0 md:hidden text-foreground p-11 hover:bg-transparent rounded-none -ml-4">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
              <SheetContent side="left" className="flex flex-col dark:bg-black bg-white">
              <SheetTitle>
                <SheetClose asChild className="top-4">
                  <Link href="/" className="px-2 text-2xl tracking-tight text-black font-extrabold">
                  <span className="text-2xl tracking-tight text-foreground font-extrabold">wegotwork</span>
                  </Link>
                  </SheetClose>
                </SheetTitle>
                <nav className="grid gap-3 text-lg font-bold mt-1">
                  <SheetClose asChild>
                  <Button className="w-full justify-start text-left px-3 py-4" variant={"ghost"} asChild>
                  <Link href="/overview" className={` ${path.includes('/overview') ? "dark:bg-accent bg-gray-200" : ""} dark:hover:bg-accent hover:bg-gray-200 !font-bold w-full justify-start items-center gap-3 px-3 py-2 flex text-left rounded-none`}>
                  <Home className="size-4" />
                  Overview
                  </Link>
                  </Button>
                  </SheetClose>
                  <SheetClose asChild>
                  <Button className="w-full justify-start text-left px-3 py-2" variant={"ghost"} asChild> 
                  <Link href="/jobs" className={` ${path.includes('/jobs') ? "dark:bg-accent bg-gray-200" : ""} dark:hover:bg-accent hover:bg-gray-200 !font-bold w-full justify-start items-center gap-3 px-3 py-2 flex text-left rounded-none`}>
                  <Briefcase className="h-4 w-4" />
                  Jobs
                  </Link>
                  </Button>
                  </SheetClose>
                  <SheetClose asChild>
                  <Button className="w-full justify-start text-left px-3 py-2" variant={"ghost"} asChild>
                  <Link href="/applicants" className={` ${path.includes('/applicants') ? "dark:bg-accent bg-gray-200" : ""} dark:hover:bg-accent hover:bg-gray-200 !font-bold w-full justify-start items-center gap-3 px-3 py-2 flex text-left rounded-none`}>
                  <Users className="h-4 w-4" />
                  Applicants
                  </Link>
                  </Button>
                  </SheetClose>
                  <SheetClose asChild>
                  <Button className="w-full justify-start text-left px-3 py-2" variant={"ghost"} asChild>
                  <Link href="/categories" className={` ${path.includes('/categories') ? "dark:bg-accent bg-gray-200" : ""} dark:hover:bg-accent hover:bg-gray-200 !font-bold w-full justify-start items-center gap-3 px-3 py-2 flex text-left rounded-none`}>
                  <Tags className="h-4 w-4" />
                  Categories
                  </Link>
                  </Button>
                  </SheetClose>
                  <SheetClose asChild>
                  <Button className="w-full justify-start text-left px-3 py-2" variant={"ghost"} asChild>
                  <Link href="/billing" className={` ${path.includes('/billing') ? "dark:bg-accent bg-gray-200" : ""} dark:hover:bg-accent hover:bg-gray-200 !font-bold w-full justify-start items-center gap-3 px-3 py-2 flex text-left rounded-none`}>
                  <Banknote className="h-4 w-4" />
                    Billing
                  </Link>
                  </Button>
                  </SheetClose>
                  <Separator />
                  <SheetClose asChild>
                  <Button className="w-full justify-start text-left px-3 py-2" variant={"ghost"} asChild>
                  <Link href="/members" className={` ${path.includes('/members') ? "dark:bg-accent bg-gray-200" : ""} dark:hover:bg-accent hover:bg-gray-200 !font-bold w-full justify-start items-center gap-3 px-3 py-2 flex text-left rounded-none`}>
                  <Users className="h-4 w-4" />
                    Members
                  </Link>
                  </Button>
                  </SheetClose>
                  <SheetClose asChild>
                  <Button className="w-full justify-start text-left px-3 py-2" variant={"ghost"} asChild>
                  <Link href="/settings" className={` ${path.includes('/settings') ? "dark:bg-accent bg-gray-200" : ""} dark:hover:bg-accent hover:bg-gray-200 !font-bold w-full justify-start items-center gap-3 px-3 py-2 flex text-left rounded-none`}>
                  <Settings className="h-4 w-4" />
                    Settings
                  </Link>
                  </Button>
                  </SheetClose>
                </nav>
                <div className="w-full flex gap-2 pt-4 bottom-0 mt-auto">
                <UserDropdown user={user}/>
              </div>
              </SheetContent>
            </Sheet>
            <div className="ml-auto pr-4 lg:pr-6 flex gap-4">
              {/* {session.user.isPremium === false && 
              <>
              <Button className="rounded-none">Upgrade to Premium</Button>  
              </>
              } */}
              {/* <ModeToggle /> */}
              <UserDropdown user={user}/>
            </div> 
          </header>
            {children}
        </div>
      </div>
    )
}