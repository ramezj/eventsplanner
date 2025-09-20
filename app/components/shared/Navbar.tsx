import codingInFlowLogo from "@/assets/coding_in_flow_logo.jpg";
// import { ModeToggle } from "@/components/mode-toggle";
// import { UserDropdown } from "@/components/user-dropdown";
import { getServerSession } from "@/lib/get-session";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { UserDropdown } from "./user-dropdown";
import { User } from "@/lib/generated/prisma";

export async function Navbar() {
  const session = await getServerSession();
  const user = session?.user;
  if (!user) return null;
  return (
    <header className="bg-background border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 font-semibold"
        >
          Better-Auth Tutorial
        </Link>
        <div className="flex items-center gap-2">
        <UserDropdown user={user as User} />
          {/* <ModeToggle />
          <UserDropdown user={user} /> */}
        </div>
      </div>
    </header>
  );
}