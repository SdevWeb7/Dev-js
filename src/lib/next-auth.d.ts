import { User } from "next-auth";

declare module "next-auth" {
    interface User {
        hasAccess: boolean;
        email: string;
        isAdmin: boolean;
        firstname: string;
        lastname: string;
        avatarImgSrc: string;
        urlLinkedIn: string;
        urlGithub: string;
        urlPortfolio: string;
        bio: string;
    }

    interface Session {
        user: User & {
            id: string;
        };
    }
}

declare module "@auth/core/jwt" {
    interface JWT {
        userId: string;
        email: string;
        hasAccess: boolean;
        isAdmin: boolean;
        firstname: string;
        lastname: string;
        avatarImgSrc: string;
        urlLinkedIn: string;
        urlGithub: string;
        urlPortfolio: string;
        bio: string;
    }
}