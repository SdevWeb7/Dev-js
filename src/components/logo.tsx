import Link from "next/link";
import logo from "@/../public/logo.jpg";
import Image from "next/image";

export default function Logo() {

    return <Link href={'/'} className={'text-my-primary text-xl font-bold flex items-center gap-2'}>
        <Image src={logo} alt={"WebStan School logo"} width={60} height={60} />
        WebStan School
    </Link>;
}
