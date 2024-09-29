import NavbarLinks from "@/components/header/navbar-links";


type menuDesktopProps = {
    hrefs: { title: string; href: string; }[]
}
export default async function MenuDesktop({hrefs}: menuDesktopProps) {


    return <nav className={"hidden min800:flex"}>

        <NavbarLinks hrefs={hrefs} />

    </nav>
}
