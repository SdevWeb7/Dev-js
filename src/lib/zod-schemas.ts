import {z} from "zod";


export const authSchema = z.object({
    email: z.string().trim().email().max(100, 'Email must be at most 100 characters'),
    password: z.string().trim().min(8, 'Password must be at least 8 characters').max(100, 'Password must be at most 100 characters')
});

export type TAuthForm = z.infer<typeof authSchema>;



const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];
export const courseSchema = z.object({
    category: z.string().trim().min(3, 'Categorie incorrect').max(100, 'Categorie incorrect'),
    title: z.string().trim().min(3, 'Le titre doit avoir au moins 3 caractères').max(100, 'Le titre doit avoir au maximum 100 caractères'),
    description: z.string().trim().min(3, 'La description doit faire minimum 3 caractères').max(100, 'la description doit faire maximum 100 caractères'),
    contentIntro: z.string().min(10, 'Le contenu doit avoir au moins 10 caractères').max(20000, 'Le contenu ne doit pas dépasser 20000 caractères'),
    contentCours: z.string().min(10, 'Le contenu doit avoir au moins 10 caractères').max(20000, 'Le contenu ne doit pas dépasser 20000 caractères'),
    contentExemple: z.string().min(10, 'Le contenu doit avoir au moins 10 caractères').max(20000, 'Le contenu ne doit pas dépasser 20000 caractères'),
    contentExercice: z.string().min(10, 'Le contenu doit avoir au moins 10 caractères').max(20000, 'Le contenu ne doit pas dépasser 20000 caractères'),
    contentPenseBete: z.string().min(10, 'Le contenu doit avoir au moins 10 caractères').max(20000, 'Le contenu ne doit pas dépasser 20000 caractères'),
    contentMoreRessources: z.string().min(10, 'Le contenu doit avoir au moins 10 caractères').max(200, 'Le contenu ne doit pas dépasser 200 caractères'),
    duration: z.coerce.number().int().min(1, 'La durée doit être au moins 1h').max(100, 'La durée doit être au maximum 100h'),
    logoImg: z
        .any()
        .nullable()
        .refine((files) => {
            return files?.[0]?.size <= MAX_FILE_SIZE;
        }, `L'image est trop volumineuse.`)
        .refine(
            (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
            "Format supportés : .jpg, .jpeg, .png et .webp"
        ),
});

export type TCourseForm = z.infer<typeof courseSchema>;

export const courseSchemaValidator = z.object({
    category: z.string().trim().min(3, 'Categorie incorrect').max(100, 'Categorie incorrect'),
    title: z.string().trim().min(3, 'Le titre doit avoir au moins 3 caractères').max(100, 'Le titre doit avoir au maximum 100 caractères'),
    description: z.string().trim().min(3, 'La description doit faire minimum 3 caractères').max(100, 'la description doit faire maximum 100 caractères'),
    contentIntro: z.string().min(10, 'Le contenu doit avoir au moins 10 caractères').max(20000, 'Le contenu ne doit pas dépasser 20000 caractères'),
    contentCours: z.string().min(10, 'Le contenu doit avoir au moins 10 caractères').max(20000, 'Le contenu ne doit pas dépasser 20000 caractères'),
    contentExemple: z.string().min(10, 'Le contenu doit avoir au moins 10 caractères').max(20000, 'Le contenu ne doit pas dépasser 20000 caractères'),
    contentExercice: z.string().min(10, 'Le contenu doit avoir au moins 10 caractères').max(20000, 'Le contenu ne doit pas dépasser 20000 caractères'),
    contentPenseBete: z.string().min(10, 'Le contenu doit avoir au moins 10 caractères').max(20000, 'Le contenu ne doit pas dépasser 20000 caractères'),
    contentMoreRessources: z.string().min(10, 'Le contenu doit avoir au moins 10 caractères').max(20000, 'Le contenu ne doit pas dépasser 20000 caractères'),
    duration: z.coerce.number().int().min(1, 'La durée doit être au moins 1h').max(100, 'La durée doit être au maximum 100h'),
    logoImgSrc: z.string(),
    logoImg: z.any().nullable(),
    slug: z.string().min(3, 'Slug incorrect').max(100, 'Slug incorrect'),
});

export type TCourseFormValidator = z.infer<typeof courseSchemaValidator>;
