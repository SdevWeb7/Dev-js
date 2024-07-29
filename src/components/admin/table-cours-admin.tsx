import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Course} from "@prisma/client";
import DialogCoursAdmin from "@/components/admin/dialog-cours-admin";
import {Dialog, DialogTrigger} from "@/components/ui/dialog";

type TableCoursAdminProps = {
    courses: Course[];
}
export default function TableCoursAdmin({courses} : TableCoursAdminProps) {

    return <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className={"font-extrabold text-xl"}>
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


                        <Dialog>
                        <DialogTrigger asChild>
                            <Button variant={'outline'}>Editer</Button>
                        </DialogTrigger>
                        <DialogCoursAdmin formType={"edit"}></DialogCoursAdmin>
                        </Dialog>

                        <Button variant={'destructive'}>Supprimer</Button>
                    </TableCell>
                </TableRow>))}
        </TableBody>
    </Table>
}
