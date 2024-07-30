"use server";

import {courseSchema} from "@/lib/zod-schemas";


export const addCourse = async (prevState: unknown, formData:  unknown) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    if (!(formData instanceof FormData)) return ({ message: "Invalid form data." });

    console.log(Object.fromEntries(formData.entries()));
    const safeFormData = courseSchema.safeParse(Object.fromEntries(formData.entries()));
    console.log(safeFormData.data);
    if (!safeFormData.success) return ({ message: "Invalid form data." });

    return {message: "Course added successfully"};
}