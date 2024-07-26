import {Course} from "@/lib/types";
import Main from "@/components/main";
import H1 from "@/components/h1";
import CourseCard from "@/components/course-card";
import gitImage from "@/../public/git_image.png"
import HttpImage from "@/../public/schema-requete-http.jpg"
import vsCodeImage from "@/../public/vs-code.jpg"
import bddImage from "@/../public/bdd-image.jpg"
import ressourcesImage from "@/../public/ressource.jpg"


const introCourses: Course[] = [
    {
        title: "Git",
        description: "Apprendre le versioning",
        image: gitImage,
        duration: 5,
        href: "/cours/introduction/git"
    },
    {
        title: "HTTP",
        description: "Comprendre les échange client/server",
        image: HttpImage,
        duration: 2,
        href: "/cours/introduction/http"
    },
    {
        title: "IDE (VS Code)",
        description: "Utiliser et paramétrer un environnement de développement intégré",
        image: vsCodeImage,
        duration: 2,
        href: "/cours/introduction/ide"
    },
    {
        title: "Base de données",
        description: "Découvrir et communiquer avec les bases de données",
        image: bddImage,
        duration: 3,
        href: "/cours/introduction/bdd"
    },
    {
        title: "Ressources",
        description: "Liens et ressources utiles",
        image: ressourcesImage,
        duration: 1,
        href: "/cours/introduction/ressources"
    }

]
export default function Page() {

    return <Main>

        <H1>Cours - Introduction</H1>


        <div className="flex gap-32 mt-12 justify-center flex-wrap">

            {introCourses.map(course => (
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
