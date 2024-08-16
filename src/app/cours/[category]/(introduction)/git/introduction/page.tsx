import Link from "next/link";
import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import Image from "next/image";
import imgGitBranches from "@/../public/git/branche_git.png";
import SpanCourse from "@/components/cours/span-course";


export default function Page() {

    return <>
        <H1Course>Git</H1Course>

        <PCourse>Git est un logiciel de <SpanCourse>gestion de versions décentralisé</SpanCourse>. </PCourse>

        <PCourse className={"mt-8"}>C&apos;est un outil incontournable pour les développeurs. Il permet de suivre l&apos;évolution du code source d&apos;un projet et de collaborer avec d&apos;autres développeurs.</PCourse>

        <PCourse className={"mt-8"}>Les fonctionnalités de Git sont nombreuses et permettent de revenir en arrière en cas de problème, de gérer efficacement les branches, les conflits, les tags, les commits, etc.</PCourse>

        <Link href="/git/branche_git.png" target="_blank"><Image className={"shadow-md rounded-3xl my-12"} src={imgGitBranches} alt="Git Branches" /></Link>

        <PCourse>Utiliser Git est une compétence essentielle pour tout développeur cependant il peut être difficile à prendre en main. C&apos;est pourquoi nous allons voir dans ce cours les bases de Git et comment l&apos;utiliser au quotidien.</PCourse>
    </>
}
