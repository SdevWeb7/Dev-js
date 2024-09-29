import Logo from "@/components/logo";
import MenuDesktop from "@/components/header/menu-desktop";
import MenuMobile from "@/components/header/menu-mobile";


const hrefs = [
    {
        title: 'Introduction',
        href: '/introduction'
    },
    {
        title: 'Html & Css',
        href: '/html-css'
    },
    {
        title: 'Javascript & React',
        href: '/javascript-react'
    },
    {
        title: 'Next.js',
        href: '/next-js'
    }
]
export default async function Header() {

    return <header className={'bg-white py-2 px-2 lg:px-8 border-b-2 sticky top-0 z-30'}>

        <div className={"flex items-center justify-between"}>
            <Logo />

            <MenuDesktop hrefs={hrefs} />

            <MenuMobile hrefs={hrefs} />
        </div>
    </header>
}
