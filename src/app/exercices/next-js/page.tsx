import {Course} from "@/lib/types";
import Main from "@/components/main";
import H1 from "@/components/h1";
import CourseCard from "@/components/course-card";
import gitImage from "@/../public/git_image.png"
import vsCodeImage from "@/../public/vs-code.jpg"


const nextExos: Course[] = [
    {
        title: "Next.js - Introduction",
        description: "Concepts de base de Next.js",
        image: gitImage,
        duration: 5,
        href: "/exercices/next-js/introduction"
    },
    {
        title: "Typescript et React",
        description: "Les bases de Typescript en React",
        image: vsCodeImage,
        duration: 2,
        href: "/exercices/next-js/typescript-react"
    },
    {
        title: "React - Server/Client composants",
        description: "Comment Next.js a révolutionné le développement web",
        image: vsCodeImage,
        duration: 2,
        href: "/exercices/next-js/server-client-components"
    },
    {
        title: "React - Les servers actions",
        description: "Découvrir la puissance des serveurs actions",
        image: vsCodeImage,
        duration: 2,
        href: "/exercices/next-js/servers-actions"
    }
]
export default function Page() {

    return <Main>

        <H1>Exercices - Next.js</H1>


        <div className="flex gap-32 mt-12 justify-center flex-wrap">

            {nextExos.map(course => (
                <CourseCard key={course.description} course={{
                    title: course.title,
                    description: course.description,
                    image: course.image,
                    duration: course.duration,
                    href: course.href
                }} />
            ))}
        </div>

    </Main>
}
