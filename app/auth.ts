import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@/lib/generated/prisma"
import { customSession } from "better-auth/plugins/custom-session";

const prisma = new PrismaClient();
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql"
    }),
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }
    },
    // user: {
    //     additionalFields: {
    //         currentEventId: {
    //             type: "string",
    //             input: false
    //         },
    //         currentEvent: {
    //             type: "string",
    //             input: false
    //         }
    //     }
    // }
    plugins: [
        customSession(async({user, session}) => {
            const currentEvent = await prisma.user.findFirst({
                where: {
                    id: user.id
                },
                include: {
                    currentEvent: true
                }
            })
            return {
                user: {
                    ...user,
                    currentEvent: currentEvent?.currentEvent
                }
            }
        })
    ]
});
