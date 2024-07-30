import Main from "@/components/main";
import H1 from "@/components/h1";
import prisma from "@/lib/db";
import TableCoursAdmin from "@/components/admin/table-cours-admin";
import DialogAddCourse from "@/components/admin/dialog-add-course";

export default async function Page() {

    const courses = await prisma.course.findMany({
        orderBy: {
            type: 'asc'
        }
    })

    return <Main>

        <H1>Ceci est la page admin</H1>

        <h2 className={'text-center mt-12 text-xl font-bold text-my-primary'}>Liste de nos petits cours</h2>


        <DialogAddCourse />


        <TableCoursAdmin courses={courses} />



    </Main>
}
