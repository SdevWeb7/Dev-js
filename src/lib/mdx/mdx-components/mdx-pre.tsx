import {ComponentPropsWithoutRef} from "react";
import {cn} from "@/lib/utils";
import {CodeIcon} from "@radix-ui/react-icons";
import {ClipboardCopy} from "lucide-react";
import {Button} from "@/components/ui/button";


export type MdxPreProps = ComponentPropsWithoutRef<"pre"> & {
    language?: string;
};
export default function MdxPre({children, className, ...props}: MdxPreProps) {

    return <div className={'my-8 rounded-t-lg bg-gray-300'}>

        <div className={'px-2 py-1 flex items-center justify-between'}>
            <CodeIcon className={'w-6 h-6'} />

            <Button
                variant={"link"}
                className={'gap-4'}>
                Copier le code
            <ClipboardCopy
                className={"w-6 h-6 cursor-pointer"} />
            </Button>
        </div>

        <pre
            className={cn("relative mt-0 overflow-auto lg:text-base", className)}
            style={{marginTop: 0, marginBottom: 0}}
            {...props}>
            {children}
        </pre>
    </div>
}
