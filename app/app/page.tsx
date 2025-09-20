import { Button } from "@/components/ui/button"
import Authenticate from "@/components/auth/authenticate"
import { auth } from "@/auth"
import { headers } from "next/headers"

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  return (
    <>
      {JSON.stringify(session)}
      <Authenticate />
    </>
  )
}
