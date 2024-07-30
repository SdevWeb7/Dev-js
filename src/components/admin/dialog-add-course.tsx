"use client";

import {Dialog, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import DialogCoursForm from "@/components/admin/dialog-cours-form";
import {useState} from "react";
import {flushSync} from "react-dom";

export default function DialogAddCourse() {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    return <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
        <DialogTrigger asChild>
            <Button className={'mx-auto my-4 block'}>Motivé(e) ? Ajoute un cours !!!</Button>
        </DialogTrigger>
        <DialogCoursForm isOpenDialog={isOpenDialog} formType={"create"} closeDialog={() => {
            flushSync(() => setIsOpenDialog(false));
        }} />
    </Dialog>
}
