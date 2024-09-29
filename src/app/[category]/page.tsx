import {getCoursesListByCategory} from "@/lib/mdx/cours-mdx";
import CourseCard from "@/components/course-card";


export const dynamic = "force-static";


type ListCoursesProps = {
    params: {
        category: string
    }
}
export default async function Page({params}: ListCoursesProps) {
    const courses = await getCoursesListByCategory(params.category);


    return <section className={"flex flex-wrap justify-center items-center gap-8 mt-12"}>

        {courses.map(course => {
            return <CourseCard course={course} key={course.slug}/>
        })}
    </section>
}
