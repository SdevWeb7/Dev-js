"use server";

import {courseSchema, TCourseForm} from "@/lib/zod-schemas";
import {auth} from "@/lib/auth-no-edge";
import prisma from "@/lib/db";
import {revalidatePath} from "next/cache";

export const addCourse = async (formData:  TCourseForm) => {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const safeFormData = courseSchema.safeParse(formData);
    if (!safeFormData.success) return ({ error: "Données invalides" });

    try {
        await prisma.course.create({
            data: safeFormData.data
        });
    } catch (error) {
        return { error: "Il y a eu un problème dans la création du cours." };
    }

    revalidatePath("/admin");
    return {success: "Le cours a bien été ajouté"};
}

export const editCourse = async (id: string, formData: TCourseForm) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    if (typeof id !== "string") return ({ error: "Données invalides" });

    const safeFormData = courseSchema.safeParse(formData);
    if (!safeFormData.success) return ({ error: "Données invalides" });

    try {
        await prisma.course.update({
            where: {
                id: id
            },
            data: safeFormData.data
        });
    } catch (error) {
        return { error: "Il y a eu un problème dans la modification du cours." };
    }
    revalidatePath("/admin");
    return {success: "Le cours a bien été modifié"};
}

export const deleteCourse = async (id: string) => {
    const session = await auth();
    if (!session) return { error: "Veuillez vous connecter." };
    if (!session?.user?.isAdmin) return { error: "Vous n'êtes pas autorisé à continuer." };

    try {
        await prisma.course.delete({
            where: {
                id: id
            }
        });
    } catch (error) {
        return { error: "Il y a eu un problème dans la suppression du cours." };
    }

    revalidatePath("/admin");
    return {success: "Le cours a bien été supprimé"};
}