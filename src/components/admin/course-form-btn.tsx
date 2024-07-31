import {DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {useFormStatus} from "react-dom";

type CourseFormBtnProps = {
    formType: "edit" | "create";
}
export default function CourseFormBtn({formType} : CourseFormBtnProps) {
    const {pending} = useFormStatus();

    return <>
        <DialogFooter>
            <Button
                className={'mt-6'}
                disabled={pending}>{formType === "create" ? "Creation du cours" : "Editer le cours"}</Button>
        </DialogFooter>
    </>
}
