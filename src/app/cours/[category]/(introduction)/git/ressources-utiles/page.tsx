import Link from "next/link";
import H1Course from "@/components/cours/h1-course";


export default function Page() {

    return <>
        <H1Course>Git - Ressources utiles</H1Course>


        <Link className={"block"} href="https://git-scm.com/" target="_blank"><b>Git</b> - Télécharger.</Link>

        <Link className={"block"} href="https://github.com/" target="_blank"><b>GitHub</b> - Le site officiel de GitHub.</Link>

        <Link className={"block"} href="https://www.youtube.com/watch?v=rP3T0Ee6pLU&list=PLjwdMgw5TTLXuY5i7RW0QqGdW0NZntqiP" target={"_blank"}>La playlist de <b>Grafikart</b> sur Git.</Link>

    </>
}
