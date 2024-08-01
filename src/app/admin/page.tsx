import Main from "@/components/main";
import H1 from "@/components/h1";
import prisma from "@/lib/db";
import TableCoursAdmin from "@/components/admin/table-cours-admin";
import DialogCourseAdmin from "@/components/admin/dialog-course-admin";

export default async function Page() {

    const courses = await prisma.course.findMany({
        orderBy: {
            category: 'asc'
        }
    })

    return <Main>

        <H1>Ceci est la page admin</H1>

        <h2 className={'text-center mt-12 text-xl font-bold text-my-primary'}>Liste de nos petits cours</h2>


        <DialogCourseAdmin formType={"create"} />


        <TableCoursAdmin courses={courses} />



    </Main>
}
