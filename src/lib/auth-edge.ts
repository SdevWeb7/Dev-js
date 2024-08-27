import { NextAuthConfig } from "next-auth";
import prisma from "./db";

export const nextAuthEdgeConfig = {
    pages: {
        signIn: "/auth/login",
    },
    callbacks: {
        authorized: ({ auth, request }) => {
            // runs on every request with middleware
            // const protectedPaths = ["react", "next-js"];
            const protectedPaths = [""];
            const isTryingToAccessProtectedPath = protectedPaths.some(path =>
                request.nextUrl.pathname.includes(path)
            );
            const authenticatedPaths = ["profil, communaute"];
            const isTryingToAccessAuthenticatedPath = authenticatedPaths.some(path =>
                request.nextUrl.pathname.includes(path)
            );
            const isTryingToAccessAuthPath = request.nextUrl.pathname.includes("/auth");
            const isTryingToAccessAdminPath = request.nextUrl.pathname.includes("/admin");
            const isTryingToAccessPaiementPath = request.nextUrl.pathname.includes("/paiement");
            const isLoggedIn = Boolean(auth?.user?.email);
            const userHasAccess = auth?.user?.hasAccess;
            const isAdmin = auth?.user?.isAdmin;

            if (!isAdmin && isTryingToAccessAdminPath) {
                return false;
            }
            if (!isLoggedIn && (isTryingToAccessAuthenticatedPath || isTryingToAccessProtectedPath)) {
                return Response.redirect(new URL('/auth/login?mustConnect=true', request.nextUrl));
            }
            if (isLoggedIn && isTryingToAccessAuthPath) {
                return Response.redirect(new URL('/', request.nextUrl));
            }
            if (isLoggedIn && !userHasAccess && isTryingToAccessProtectedPath) {
                return Response.redirect(new URL('/paiement', request.nextUrl));
            }
            if (isLoggedIn && userHasAccess && isTryingToAccessPaiementPath) {
                return Response.redirect(new URL('/', request.nextUrl));
            }
            if (!isLoggedIn && isTryingToAccessPaiementPath) {
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
                token.firstname = user.firstname;
                token.lastname = user.lastname;
                token.avatarImgSrc = user.avatarImgSrc;
                token.urlLinkedIn = user.urlLinkedIn;
                token.urlGithub = user.urlGithub;
                token.urlPortfolio = user.urlPortfolio;
                token.bio = user.bio;
                token.hoursLeft = user.hoursLeft;
                token.isProfilPublic = user.isProfilPublic;
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
                    token.hoursLeft = userFromDb.hoursLeft;
                    token.firstname = userFromDb.firstname;
                    token.lastname = userFromDb.lastname;
                    token.avatarImgSrc = userFromDb.avatarImgSrc;
                    token.urlLinkedIn = userFromDb.urlLinkedIn;
                    token.urlGithub = userFromDb.urlGithub;
                    token.urlPortfolio = userFromDb.urlPortfolio;
                    token.bio = userFromDb.bio;
                    token.isProfilPublic = userFromDb.isProfilPublic;
                }
            }

            return token;
        },
        session: ({ session, token }) => {
            session.user.id = token.userId;
            session.user.hasAccess = token.hasAccess;
            session.user.isAdmin = token.isAdmin;
            session.user.firstname = token.firstname;
            session.user.lastname = token.lastname;
            session.user.avatarImgSrc = token.avatarImgSrc;
            session.user.urlLinkedIn = token.urlLinkedIn;
            session.user.urlGithub = token.urlGithub;
            session.user.urlPortfolio = token.urlPortfolio;
            session.user.bio = token.bio;
            session.user.hoursLeft = token.hoursLeft;
            session.user.isProfilPublic = token.isProfilPublic;

            return session;
        }
    },
    providers: [],
} satisfies NextAuthConfig;
