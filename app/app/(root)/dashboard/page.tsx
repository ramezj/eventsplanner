import { getServerSession } from "@/lib/get-session"

export default async function Page() {
    const session = await getServerSession();
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
            My Events
        </h1>
        </div>
        </div>
    )
}