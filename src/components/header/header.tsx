import Logo from "@/components/logo";
import MenuDesktop from "@/components/header/menu-desktop";
import MenuMobile from "@/components/header/menu-mobile";


const hrefs = [
    {
        title: 'Introduction',
        href: '/introduction'
    },
    {
        title: 'Html / Css',
        href: '/html-css'
    },
    {
        title: 'Javascript / React',
        href: '/javascript-react'
    },
    {
        title: 'Next.js',
        href: '/next-js'
    }

    ]
export default async function Header() {

    return <header className={'flex items-center justify-between border-b-2'}>

        <Logo />


        <MenuDesktop hrefs={hrefs} />

        <MenuMobile hrefs={hrefs} />

    </header>
}
