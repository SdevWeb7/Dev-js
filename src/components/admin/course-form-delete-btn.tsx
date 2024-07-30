"use client";

import {Button} from "@/components/ui/button";
import {deleteCourse} from "@/actions/course-actions";
import {toast} from "sonner";
import {useTransition} from "react";

type CourseFormDeleteBtnProps = {
    courseId: string
}
export default function CourseFormDeleteBtn({courseId} : CourseFormDeleteBtnProps) {
    const [isPending, startTransition] = useTransition();

    return <Button disabled={isPending} onClick={() => {
        startTransition(async() => {
            const result = await deleteCourse(courseId)
            if (result.error) {
                toast.error(result.error)
            } else {
                toast.success("Cours supprimé")
            }
        })
    }} variant={'destructive'}>Supprimer</Button>
}
