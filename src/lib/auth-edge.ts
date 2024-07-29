import { NextAuthConfig } from "next-auth";
import prisma from "./db";

export const nextAuthEdgeConfig = {
    pages: {
        signIn: "/auth/login",
    },
    callbacks: {
        authorized: ({ auth, request }) => {
            // runs on every request with middleware
            const protectedPaths = ["react", "next-js"];
            const isTryingToAccessProtectedPath = protectedPaths.some(path =>
                request.nextUrl.pathname.includes(path)
            );
            const authenticatedPaths = ["profil", "aide"];
            const isTryingToAccessAuthenticatedPath = authenticatedPaths.some(path =>
                request.nextUrl.pathname.includes(path)
            );
            const isTryingToAccessAuthPath = request.nextUrl.pathname.includes("/auth");
            const isTryingToAccessAdminPath = request.nextUrl.pathname.includes("/admin");
            const isLoggedIn = Boolean(auth?.user);
            const isAdmin = auth?.user.isAdmin;

            if (!isAdmin && isTryingToAccessAdminPath) {
                return false;
            }
            if ((!isLoggedIn || !auth?.user.hasAccess) && isTryingToAccessProtectedPath) {
                return Response.redirect(new URL('/paiement', request.nextUrl));
            }
            if (isLoggedIn && isTryingToAccessAuthPath) {
                return Response.redirect(new URL('/', request.nextUrl));
            }
            if (!isLoggedIn && isTryingToAccessAuthenticatedPath) {
                return Response.redirect(new URL('/auth/login', request.nextUrl));
            }
            return true;
        },
        jwt: async ({ token, user, trigger }) => {
            if (user) {
                // on sign in
                token.userId = user.id as string;
                token.email = user.email!;
                token.hasAccess = user.hasAccess;
                token.isAdmin = user.isAdmin;
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
            session.user.isAdmin = token.isAdmin;

            return session;
        },
        async redirect({ url, baseUrl }) {
            return process.env.CANONICAL_URL+"/?successLogin=true";
        }
    },
    providers: [],
} satisfies NextAuthConfig;