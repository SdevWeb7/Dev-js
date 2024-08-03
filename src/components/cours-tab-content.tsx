import {TabsContent} from "@/components/ui/tabs";
import {getCourseMdxContent} from "@/actions/mdx-actions";
import Markdown from "markdown-to-jsx";

type CoursTabContentProps = {
    value: string;
    mdxPath: string;
}
export default async function CoursTabContent({value, mdxPath} : CoursTabContentProps) {
    const contentMdx = await getCourseMdxContent(mdxPath);

    return <TabsContent value={value} className={'w-full'}>

                <article className={"prose prose-neutral prose-img:rounded-xl mx-auto"}>

                    <Markdown>
                        {contentMdx}
                    </Markdown>
                </article>

    </TabsContent>
}
