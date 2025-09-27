import { CreateEventButton } from "@/components/shared/create-event";
import { Button } from "@/components/ui/button";
import { getServerSession } from "@/lib/get-session"
import { CreateEvent } from "@/server-actions/event/create-event";
import { redirect } from "next/navigation";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export default async function Page() {
    const session = await getServerSession();
    if (!session?.user) { 
        return redirect('/auth')
    }
    return (
        <>
        <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-3xl tracking-tight text-foreground">Dashboard</h1>
        <Button asChild variant={"outline"}>
        <Link target="_blank" href={`http://${session?.user.currentEvent?.slug}.${process.env.NEXT_PUBLIC_URL}`}>
        {/* <SquareArrowOutUpRight className="size-4" /> */}
        Preview Event
        </Link>
        </Button>
        </div>
        </>
    )
}