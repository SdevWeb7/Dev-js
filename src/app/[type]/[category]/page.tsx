import prisma from "@/lib/db";
import CourseCard from "@/components/course-card";


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

    return <section className={'flex flex-wrap gap-12'}>

        {courses.map(course => {
            return <CourseCard course={course} key={course.id}/>
        })}
    </section>
}
