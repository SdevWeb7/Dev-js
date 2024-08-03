import prisma from "@/lib/db";
import CourseCard from "@/components/course-card";
import Main from "@/components/main";
import {BreadcrumbItem, BreadcrumbList, Breadcrumb, BreadcrumbLink} from "@/components/ui/breadcrumb";


type CoursesPageProps = {
    params: {
        category: string
    }
};
export default async function Page({params} : CoursesPageProps) {

    const courses = await prisma.course.findMany({
        where: {
            category: params.category
        }
    })

    return <Main>
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink
                        href={`/cours/${params.category}`}
                        className={"font-bold"}>
                            {params.category === "next-js" ? "Next.js" : params.category.charAt(0).toUpperCase()+params.category.replace('-', ' & ').slice(1)}</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

        <section className={'flex flex-wrap justify-around gap-16 mt-20'}>
            {courses.map(course => {
                return <CourseCard course={course} key={course.id} />
            })}
        </section>
    </Main>;
}
