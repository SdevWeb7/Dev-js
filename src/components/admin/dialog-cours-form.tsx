import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import CourseForm from "@/components/admin/course-form";
import {Course} from "@prisma/client";

type DialogCoursFormProps = {
    formType: "edit" | "create";
    course?: Course;
    closeDialog: () => void;
    isOpenDialog: boolean;
}
export default function DialogCoursForm({formType, course, closeDialog, isOpenDialog} : DialogCoursFormProps) {

    return <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
        <DialogTitle>{formType === 'create' ? "Création" : "Edition"} d&apos;un cours</DialogTitle>
        <DialogDescription>
            Formulaire {formType === 'create' ? "de création" : "d'édition"} d&apos;un cours
        </DialogDescription>
    </DialogHeader>


        {isOpenDialog && <CourseForm formType={formType} course={course} closeDialog={closeDialog} />}

</DialogContent>
}
