
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {getCourseByCategorySlugAndType} from "@/lib/mdx/cours-mdx";


export const GET = async (
    request: NextRequest,
    props: { params: { category: string; slug: string; type: string } }
) => {
    const { category, type, slug } = props.params;

    const post = await getCourseByCategorySlugAndType(category, slug, type);

    return NextResponse.json(post);
};