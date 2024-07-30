import {DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import CourseForm from "@/components/admin/course-form";
import {Course} from "@prisma/client";

type DialogCoursAdminProps = {
    formType: "edit" | "create";
    course?: Course;
}
export default function DialogCoursAdmin({formType, course} : DialogCoursAdminProps) {

    return <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
        <DialogTitle>{formType === 'create' ? "Création" : "Edition"} d&apos;un cours</DialogTitle>
        <DialogDescription>
            Tableau de bord des cours
        </DialogDescription>
    </DialogHeader>


        <CourseForm formType={formType} course={course} />

</DialogContent>
}
