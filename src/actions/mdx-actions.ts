"use server";

import path from "path";
import fs from "fs";
// import matter from "gray-matter";
// import {compileMDX} from "next-mdx-remote/rsc";


const mdxFolderPath = path.join(process.cwd(), 'src', 'app', "cours", "mdx")


export const getCourseMdxContent = async (slug : string) => {
    const file = fs.readFileSync(path.join(mdxFolderPath, `${slug}.mdx`), 'utf8');
    return file;
}

export const getAllCoursesSlug = async () => {
    const files = fs.readdirSync(mdxFolderPath);
    const markdownCourses = files.filter((file) => file.endsWith('.mdx'));
    const slugs = markdownCourses.map((filename) => filename.replace('.mdx', ''));
    return slugs;
}

// export const getMetaDataMdxCourse = async (slug : string) => {
//     const file = fs.readFileSync(path.join(mdxFolderPath, `${slug}.mdx`), 'utf8');
//     const matterResult = matter(file);
//     return {
//         title2: matterResult.data.title
//     };
// }


// export const getMetaDataMdxCourse = async (slug : string) => {
//     const file = fs.readFileSync(path.join(mdxFolderPath, `${slug}.mdx`), 'utf8');
//     const { frontmatter, content } = await compileMDX({
//         source: file,
//         options: { parseFrontmatter: true }
//     });
//     return { meta: { ...frontmatter }, content2: content };
// }