"use server"
import { getServerSession } from "@/lib/get-session"
import { get } from "http"
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export async function CreateEvent() {
    const session = await getServerSession();
    if(!session) {
        return redirect("/auth");
    }
    try {
        const event = await prisma.event.create({
            data: {
                name:"First Event",
                slug: "test_event",
                users: {
                    create: {
                        userId: session.user.id,
                        role: "owner"
                    }
                }
            }
        })
        const setCurrentEvent = await prisma.user.update({
            where: {
                id: session.user.id
            },
            data: {
                currentEventId: event.id,
            }
        })
        console.log(event);
        return { event }
    } catch (error) {
        return { error }
    }
}