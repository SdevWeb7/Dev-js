import prisma from "@/lib/db";
import CourseCard from "@/components/course-card";
import H1 from "@/components/h1";


type CoursesPageProps = {
    params: {
        type: string
        category: string
    }
};
export default async function Page({params} : CoursesPageProps) {

    const courses = await prisma.course.findMany({
        where: {
            type: params.type,
            category: params.category
        }
    })

    return <>
        <H1>{params.type} - {params.category}</H1>

        <section className={'flex flex-wrap justify-center gap-12'}>
        {courses.map(course => {
            return <CourseCard course={course} key={course.id}/>
        })}
    </section></>;
}
