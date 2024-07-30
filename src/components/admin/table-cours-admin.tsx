"use client";

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Course} from "@prisma/client";
import {Dialog, DialogTrigger} from "@/components/ui/dialog";
import CourseFormDeleteBtn from "@/components/admin/course-form-delete-btn";
import {useState} from "react";
import {flushSync} from "react-dom";
import DialogCoursForm from "@/components/admin/dialog-cours-form";

type TableCoursAdminProps = {
    courses: Course[];
}
export default function TableCoursAdmin({courses} : TableCoursAdminProps) {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    return <Table>
        <TableCaption>Liste de tous les cours</TableCaption>
        <TableHeader className={"font-extrabold text-xl"}>
            <TableRow>
                <TableHead className="w-[100px]">Type</TableHead>
                <TableHead>Catégorie</TableHead>
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


                        <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
                        <DialogTrigger asChild>
                            <Button variant={'outline'}>Editer</Button>
                        </DialogTrigger>
                        <DialogCoursForm isOpenDialog={isOpenDialog} formType={"edit"} course={course} closeDialog={() => {
                            flushSync(() => setIsOpenDialog(false));
                        }}></DialogCoursForm>
                        </Dialog>


                        <CourseFormDeleteBtn courseId={course.id} />

                    </TableCell>
                </TableRow>))}
        </TableBody>
    </Table>
}
