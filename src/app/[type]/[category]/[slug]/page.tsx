import prisma from "@/lib/db";


type CoursePageProps = {
    params: {
        type: string
        category: string
        slug: string
    }
}
export default async function Page({params} : CoursePageProps) {

    const course = await prisma.course.findFirst({
        where: {
            type: params.type,
            category: params.category,
            slug: params.slug,
        }
    })

    return <>
        {course?.type} -
        {course?.category} -
        {course?.title}

    </>
}
