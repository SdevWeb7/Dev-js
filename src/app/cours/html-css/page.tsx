import {Course} from "@/lib/types";
import Main from "@/components/main";
import H1 from "@/components/h1";
import CourseCard from "@/components/course-card";
import gitImage from "@/../public/git_image.png"
import vsCodeImage from "@/../public/vs-code.jpg"
import bddImage from "@/../public/bdd-image.jpg"
import ressourcesImage from "@/../public/ressource.jpg"


const HtmlCssCourses: Course[] = [
    {
        title: "HTML - Introduction",
        description: "Découvrir les balises HTML",
        image: gitImage,
        duration: 5,
        href: "/cours/html-css/introduction"
    },
    {
        title: "HTML - Formulaires",
        description: "Apprendre le fonctionnement des formulaires",
        image: vsCodeImage,
        duration: 2,
        href: "/cours/html-css/formulaires"
    },
    {
        title: "CSS - Syntaxe",
        description: "Découvrir la syntaxe CSS",
        image: bddImage,
        duration: 3,
        href: "/cours/html-css/syntaxe"
    },
    {
        title: "CSS - Flexbox",
        description: "Découvrir le Flexbox",
        image: ressourcesImage,
        duration: 1,
        href: "/cours/html-css/flexbox"
    }

]
export default function Page() {

    return <Main>

        <H1>Cours - Html et Css</H1>


        <div className="flex gap-32 mt-12 justify-center flex-wrap">

            {HtmlCssCourses.map(course => (
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
