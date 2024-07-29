import Main from "@/components/main";
import H1 from "@/components/h1";
import prisma from "@/lib/db";
import {Button} from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import DialogCoursAdmin from "@/components/admin/dialog-cours-admin";
import TableCoursAdmin from "@/components/admin/table-cours-admin";

export default async function Page() {

    const courses = await prisma.course.findMany({
        orderBy: {
            type: 'asc'
        }
    })

    return <Main>

        <H1>Ceci est la page admin</H1>

        <h2 className={'text-center mt-12 text-xl font-bold text-my-primary'}>Liste de nos petits cours</h2>

        <Dialog>
            <DialogTrigger asChild>
                <Button className={'mx-auto my-4 block'}>Motivé(e) ? Ajoute un cours !!!</Button>
            </DialogTrigger>
            <DialogCoursAdmin formType={"create"} />
        </Dialog>


        <TableCoursAdmin courses={courses} />



    </Main>
}
