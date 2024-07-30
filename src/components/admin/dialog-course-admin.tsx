"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {flushSync} from "react-dom";
import CourseForm from "@/components/admin/course-form";
import {Course} from "@prisma/client";

type DialogEditCourseProps = {
    course?: Course;
    formType: "edit" | "create";
}
export default function DialogCourseAdmin({course, formType} : DialogEditCourseProps) {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    return <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
        <DialogTrigger asChild>
            {formType === "create" ? <Button className={'mx-auto my-4 block'}>Motivé(e) ? Ajoute un cours !!!</Button> :
            <Button variant={"outline"}>Editer</Button>}
        </DialogTrigger>


        {isOpenDialog && <DialogContent className="sm:max-w-[425px]">
           <DialogHeader>
              <DialogTitle>{formType === "create" ? "Création d'un cours" : "Edition d'un cours"}</DialogTitle>
              <DialogDescription>
                 Formulaire {formType === "create" ? "de création" : "d'édition"} d&apos;un cours
              </DialogDescription>
           </DialogHeader>


           <CourseForm handleCloseModal={() => {
               flushSync(() => setIsOpenDialog(false));
           }} formType={formType} course={course} />

        </DialogContent>}
    </Dialog>
}

