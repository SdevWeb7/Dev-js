import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Course} from "@prisma/client";
import CourseFormDeleteBtn from "@/components/admin/course-form-delete-btn";
import DialogCourseAdmin from "@/components/admin/dialog-course-admin";

type TableCoursAdminProps = {
    courses: Course[];
}
export default function TableCoursAdmin({courses} : TableCoursAdminProps) {

    return <Table>
        <TableCaption>Liste de tous les cours</TableCaption>
        <TableHeader className={"font-extrabold text-xl"}>
            <TableRow>
                <TableHead>Catégorie</TableHead>
                <TableHead>Titre</TableHead>
                <TableHead className="text-right">Actions</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {courses.map(course => (
                <TableRow key={course.id}>
                    <TableCell>{course.category}</TableCell>
                    <TableCell>{course.title}</TableCell>
                    <TableCell className="text-right space-x-4">


                        <DialogCourseAdmin formType={"edit"} course={course} />

                        <CourseFormDeleteBtn courseId={course.id} />

                    </TableCell>
                </TableRow>))}
        </TableBody>
    </Table>
}
