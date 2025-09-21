"use client";

import { User } from "@/lib/generated/prisma";
import { authClient } from "@/lib/auth-client";
import { LogOutIcon, ShieldIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface UserDropdownProps {
  user: User;
}

export function UserDropdown({ user }: UserDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Button variant="outline" className="w-full">
        {user.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="dropdown-width-full">
        <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/profile">
            <UserIcon className="size-4" /> <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <SignOutItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function SignOutItem() {
  const router = useRouter();
  async function handleSignOut() {
    const { error } = await authClient.signOut();
    if (error) {
      toast.error(error.message || "Something went wrong");
    } else {
      toast.success("Signed out successfully");
      router.push("/sign-in");
    }
  }
  return (
    <DropdownMenuItem onClick={handleSignOut}>
      <LogOutIcon className="size-4" /> <span>Sign out</span>
    </DropdownMenuItem>
  );
}