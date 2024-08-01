import prisma from "@/lib/db";
import Main from "@/components/main";
import H1 from "@/components/h1";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent} from "@/components/ui/card";
import CoursTabContent from "@/components/cours-tab-content";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {Slash} from "lucide-react";


const listeCategories = [
    {
        value: "contentIntro",
        label: "Introduction"
    },
    {
        value: "contentCours",
        label: "Cours"
    },
    {
        value: "contentExemple",
        label: "Exemples"
    },
    {
        value: "contentExercice",
        label: "Exercices"
    },
    {
        value: "contentPenseBete",
        label: "Pense-Bêtes"
    },
    {
        value: "contentMoreRessources",
        label: "Ressources utiles"
    }
]

type CoursePageProps = {
    params: {
        category: string
        slug: string
    }
}
export default async function Page({params} : CoursePageProps) {

    const course = await prisma.course.findFirst({
        where: {
            category: params.category,
            slug: params.slug,
        }
    })

    return <Main>

        <Breadcrumb className={"flex justify-center"}>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href={`/cours/${params.category}`}>{params.category === "next-js" ? "Next.js" : params.category.replace('-', ' & ')}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink href={`/cours/${params.category}/${params.slug}`}>{course?.title}</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>


        <div className={'flex justify-center items-center min-h-[500px] mt-6'}>

        {course ? <Tabs defaultValue="contentIntro" className="flex items-center flex-col sm:flex-row w-full justify-center">
            <TabsList className="flex flex-col">
                <Card>
                    <CardContent className="flex flex-col gap-2">

                        {listeCategories.map((categorie, index) => (
                            <TabsTrigger key={index} value={categorie.value} className={'p-2'}>{categorie.label}</TabsTrigger>
                        ))}

                    </CardContent>
                </Card>
            </TabsList>


                {listeCategories.map((categorie, index) => (
                    <CoursTabContent
                        key={index}
                        value={categorie.value}
                        // @ts-ignore
                        content={course[categorie.value]}
                        title={categorie.label}
                        description={course.description} />
                ))}



        </Tabs> : <p className={'text-center mt-12 font-bold'}>Pas de cours trouvé</p>}
        </div>
    </Main>
}
