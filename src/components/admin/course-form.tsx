"use client";

import {Controller, useForm} from "react-hook-form";
import {courseSchema, TCourseForm} from "@/lib/zod-schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Course} from "@prisma/client";
import {addCourse, editCourse, uploadImage} from "@/actions/course-actions";
import CourseFormBtn from "@/components/admin/course-form-btn";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {useToast} from "@/components/ui/use-toast";

type CourseFormProps = {
    formType: "edit" | "create";
    course?: Course;
    handleCloseModal: () => void;
}
export default function CourseForm({formType, course, handleCloseModal} : CourseFormProps) {
    const {register, formState: {errors}, trigger, getValues, control} = useForm<TCourseForm>({
        resolver: zodResolver(courseSchema),
        defaultValues: {
            category: course?.category || "introduction",
            title: course?.title || "",
            slug: course?.slug || "",
            description: course?.description || "",
            duration: course?.duration || 1,
            logoImg: null,
        }
    });
    const {toast} = useToast();
    const categoryOptions = ["introduction", "html-css", "javascript-react", "next-js"];

    const handleSubmit = async () => {
        const result = await trigger();
        if (!result) return;
        let response;

        const courseData = getValues();

        let logoImgUrl = null;
        if (courseData.logoImg) {
            const formData = new FormData();
            formData.append("logoImg", courseData.logoImg[0]);
            logoImgUrl = await uploadImage(formData, "logoImg");
        }


        if (formType === "create") response = await addCourse({
            ...courseData,
            logoImg: undefined,
            logoImgSrc: logoImgUrl || 'https://dummyimage.com/1280x720/fff/aaa',
        });

        else if (formType === "edit") response = await editCourse(course!.id, {
            ...courseData,
            logoImg: undefined,
            logoImgSrc: logoImgUrl || course?.logoImgSrc || 'https://dummyimage.com/1280x720/fff/aaa',
        });

        if (response?.error) {
            toast({ description: response.error });
            return;
        }
        toast({ description: response?.success || "Cours ajouté"});
        handleCloseModal();
    };


    return <form action={handleSubmit}>
        <ScrollArea className={"h-[60vh] w-full rounded-md"}>

        <div className={'p-3 flex flex-col'}>

        <Label className={"mb-2 font-bold"} htmlFor="category">Category</Label>
            <Controller
                control={control}
                name="category"
                render={({ field }) => (
                    <RadioGroup
                        id="category"
                        value={field.value}
                        onValueChange={field.onChange}
                        defaultValue={categoryOptions[0]}
                    >
                        {categoryOptions.map((option) => (
                            <div key={option} className={"flex items-center space-x-2 mt-2"}>
                                <Label htmlFor={`radio-${option}`} className="min-w-32">{option}</Label>
                                <RadioGroupItem
                                    key={option}
                                    value={option}
                                    id={`radio-${option}`} />
                            </div>
                        ))}
                    </RadioGroup>
                )}
            />

            <Label className={"mt-6 mb-2 font-bold"} htmlFor="title">Titre</Label>
            <Input {...register('title')} id="title"/>
            {errors.title && <p>{errors.title.message}</p>}

            <Label className={"mt-6 mb-2 font-bold"} htmlFor="slug">Slug</Label>
            <Input {...register('slug')} id="slug"/>
            {errors.slug && <p>{errors.slug.message}</p>}

            <Label className={"mt-6 mb-2 font-bold"} htmlFor="description">Description</Label>
            <Input {...register('description')} id="description"/>
            {errors.description && <p>{errors.description.message}</p>}


            <Label className={"mt-6 mb-2 font-bold"} htmlFor="duration">Durée</Label>
            <Input {...register('duration')} id="duration"/>
            {errors.duration && <p>{errors.duration.message}</p>}

            <Label className={"mt-6 mb-2 font-bold"} htmlFor="logoImg">Image de présentation</Label>
            <Input className={"flex justify-between"} type={'file'} {...register('logoImg')} id="logoImg"/>
            {/*@ts-ignore*/}
            {errors.logoImg && <p>{errors.logoImg.message}</p>}

        </div>
        </ScrollArea>

        <CourseFormBtn formType={formType}/>

    </form>;
}
