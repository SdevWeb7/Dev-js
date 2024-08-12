"use client";

import {useForm} from "react-hook-form";
import {profileSchema, TProfileForm} from "@/lib/zod-schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {pathRevalidator, updateProfilUser} from "@/actions/profile-actions";
import {uploadImage} from "@/actions/image-actions";
import {useSession} from "next-auth/react";
import {useToast} from "@/components/ui/use-toast";
import {Dispatch, SetStateAction} from "react";
import ProfilFormBtn from "@/components/profil/profil-form-btn";


type ProfilFormProps = {
    setIsEditing: Dispatch<SetStateAction<boolean>>;
}
export default function ProfilForm({setIsEditing} : ProfilFormProps) {
    const {update, data} = useSession();
    const {toast} = useToast();

    const {register, formState: {errors}, getValues, trigger} = useForm<TProfileForm>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            firstname: data?.user.firstname ?? null,
            lastname: data?.user.lastname ?? null,
            avatarImg: null,
            bio: data?.user.bio ?? null,
            urlLinkedIn: data?.user.urlLinkedIn ?? null,
            urlGithub: data?.user.urlGithub ?? null,
            urlPortfolio: data?.user.urlPortfolio ?? null,
        }
    })

    const handleSubmit = async () => {
        const result = await trigger();

        if (!result) return;

        const profileData = getValues();

        if (profileData.avatarImg) {
            const formData = new FormData();
            formData.append('avatarImg', profileData.avatarImg[0]);
            profileData.avatarImgSrc = await uploadImage(formData, 'avatarImg');
        }


        const response = await updateProfilUser({
            data: {
                ...profileData,
                avatarImg: undefined,
                avatarImgSrc: profileData.avatarImgSrc || data?.user.avatarImgSrc || "/smiley.webp"
            }});
        if (response.error) {
            toast({description: response.error});
            return;
        } else {
            toast({description: response.success});
            await update(true);
            await pathRevalidator("/profil");
            setIsEditing(false);
        }
    }


    return <form action={handleSubmit}>

        <Label htmlFor={"avatar"} className={"mb-2 block"}>Photo de profil</Label>
        <Input id={"avatar"} type={"file"} {...register('avatarImg')} />
        {/*@ts-ignore*/}
        {errors.avatarImg && <p>{errors.avatarImg.message}</p>}

        <Label htmlFor={"firstname"} className={"mt-8 mb-2 block"}>Prénom</Label>
        <Input id={"firstname"} {...register('firstname')} />
        {errors.firstname && <p>{errors.firstname.message}</p>}


        <Label htmlFor={"lastname"} className={"mt-8 mb-2 block"}>Nom</Label>
        <Input id={"lastname"} {...register('lastname')} />
        {errors.lastname && <p>{errors.lastname.message}</p>}


        <Label htmlFor={"bio"} className={"mt-8 mb-2 block"}>Bio</Label>
        <Input id={"bio"} {...register('bio')} />
        {errors.bio && <p>{errors.bio.message}</p>}


        <Label htmlFor={"linkedin"} className={"mt-8 mb-2 block"}>LinkedIn</Label>
        <Input id={"linkedin"} {...register('urlLinkedIn')} />
        {errors.urlLinkedIn && <p>{errors.urlLinkedIn.message}</p>}


        <Label htmlFor={"github"} className={"mt-8 mb-2 block"}>Github</Label>
        <Input id={"github"} {...register('urlGithub')} />
        {errors.urlGithub && <p>{errors.urlGithub.message}</p>}


        <Label htmlFor={"portfolio"} className={"mt-8 mb-2 block"}>Portfolio</Label>
        <Input id={"portfolio"} {...register('urlPortfolio')} />
        {errors.urlPortfolio && <p>{errors.urlPortfolio.message}</p>}


        <ProfilFormBtn />
    </form>
}
