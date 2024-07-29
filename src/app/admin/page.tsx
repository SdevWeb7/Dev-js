import Main from "@/components/main";
import H1 from "@/components/h1";
import prisma from "@/lib/db";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";

export default async function Page() {

    const courses = await prisma.course.findMany({
        orderBy: {
            type: 'asc'
        }
    })

    return <Main>

        <H1>Ceci est la page admin</H1>

        <h2 className={'text-center mt-12 text-xl font-bold text-my-primary'}>Liste de nos petits cours</h2>

        <Button className={'mx-auto my-4 block'}>Motivé(e) ? Ajoute un cours !!!</Button>


        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Type</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Titre</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {courses.map(course => (
                    <TableRow key={course.id}>
                    <TableCell>{course.type}</TableCell>
                    <TableCell>{course.category}</TableCell>
                    <TableCell>{course.title}</TableCell>
                    <TableCell className="text-right space-x-4">
                        <Button variant={'outline'}>Editer</Button>
                        <Button variant={'destructive'}>Supprimer</Button>
                    </TableCell>
                </TableRow>))}
            </TableBody>
        </Table>
    </Main>
}
