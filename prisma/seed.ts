// import { PrismaClient } from "@prisma/client";
//
//
// const prisma = new PrismaClient();
//
// const courses = [
//     {
//         type: "cours",
//         category: "[category]",
//         title: "git",
//         description: "Apprendre le versioning",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur git"
//     },
//     {
//         type: "cours",
//         category: "[category]",
//         title: "http",
//         description: "Comprendre les échanges client/server",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur http"
//     },
//     {
//         type: "cours",
//         category: "[category]",
//         title: "ide",
//         description: "Paramétrer et utiliser un IDE",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur IDE"
//     },
//     {
//         type: "cours",
//         category: "[category]",
//         title: "bdd",
//         description: "Apprendre le fonctionemment d'une base de données",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur BDD"
//     },
//     {
//         type: "cours",
//         category: "html-css",
//         title: "[category]",
//         description: "Apprendre le versioning",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur git"
//     },
//     {
//         type: "cours",
//         category: "html-css",
//         title: "[category]",
//         description: "Découverte du HTML",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur html css"
//     },
//     {
//         type: "cours",
//         category: "html-css",
//         title: "formulaires",
//         description: "Apprendre le versioning",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur formulaires"
//     },
//     {
//         type: "cours",
//         category: "html-css",
//         title: "Syntaxe Css",
//         description: "Decouverte du Css",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur la syntaxe css"
//     },
//     {
//         type: "cours",
//         category: "html-css",
//         title: "flexbox",
//         description: "Les flexbox en CSS",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur flexbox"
//     },
//     {
//         type: "cours",
//         category: "javascript-react",
//         title: "[category]",
//         description: "Les bases du Javascript",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur Javascript"
//     },
//     {
//         type: "cours",
//         category: "javascript-react",
//         title: "Le fonctionnement",
//         description: "Les bases de React",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur React"
//     },
//     {
//         type: "cours",
//         category: "javascript-react",
//         title: "React - Les hooks",
//         description: "Les bases de React",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur les hooks"
//     },
//     {
//         type: "cours",
//         category: "next-js",
//         title: "[category]",
//         description: "Les bases de Next.js",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur nextjs"
//     },
//     {
//         type: "cours",
//         category: "next-js",
//         title: "typescript-react",
//         description: "Les bases deTyspescript en React",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur nextjs"
//     },
//     {
//         type: "cours",
//         category: "next-js",
//         title: "server-client-components",
//         description: "Comprendre les composants server/client",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur nextjs"
//     },
//     {
//         type: "cours",
//         category: "next-js",
//         title: "Server actions",
//         description: "Les bases des servers actions",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur nextjs"
//     },
//     {
//         type: "exercice",
//         category: "[category]",
//         title: "git",
//         description: "Apprendre le versioning",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur git"
//     },
//     {
//         type: "exercice",
//         category: "[category]",
//         title: "http",
//         description: "Comprendre les échanges client/server",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur http"
//     },
//     {
//         type: "exercice",
//         category: "[category]",
//         title: "ide",
//         description: "Paramétrer et utiliser un IDE",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur IDE"
//     },
//     {
//         type: "exercice",
//         category: "[category]",
//         title: "bdd",
//         description: "Apprendre le fonctionemment d'une base de données",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur BDD"
//     },
//     {
//         type: "exercice",
//         category: "html-css",
//         title: "[category]",
//         description: "Apprendre le versioning",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur git"
//     },
//     {
//         type: "exercice",
//         category: "html-css",
//         title: "[category]",
//         description: "Découverte du HTML",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur html css"
//     },
//     {
//         type: "exercice",
//         category: "html-css",
//         title: "formulaires",
//         description: "Apprendre le versioning",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur formulaires"
//     },
//     {
//         type: "exercice",
//         category: "html-css",
//         title: "Syntaxe Css",
//         description: "Decouverte du Css",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur la syntaxe css"
//     },
//     {
//         type: "exercice",
//         category: "html-css",
//         title: "flexbox",
//         description: "Les flexbox en CSS",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur flexbox"
//     },
//     {
//         type: "exercice",
//         category: "javascript-react",
//         title: "[category]",
//         description: "Les bases du Javascript",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur Javascript"
//     },
//     {
//         type: "exercice",
//         category: "javascript-react",
//         title: "Le fonctionnement",
//         description: "Les bases de React",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur React"
//     },
//     {
//         type: "exercice",
//         category: "javascript-react",
//         title: "React - Les hooks",
//         description: "Les bases de React",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur les hooks"
//     },
//     {
//         type: "exercice",
//         category: "next-js",
//         title: "[category]",
//         description: "Les bases de Next.js",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur nextjs"
//     },
//     {
//         type: "exercice",
//         category: "next-js",
//         title: "typescript-react",
//         description: "Les bases deTyspescript en React",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur nextjs"
//     },
//     {
//         type: "exercice",
//         category: "next-js",
//         title: "server-client-components",
//         description: "Comprendre les composants server/client",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur nextjs"
//     },
//     {
//         type: "exercice",
//         category: "next-js",
//         title: "Server actions",
//         description: "Les bases des servers actions",
//         logoImgSrc: "/git_image.png",
//         duration: 5,
//         content: "Ceci est un cours sur nextjs"
//     },
// ];
//
// async function main() {
//     console.log(`Start seeding ...`);
//
//     for (const course of courses) {
//         const result = await prisma.course.create({
//             data: course,
//         });
//         console.log(`Created pet with id: ${result.id}`);
//     }
//
//     console.log(`Seeding finished.`);
// }
//
// main()
//     .then(async () => {
//         await prisma.$disconnect();
//     })
//     .catch(async (e) => {
//         console.error(e);
//         await prisma.$disconnect();
//         process.exit(1);
//     });