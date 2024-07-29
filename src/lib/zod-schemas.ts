import {z} from "zod";


export const authSchema = z.object({
    email: z.string().trim().email().max(100, 'Email must be at most 100 characters'),
    password: z.string().trim().min(8, 'Password must be at least 8 characters').max(100, 'Password must be at most 100 characters')
});

export type TAuthForm = z.infer<typeof authSchema>;


export const courseSchema = z.object({
    type: z.string().trim().min(3, 'Type must be at least 3 characters').max(100, 'Type must be at most 100 characters'),
    category: z.string().trim().min(3, 'Category must be at least 3 characters').max(100, 'Category must be at most 100 characters'),
    title: z.string().trim().min(3, 'Title must be at least 3 characters').max(100, 'Title must be at most 100 characters'),
    description: z.string().trim().min(3, 'Description must be at least 3 characters').max(1000, 'Description must be at most 1000 characters'),
    content: z.number().int().min(0, 'Price must be at least 0').max(10000, 'Price must be at most 10000'),
    duration: z.number().int().min(0, 'Duration must be at least 0').max(1000, 'Duration must be at most 1000'),
    logoImgSrc: z.string().trim().min(3, 'Level must be at least 3 characters').max(100, 'Level must be at most 100 characters'),
});
