import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";


type menuMobileProps = {
    hrefs: {
        title: string;
        href: string;
    }[]
}
export default function MenuMobile({hrefs} : menuMobileProps) {


        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild  className={"block md:hidden"}>
                    <Button variant="outline">Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Cours</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>

                        {hrefs.map((href) => (
                            <Link key={href.title} href={`/cours/${href.href}`}><DropdownMenuItem>{href.title}</DropdownMenuItem></Link>
                        ))}
                    </DropdownMenuGroup>


                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Exercices</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        {hrefs.map((href) => (
                            <Link key={href.title} href={`/exercice/${href.href}`}><DropdownMenuItem>{href.title}</DropdownMenuItem></Link>
                        ))}
                    </DropdownMenuGroup>


                    <DropdownMenuSeparator />
                    <Link key={"profil"} href={"/profil"}><DropdownMenuItem>Profil</DropdownMenuItem></Link>
                    <Link key={"aide"} href={"/aide"}><DropdownMenuItem>Demande d&apos;aide</DropdownMenuItem></Link>
                </DropdownMenuContent>
            </DropdownMenu>
        )

}
