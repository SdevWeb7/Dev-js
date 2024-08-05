"use client";

import {Button} from "@/components/ui/button";
import {deleteCourse} from "@/actions/course-actions";
import {useTransition} from "react";
import {useToast} from "@/components/ui/use-toast";

type CourseFormDeleteBtnProps = {
    courseId: string
}
export default function CourseFormDeleteBtn({courseId} : CourseFormDeleteBtnProps) {
    const [isPending, startTransition] = useTransition();
    const { toast } = useToast();

    return <Button disabled={isPending} onClick={() => {
        startTransition(async() => {
            const result = await deleteCourse(courseId)
            if (result.error) {
                toast({ description: result.error })
            } else {
                toast({ description: 'Cours supprimé' })
            }
        })
    }} variant={'destructive'}>Supprimer</Button>
}
