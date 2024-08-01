import prisma from "@/lib/db";
import CourseCard from "@/components/course-card";
import H1 from "@/components/h1";
import Main from "@/components/main";


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
        <H1 className={'capitalize'}>{params.category === "next-js" ? "Next.js" : params.category.replace('-', ' & ')}</H1>

        <section className={'flex flex-wrap justify-center gap-16 mt-16'}>
            {courses.map(course => {
                return <CourseCard course={course} key={course.id} />
            })}
        </section>
    </Main>;
}
