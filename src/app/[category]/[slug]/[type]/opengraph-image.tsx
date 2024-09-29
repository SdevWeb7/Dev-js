
import notFound from "@/app/not-found";
import {ImageResponse} from "next/og";
import {Course} from "@/lib/mdx/cours-mdx";

const url = process.env.VERCEL_URL ? `https://dev-js7.vercel.app` : "http://localhost:3000";
export const alt = "Dev.js open graph image";
export const size = {
    width: 1200,
    height: 630
};

type OgImageProps = {
    params: {
        category: string;
        slug: string;
        type: string;
    }
}
export default async function OgImagePage({params}: OgImageProps) {
    const course = (await fetch(`${url}/api/course/${params.category}/${params.slug}/${params.type}`).then((res) =>
        res.json()
    )) as Course;

    if (!course) {
        return notFound();
    }

    return new ImageResponse(
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",

                position: "relative",
                gap: 16,

                color: "white",
                backgroundColor: "#090910",
                opacity: "1",
            }}>

            <img
                src={`${url}/${course.logoImgSrc}`}
                alt="bg"
                tw="absolute flex top-0 left-0 right-0 -bottom-20" />

            <div
                tw="flex flex-col justify-start items-start h-full flex-1 px-16 py-24"
                style={{gap: 16}}>

                <p
                    style={{
                        fontFamily: "Space Grotesk",
                    }}
                    tw="text-3xl font-bold m-0">Dev.js</p>


                <p tw="text-6xl m-0 mt-0">{course.title}</p>


                <p tw={'text-xl'}>{course.description}</p>

                <p tw={'ml-12'}>{course.duration}</p>
            </div>

        </div>, {...size});

}
