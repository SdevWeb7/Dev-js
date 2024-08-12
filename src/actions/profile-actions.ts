"use server";

import {profileSchema, TProfileForm} from "@/lib/zod-schemas";
import prisma from "@/lib/db";
import {auth} from "@/lib/auth-no-edge";
import {revalidatePath} from "next/cache";
import {is} from "unist-util-is";


export async function updateProfilUser({data} : {data: TProfileForm}) {
    const safeData = profileSchema.safeParse(data);
    if (!safeData.success) return { error: "Les données ne sont pas valides" };
    const session = await auth();
    if (!session) return { error: "Vous devez être connecté" };



    try {
        await prisma.user.update({
            where: {
                email: session.user.email as string
            },
            data: {
                ...safeData.data
            }
        });

    } catch (error) {
        return {error: "Une erreur est survenue…"};
    }

    return {success: "Le profil a bien été mis à jour"};
}


export const updateIsPublicProfil = async (isPublic: boolean) => {
    const session = await auth();
    if (!session) return { error: "Vous devez être connecté" };

    try {
        await prisma.user.update({
            where: { email: session.user.email as string },
            data: { isProfilPublic: isPublic }
        });

    } catch (error) {
        return {error: "Une erreur est survenue…"};
    }
    console.log(isPublic);

    return {success: "Le profil a bien été mis à jour"};

}


export const pathRevalidator = async (path: string) => {
    revalidatePath(path);
}