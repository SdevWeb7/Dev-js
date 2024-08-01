import prisma from "@/lib/db";
import Main from "@/components/main";
import H1 from "@/components/h1";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent} from "@/components/ui/card";
import CoursTabContent from "@/components/cours-tab-content";


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

        <H1 className={'capitalize'}>{params.category === "next-js" ? "Next.js" : params.category.replace('-', ' & ')} - {course?.title}</H1>



        <div className={'flex justify-center items-center min-h-[500px] mt-6'}>

        {course ? <Tabs defaultValue="contentIntro" className="flex items-center flex-col sm:flex-row ">
            <TabsList className="w-[200px] flex flex-col">
                <Card className="mb-4">
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
