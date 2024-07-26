import {StaticImageData} from "next/image";

export type Course = {
    title: string,
    description: string,
    image: StaticImageData,
    duration: number,
    href: string
}