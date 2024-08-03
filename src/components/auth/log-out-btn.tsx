"use client";

import {Button} from "@/components/ui/button";
import {logOut} from "@/actions/auth-actions";
import {useTransition} from "react";

type LogOutBtnProps = {
    className?: string
}
export default function LogOutBtn({className = ''}) {

    const [isPending, startTransition] = useTransition();


    return <Button
                className={className}
                variant={'link'}
                disabled={isPending}
                onClick={() => {
                    startTransition(async() => await logOut());
                }}>Déconnexion</Button>

}