import prisma from "@/lib/db";
import Main from "@/components/main";
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

        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink
                        href={`/cours/${params.category}`}>
                        {params.category === "next-js" ? "Next.js" : params.category.charAt(0).toUpperCase()+params.category.replace('-', ' & ').slice(1)}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink className={"font-bold"} href={`/cours/${params.category}/${params.slug}`}>{course?.title}</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>



        {course ? <Tabs defaultValue="contentIntro" className="flex flex-col lg:flex-row mt-8 gap-2">
            <TabsList className="lg:sticky lg:top-24">
                <Card className={'border-none shadow-none'}>
                    <CardContent className="flex flex-col gap-2 justify-center pt-6">

                        {listeCategories.map((categorie, index) => (
                            <TabsTrigger key={index} value={categorie.value} className={'p-2'}>{categorie.label}</TabsTrigger>
                        ))}

                    </CardContent>
                </Card>
            </TabsList>

            <div className={'lg:border-l-2 lg:pl-12 flex justify-center w-full overflow-hidden'}>
                {listeCategories.map((categorie, index) => (
                    <CoursTabContent
                        key={index}
                        category={params.category}
                        value={categorie.value}
                        // @ts-ignore
                        fileName={course[categorie.value]} />
                ))}
            </div>


        </Tabs> : <p className={'text-center mt-12 font-bold'}>Pas de cours trouvé</p>}
    </Main>
}
