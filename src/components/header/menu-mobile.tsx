import {Button, buttonVariants} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";


type menuMobileProps = {
    hrefs: {
        title: string;
        href: string;
    }[]
}
export default async function MenuMobile({hrefs} : menuMobileProps) {

        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild  className={"block min800:hidden"}>
                    <Button variant="outline">Cours</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={"block min800:hidden w-56"}>
                    <DropdownMenuGroup>

                        {hrefs.map((href) => (
                            <Link className={buttonVariants({
                                variant: 'link'
                            })} key={href.title} href={href.href}><DropdownMenuItem>{href.title}</DropdownMenuItem></Link>
                        ))}
                    </DropdownMenuGroup>

                </DropdownMenuContent>
            </DropdownMenu>
        )

}
