import Logo from "@/components/logo";
import MenuDesktop from "@/components/header/menu-desktop";
import MenuMobile from "@/components/header/menu-mobile";
import Container from "@/components/container";


const hrefs = [
    {
        title: 'Introduction',
        href: '/cours/introduction'
    },
    {
        title: 'Html / Css',
        href: '/cours/html-css'
    },
    {
        title: 'Javascript / React',
        href: '/cours/javascript-react'
    },
    {
        title: 'Next.js',
        href: '/cours/next-js'
    }

    ]
export default async function Header() {

    return <header className={'bg-white py-2 px-8 border-b-2 sticky top-0'}>

        <Container className={"flex items-center justify-between"}>
            <Logo />

            <MenuDesktop hrefs={hrefs} />

            <MenuMobile hrefs={hrefs} />
        </Container>
    </header>
}
