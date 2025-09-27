import { CreateEventButton } from "@/components/shared/create-event";
import { Button } from "@/components/ui/button";
import { getServerSession } from "@/lib/get-session"
import { CreateEvent } from "@/server-actions/event/create-event";

export default async function Page() {
    const session = await getServerSession();
    console.log(session);
    if (!session?.user) { 
        return <div>Please sign in to access the dashboard.</div>
    }
    return (
        <div className="flex flex-col space-y-4">
        <div>
        <h1 className="font-bold text-3xl tracking-tight text-foreground">Dashboard</h1>
        </div>
        <div>
        <h1>
        {session.user.currentEvent?.name}
        </h1>
        <CreateEventButton />
        </div>
        </div>
    )
}