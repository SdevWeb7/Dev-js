import { NextAuthConfig } from "next-auth";
import prisma from "./db";

export const nextAuthEdgeConfig = {
    pages: {
        signIn: "/auth/login",
    },
    callbacks: {
        authorized: ({ auth, request }) => {
            // runs on every request with middleware
            const isLoggedIn = Boolean(auth?.user);
            const isTryingToAccessProtectedPath = request.nextUrl.pathname.includes("/protected");
            const isTryingToAccessAuthPath = request.nextUrl.pathname.includes("/auth");

            if ((!isLoggedIn || !auth?.user.hasAccess) && isTryingToAccessProtectedPath) {
                return false;
            }
            if (isLoggedIn && isTryingToAccessAuthPath) {
                return Response.redirect(new URL('/', request.nextUrl));
            }
            return true;
        },
        jwt: async ({ token, user, trigger }) => {
            if (user) {
                // on sign in
                token.userId = user.id as string;
                token.email = user.email!;
                token.hasAccess = user.hasAccess;
            }

            if (trigger === "update") {
                // on every request
                const userFromDb = await prisma.user.findUnique({
                    where: {
                        email: token.email,
                    },
                });
                if (userFromDb) {
                    token.hasAccess = userFromDb.hasAccess;
                }
            }

            return token;
        },
        session: ({ session, token }) => {
            session.user.id = token.userId;
            session.user.hasAccess = token.hasAccess;

            return session;
        },
    },
    providers: [],
} satisfies NextAuthConfig;