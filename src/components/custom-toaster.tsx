"use client";

import {useToast} from "@/components/ui/use-toast";

type CustomToasterProps = {
    message: string;
}
export default function CustomToaster({message} : CustomToasterProps) {
    const { toast } = useToast();
    toast({
        description: message,
    });

    return <>

    </>
}
