import Link from "next/link";
import logo from "@/../public/logo.jpg";
import Image from "next/image";

export default function Logo() {

    return <Link href={'/'} className={'text-my-primary text-2xl font-bold flex items-center gap-2'}>
        <Image className={'hidden xs:block'} src={logo} alt={"DevWeb logo"} width={60} height={60} />DevWeb</Link>;
}
