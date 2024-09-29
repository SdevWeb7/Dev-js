"use server";

import path from "node:path";
import * as fs from "node:fs/promises";
import {z} from "zod";
import matter from "gray-matter";


const coursesDirectory = path.join(process.cwd(), 'src/app/courses')

const CourseDatasSchemas = z.object({
    category: z.string(),
    slug: z.string(),
    title: z.string(),
    type: z.string(),
    fileName: z.string(),
    description: z.string(),
    logoImgSrc: z.string(),
    duration: z.string(),
    published: z.boolean(),
});
export type CourseDatas = z.infer<typeof CourseDatasSchemas>;
export type Course = z.infer<typeof CourseDatasSchemas> & {
    content: string;
};

export const getCoursesListByCategory = async (category: string) : Promise<CourseDatas[]> => {
    const files = await fs.readdir(path.join(coursesDirectory, category));

    const courses: CourseDatas[] = [];

    try {
        for await (const courseName of files) {
            const isFolder = await fs.lstat(path.join(coursesDirectory, category, courseName));
            if (isFolder.isDirectory()) {
                const course = await fs.readFile(path.join(coursesDirectory, category, courseName, '1-introduction.mdx'), 'utf-8');
                const frontMatter = matter(course);

                const safeData = CourseDatasSchemas.safeParse(frontMatter.data);
                if (safeData.success && (process.env.NODE_ENV === 'development' || safeData.data.published )) {
                    courses.push({
                        ...safeData.data
                    });
                } else console.error(safeData.error);
            };
        };

        return courses;
    } catch (e) {
        console.log(e);
        return [];
    }

}

export const getCoursesListByCategoryAndSlug = async (category: string, slug: string): Promise<String[]> => {

    try {
        const filesNames = await fs.readdir(path.join(coursesDirectory, category, slug));
        if (!filesNames) {
            return [];
        }
        return filesNames;
    } catch (e) {
        console.log(e);
        return [];
    }

}

export const getCourseByCategorySlugAndType = async (category: string, slug: string, type: string) : Promise<Course | null> => {
    let suffix = "";
    switch (type) {
        case "introduction":
            suffix = "1-";
            break;
        case "cours":
            suffix = "2-";
            break;
        case "exercices":
            suffix = "3-";
            break;
        case "ressources":
            suffix = "4-";
            break;
    }
    try{
        const fullPath = path.join(coursesDirectory, category, slug, suffix + type + '.mdx');
        const fileContent = await fs.readFile(fullPath, 'utf-8');
        const frontMatter = matter(fileContent);

        const safeData = CourseDatasSchemas.safeParse(frontMatter.data);

        if (safeData.success && (process.env.NODE_ENV === 'development' || safeData.data.published )) {
            return {...safeData.data, content: frontMatter.content};
        } else return null;
    }catch(e) {
        console.log(e)
        return null;
    }
}
