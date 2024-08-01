"use client";

import {Button} from "@/components/ui/button";
import {logOut} from "@/actions/auth-actions";
import {useTransition} from "react";

export default function LogOutBtn() {

    const [isPending, startTransition] = useTransition();


    return <Button
                variant={'outline'}
                disabled={isPending}
                onClick={() => {
                    startTransition(async() => await logOut());
                }}>Déconnexion</Button>

}