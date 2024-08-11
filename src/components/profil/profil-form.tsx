"use client";

import {useForm} from "react-hook-form";
import {profileSchema, TProfileForm} from "@/lib/zod-schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";


export default function ProfilForm() {
    const {register, formState: {errors}, getValues, trigger} = useForm<TProfileForm>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            avatarImg: null,
            bio: '',
            urlLinkedIn: '',
            urlGithub: '',
            urlPortfolio: '',
        }
    })

    const handleSubmit = async () => {
        const result = await trigger();

        if (!result) return;

        const profileData = getValues();
        console.log(profileData);
    }


    return <form action={handleSubmit}>

        <Label htmlFor={"avatar"} className={"mb-2 block"}>Photo de profil</Label>
        <Input id={"avatar"} type={"file"} {...register('avatarImg')} />
        {/*@ts-ignore*/}
        {errors.avatarImg && <p>{errors.avatarImg.message}</p>}

        <Label htmlFor={"firstname"} className={"mt-8 mb-2 block"}>Prénom</Label>
        <Input id={"firstname"} {...register('firstName')} />
        {errors.firstName && <p>{errors.firstName.message}</p>}


        <Label htmlFor={"lastname"} className={"mt-8 mb-2 block"}>Nom</Label>
        <Input id={"lastname"} {...register('lastName')} />
        {errors.lastName && <p>{errors.lastName.message}</p>}


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


        <Button
            className={"mt-6 ml-auto block"}
            variant={"default"}>Enregistrer</Button>
    </form>
}
