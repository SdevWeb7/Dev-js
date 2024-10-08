"use client";

import {ComponentPropsWithoutRef, useRef} from "react";
import {cn} from "@/lib/utils";
import {CodeIcon} from "@radix-ui/react-icons";
import {ClipboardCopy} from "lucide-react";
import {Button} from "@/components/ui/button";



export default function MdxPre({children, className, ...props}: ComponentPropsWithoutRef<"pre">) {
    const preRef = useRef<HTMLPreElement>(null);

    return <div className={'my-8 rounded-t-lg bg-gray-300'}>

        <div className={'px-2 py-1 flex items-center justify-between'}>
            <CodeIcon className={'w-6 h-6'} />

            <Button
                variant={"link"}
                className={'gap-4'}
                onClick={() => {
                    if (window) navigator.clipboard.writeText(preRef.current?.innerText || '');
                }}>
                Copier le code
            <ClipboardCopy
                className={"w-6 h-6 cursor-pointer"} />
            </Button>
        </div>

        <pre
            ref={preRef}
            className={cn("relative mt-0 overflow-auto lg:text-base", className)}
            style={{marginTop: 0, marginBottom: 0}}
            {...props}>
            {children}
        </pre>
    </div>
}
