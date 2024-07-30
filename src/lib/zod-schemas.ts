import {z} from "zod";


export const authSchema = z.object({
    email: z.string().trim().email().max(100, 'Email must be at most 100 characters'),
    password: z.string().trim().min(8, 'Password must be at least 8 characters').max(100, 'Password must be at most 100 characters')
});

export type TAuthForm = z.infer<typeof authSchema>;


export const courseSchema = z.object({
    type: z.string().trim().min(3, 'Type incorrect').max(100, 'Type incorrect'),
    category: z.string().trim().min(3, 'Categorie incorrect').max(100, 'Categorie incorrect'),
    title: z.string().trim().min(3, 'Le titre doit avoir au moins 3 caractères').max(100, 'Le titre doit avoir au maximum 100 caractères'),
    description: z.string().trim().min(3, 'La description doit faire minimum 3 caractères').max(100, 'la description doit faire maximum 100 caractères'),
    content: z.string().min(10, 'Le contenu doit avoir au moins 10 caractères').max(200, 'Le contenu ne doit pas dépasser 200 caractères'),
    duration: z.coerce.number().int().min(1, 'La durée doit être au moins 1h').max(100, 'La durée doit être au maximum 100h'),
    logoImgSrc: z.string().trim().min(3, 'Image invalide').max(100, 'Image invalide.'),
});

export type TCourseForm = z.infer<typeof courseSchema>;
