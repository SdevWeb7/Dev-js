"use client";

import {Switch} from "@/components/ui/switch";
import {Label} from "@/components/ui/label";
import {useSession} from "next-auth/react";
import {updateIsPublicProfil} from "@/actions/profile-actions";
import {useToast} from "@/components/ui/use-toast";

export default function ProfilCardSwitch () {
    const {data, update} = useSession();
    const {toast} = useToast();

    const handleIsPublicChange = async (checked: boolean) => {
        const {success, error} = await updateIsPublicProfil(checked);

        if (error) toast({description: error});
        else {
            await update();
            toast({description: success});
        }
    }

    return <>
        <Switch
            checked={data?.user.isProfilPublic}
            onCheckedChange={handleIsPublicChange}
            id="public-mode"/>

        <Label htmlFor="public-mode">Rendre mon profil visible aux autres membres de la plateforme</Label>
    </>
}
