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
                        <DropdownMenuItem>Introduction</DropdownMenuItem>
                        <DropdownMenuItem>Html / Css</DropdownMenuItem>
                        <DropdownMenuItem>Javascript / React</DropdownMenuItem>
                        <DropdownMenuItem>Next.js</DropdownMenuItem>
                    </DropdownMenuGroup>


                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Exercices</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>Introduction</DropdownMenuItem>
                        <DropdownMenuItem>Html / Css</DropdownMenuItem>
                        <DropdownMenuItem>Javascript / React</DropdownMenuItem>
                        <DropdownMenuItem>Next.js</DropdownMenuItem>
                    </DropdownMenuGroup>


                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profil</DropdownMenuItem>
                    <DropdownMenuItem>Demande d&apos;aide</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Déconnexion</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )

}
