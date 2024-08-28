import LayoutCourseCustom from "@/components/cours/layout-course-custom";
import H1Course from "@/components/cours/h1-course";
import PCourse from "@/components/cours/p-course";
import SpanCourse from "@/components/cours/span-course";


export default function Page() {

    return <LayoutCourseCustom>


        <H1Course>Prisma</H1Course>

        <PCourse>Les échanges avec la base de données peuvent être un petit peu complexes.</PCourse>

        <PCourse className={'simple-my'}>Nous ne pouvons contacter une base de données que lorsque nous sommes <SpanCourse>côté server</SpanCourse>, donc il y a tout d&apos;abords les échanges <SpanCourse>client/server</SpanCourse>.</PCourse>

        <PCourse>La seconde étape concerne la/les <SpanCourse>requête(s) SQL</SpanCourse> pour appliquer les modifications dans la base de données.</PCourse>

        <PCourse className={'simple-my'}>Puis enfin les <SpanCourse>validations</SpanCourse>. Les validations sont extrêmement importantes, car elles réduisent considérablement les potentiels bugs et failles de sécurité.</PCourse>

        <PCourse>Habituellement pour connecter une base de données, nous devions créer un <SpanCourse>BACKEND</SpanCourse> et ouvrir un <SpanCourse>serveur de base de données</SpanCourse>.</PCourse>
        <PCourse>Notre BACKEND créait des <SpanCourse>endpoints API</SpanCourse> pour effectuer nos <SpanCourse>requêtes SQL</SpanCourse> et notre FRONTEND récupérait les données en effectuant une <SpanCourse>Requête HTTP</SpanCourse>.</PCourse>

        <PCourse className={'simple-my'}>Depuis la version 13 de <SpanCourse>Next.js</SpanCourse> et l&apos;arrivé des Server/Client Components nous n&apos;avons plus q&apos;un serveur et des composants qui peuvent être <SpanCourse>Client</SpanCourse> ou <SpanCourse>Server</SpanCourse>.</PCourse>

        <PCourse>Dans les <SpanCourse>Server Components asynchrone</SpanCourse>, nous pourrons contacter notre base de données directement.</PCourse>

        <PCourse className={'simple-my'}>Il est possible avec Next.js de créer très simplement un endpoint API et de fetch depuis un Client Component mais il existe maintenant les <SpanCourse>Server Actions</SpanCourse> (voir prochain cours) qui vont encore simplifier le développement.</PCourse>

        <PCourse>Pour les requêtes SQL, <SpanCourse>Prisma</SpanCourse> est un ORM. Il nous permet d&apos;effectuer nos requêtes sous la forme d&apos;objets Javascript. Il intègre certaines bases de sécurité et s&apos;adapte parfaitement à un bon nombre d&apos;SGBD (Mysql, Sqlite, Postgres...).</PCourse>

        <PCourse className={'simple-my'}>Enfin viennent les validations (que nous verrons dans le cours Server Actions). <SpanCourse>ZOD</SpanCourse> nous permet de créer des <SpanCourse>schémas de données</SpanCourse>. Nous pourrons ensuite en appelant une simple fonction, savoir si les données reçues correspondent à ce schéma.</PCourse>

        <PCourse>A noter : Il est plus que conseillé d&apos;utiliser <SpanCourse>TypeScript</SpanCourse> et ZOD fonctionne avec Typescript, cependant vous pouvez utiliser <SpanCourse>Yup</SpanCourse> si jamais vous ne voulez pas utiliser Typescript.</PCourse>

    </LayoutCourseCustom>
}
