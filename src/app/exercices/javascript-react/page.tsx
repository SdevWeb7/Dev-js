import {Course} from "@/lib/types";
import Main from "@/components/main";
import H1 from "@/components/h1";
import CourseCard from "@/components/course-card";
import gitImage from "@/../public/git_image.png"
import vsCodeImage from "@/../public/vs-code.jpg"


const javascriptReactExos: Course[] = [
    {
        title: "Javascript - Introduction",
        description: "Découvrir les mécanismes de base du javascript",
        image: gitImage,
        duration: 5,
        href: "/exercices/javascript-react/introduction"
    },
    {
        title: "React - Le fonctionnement",
        description: "Les bases de React",
        image: vsCodeImage,
        duration: 2,
        href: "/exercices/javascript-react/fonctionnement"
    },
    {
        title: "React - Les hooks",
        description: "Découvrir des hooks importants de react",
        image: vsCodeImage,
        duration: 2,
        href: "/exercices/javascript-react/hooks"
    }
]
export default function Page() {

    return <Main>

        <H1>Exercices - Javascript et React.js</H1>


        <div className="flex gap-32 mt-12 justify-center flex-wrap">

            {javascriptReactExos.map(course => (
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
