import Link from "next/link";
import logo from "@/../public/logo.jpg";
import Image from "next/image";

export default function Logo() {

    return <Link href={'/'} className={'text-2xl font-bold flex items-center'}>
        <Image className={'hidden xs:block'} src={logo} alt={"Dev.js logo"} width={60} height={60} />
        <p className={"mt-2 ml-2"}><span className={'text-my-primary'}>Dev</span>.js</p>
    </Link>;
}
