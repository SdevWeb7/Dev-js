"use client";

import {useForm} from "react-hook-form";
import {useActionState} from "react";
import {courseSchema} from "@/lib/zod-schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Course} from "@prisma/client";
import {DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {addCourse} from "@/actions/course-actions";
import {useFormState} from "react-dom";
import CourseFormBtn from "@/components/admin/course-form-btn";

type CourseFormProps = {
    formType: "edit" | "create";
    course?: Course;
}
export default function CourseForm({formType, course} : CourseFormProps) {
    const [errorAddCourse, dispatchAddCourse]= useFormState(addCourse, undefined);
    const {register, trigger, formState: {errors}} = useForm({
        resolver: zodResolver(courseSchema),
        defaultValues: {
            type: course?.type || "cours",
            category: course?.category || "",
            title: course?.title || "",
            description: course?.description || "",
            content: course?.content || "",
            duration: course?.duration || "",
            logoImgSrc: course?.logoImgSrc || "",
        }
    })

    return <form action={dispatchAddCourse}>
        <ScrollArea className={"h-[60vh] w-full rounded-md"}>

        <div className={'p-3'}>

            <Select {...register('type')}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={course?.type || "Cours"} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="cours">Cours</SelectItem>
                        <SelectItem value="exercice">Exercice</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>


        <Label className={"mt-4"} htmlFor="category">Category</Label>
        <Input className={'mb-4'} {...register('category')} id="category"/>
        {errors.category && <p>{errors.category.message}</p>}

        <Label htmlFor="title">Title</Label>
        <Input className={'mb-4'} {...register('title')} id="title"/>
        {errors.title && <p>{errors.title.message}</p>}

        <Label htmlFor="description">Description</Label>
        <Input className={'mb-4'} {...register('description')} id="description"/>
        {errors.description && <p>{errors.description.message}</p>}

        <Label htmlFor="content">Content</Label>
        <Textarea className={'mb-4'} {...register('content')} id="content"/>
        {errors.content && <p>{errors.content.message}</p>}

        <Label htmlFor="duration">Duration</Label>
        <Input className={'mb-4'} {...register('duration')} id="duration"/>
        {errors.duration && <p>{errors.duration.message}</p>}

        <Label htmlFor="logoImgSrc">LogoImgSrc</Label>
        <Input className={'mb-4'} {...register('logoImgSrc')} id="logoImgSrc"/>
        {errors.logoImgSrc && <p>{errors.logoImgSrc.message}</p>}

        </div>
    </ScrollArea>

        <CourseFormBtn formType={formType} />


        {errorAddCourse && <p>{errorAddCourse.message}</p>}

    </form>;
}
