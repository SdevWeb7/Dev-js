import prisma from "@/lib/db";


type CoursePageProps = {
    params: {
        type: string
        category: string
        title: string
    }
}
export default async function Page({params} : CoursePageProps) {

    const course = await prisma.course.findFirstOrThrow({
        where: {
            type: params.type,
            category: params.category,
            title: params.title,
        }
    })

    return <>
        {course.type} -
        {course.category} -
        {course.title}

    </>
}
