import {DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import CourseForm from "@/components/admin/course-form";

type DialogCoursAdminProps = {
    formType: "edit" | "create";
}
export default function DialogCoursAdmin({formType} : DialogCoursAdminProps) {

    return <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
        <DialogTitle>{formType === 'create' ? "Création" : "Edition"} d&apos;un cours</DialogTitle>
        <DialogDescription>
            Tableau de bord des cours
        </DialogDescription>
    </DialogHeader>


        <CourseForm formType={formType} />

    <DialogFooter>
        <Button>{formType === "create" ? "Creation du cours" : "Editer le cours"}</Button>
    </DialogFooter>
</DialogContent>
}
