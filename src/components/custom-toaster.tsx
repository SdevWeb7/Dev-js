"use client";

import {toast} from "sonner";

type CustomToasterProps = {
    message: string;
}
export default function CustomToaster({message} : CustomToasterProps) {

    toast.success(message);

    return <>

    </>
}
