"use client";

import {useForm} from "react-hook-form";
import {courseSchema} from "@/lib/zod-schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {ScrollArea} from "@/components/ui/scroll-area";

type CourseFormProps = {
    formType: "edit" | "create";
}
export default function CourseForm({formType} : CourseFormProps) {

    const {register} = useForm({
        resolver: zodResolver(courseSchema),
        defaultValues: {
            type: "",
            category: "",
            title: "",
            description: "",
            content: "",
            duration: "",
            logoImgSrc: ""
        }
    })

    return <ScrollArea className={"h-[200px] w-[350px] rounded-md border"}><form className={"p-2"}>

        <Label htmlFor="type">Type</Label>
        <Input {...register('type')} id="type" />


        <Label htmlFor="category">Category</Label>
        <Input {...register('category')} id="category" />


        <Label htmlFor="title">Title</Label>
        <Input {...register('title')} id="title" />


        <Label htmlFor="description">Description</Label>
        <Input {...register('description')} id="description" />


        <Label htmlFor="content">Content</Label>
        <Textarea {...register('content')} id="content" />


        <Label htmlFor="duration">Duration</Label>
        <Input {...register('duration')} id="duration" />


        <Label htmlFor="logoImgSrc">LogoImgSrc</Label>
        <Input {...register('logoImgSrc')} id="logoImgSrc" />



    </form></ScrollArea>;
}
