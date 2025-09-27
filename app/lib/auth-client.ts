import { createAuthClient } from "better-auth/react"
import {customSessionClient} from "better-auth/client/plugins"
import { auth } from "@/auth"

export const authClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    plugins: [customSessionClient<typeof auth>()]
})
export const { signIn, signUp, useSession, signOut } = createAuthClient()
export type Session = typeof authClient.$Infer.Session