import {Suspense} from "react";
import {MDXRemote} from "next-mdx-remote-client/rsc";
import {MDX_COMPONENTS} from "@/lib/mdx/mdx-components";
import {rehypePlugin} from "@/lib/mdx/mdx-plugin";

export default function MdxRemote({children}: {children: string}) {

    return <Suspense fallback={<div>Loading ...</div>}>

        <MDXRemote
            source={children}
            components={MDX_COMPONENTS}
            options={{
                mdxOptions: {
                    // rehypePlugins: rehypePlugin
                }
            }} />

    </Suspense>
}
