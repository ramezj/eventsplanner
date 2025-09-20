"use client"
import { auth } from "@/auth"
import { authClient } from "@/lib/auth-client"
import { Button } from "../ui/button"


export default function Authenticate() {
    const handleGoogleSignIn = async () => {
        console.log("signing in with google...")
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "http://localhost:3000",
        })
    }
    return (
        <>
        <Button onClick={(() => {
            handleGoogleSignIn()
        })}>
            Authenticate
        </Button>
        </>
    )
}