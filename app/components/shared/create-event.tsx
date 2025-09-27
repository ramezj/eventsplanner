"use client"
import { useState } from "react"
import { Button } from "../ui/button"
import { CreateEvent } from "@/server-actions/event/create-event"
import { Loader } from "lucide-react";
export function CreateEventButton() {
    const [ loading, setLoading ] = useState<boolean>(false);
    const createUserEvent = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setLoading(true);
        const response = await CreateEvent();
        setLoading(false);
    }
    return (
        <>
        <Button onClick={((e) => {
            createUserEvent(e)
        })}>
        {
            loading
            ?
            <><Loader className="animate animate-spin" /></>
            : 
            <>
            Create Event
            </>
        }
        </Button>
        </>
    )
}