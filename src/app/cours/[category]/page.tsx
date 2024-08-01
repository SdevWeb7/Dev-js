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
        <Breadcrumb className={"flex justify-center"}>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href={`/cours/${params.category}`}>{params.category === "next-js" ? "Next.js" : params.category.replace('-', ' & ')}</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

        <section className={'flex flex-wrap justify-center gap-16 mt-16'}>
            {courses.map(course => {
                return <CourseCard course={course} key={course.id} />
            })}
        </section>
    </Main>;
}
