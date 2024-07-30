"use client";

import {useForm} from "react-hook-form";
import {courseSchema, TCourseForm} from "@/lib/zod-schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Course} from "@prisma/client";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {addCourse, editCourse} from "@/actions/course-actions";
import CourseFormBtn from "@/components/admin/course-form-btn";
import {toast} from "sonner";

type CourseFormProps = {
    formType: "edit" | "create";
    course?: Course;
    closeDialog: () => void;
}
export default function CourseForm({formType, course, closeDialog} : CourseFormProps) {
    const {register, formState: {errors}, trigger, getValues} = useForm<TCourseForm>({
        resolver: zodResolver(courseSchema),
        defaultValues: {
            type: course?.type || "cours",
            category: course?.category || "",
            title: course?.title || "",
            description: course?.description || "",
            content: course?.content || "",
            duration: course?.duration || 1,
            logoImgSrc: course?.logoImgSrc || "",
        }
    })

        console.log(course);
    const handleSubmit = async () => {
        const result = await trigger();
        if (!result) return;
        let response;
        const courseData = getValues();

        if (formType === "create") response = await addCourse(courseData);

        else if (formType === "edit") response = await editCourse(course!.id, courseData);

        if (response?.error) {
            toast.error(response.error);
            return;
        }
        toast.success(response?.success || "Cours ajouté");
        closeDialog();
    };

    return <form action={handleSubmit}>
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
        <Input {...register('category')} id="category"/>
        {errors.category && <p>{errors.category.message}</p>}

        <Label htmlFor="title">Title</Label>
        <Input {...register('title')} id="title"/>
        {errors.title && <p>{errors.title.message}</p>}

        <Label htmlFor="description">Description</Label>
        <Input {...register('description')} id="description"/>
        {errors.description && <p>{errors.description.message}</p>}

        <Label htmlFor="content">Content</Label>
        <Textarea {...register('content')} id="content"/>
        {errors.content && <p>{errors.content.message}</p>}

        <Label htmlFor="duration">Duration</Label>
        <Input {...register('duration')} id="duration"/>
        {errors.duration && <p>{errors.duration.message}</p>}

        <Label htmlFor="logoImgSrc">LogoImgSrc</Label>
        <Input {...register('logoImgSrc')} id="logoImgSrc"/>
        {errors.logoImgSrc && <p>{errors.logoImgSrc.message}</p>}

        </div>
    </ScrollArea>

        <CourseFormBtn formType={formType} />

    </form>;
}
