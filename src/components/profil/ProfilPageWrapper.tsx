"use client";

import {PropsWithChildren, useState} from "react";
import {Card, CardHeader} from "@/components/ui/card";
import ProfilForm from "@/components/profil/profil-form";
import {Button} from "@/components/ui/button";
import { FaEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


export default function ProfilPageWrapper({children}: PropsWithChildren) {
    const [isEditing, setIsEditing] = useState(false);

    return  <Card className={"w-full min750:max-w-[600px] mt-8 pt-4 mx-auto min750:px-16 space-y-3 relative pb-8"}>
        <CardHeader>
            <h2 className={'font-bold text-xl text-center'}>{isEditing ? "Modifier mon profil" : "Mes informations"}</h2>

            <Button
                variant={"secondary"}
                className={"text-2xl absolute right-4 top-4"}
                onClick={() => setIsEditing(!isEditing)}>{isEditing ? <IoMdClose /> : <FaEdit />}</Button>
        </CardHeader>

        {isEditing ? <ProfilForm /> : children}
    </Card>
}
