import {TabsContent} from "@/components/ui/tabs";
import {getCourseMdxContent} from "@/actions/mdx-actions";
import Markdown from "markdown-to-jsx";

type CoursTabContentProps = {
    category: string;
    value: string;
    fileName: string;
}
export default async function CoursTabContent({value, fileName, category} : CoursTabContentProps) {
    const contentMdx = await getCourseMdxContent(category+"/"+fileName);

    return <TabsContent value={value} className={'w-full'}>

                <article className={"prose prose-neutral prose-img:rounded-xl mx-auto"}>

                    <Markdown>
                        {contentMdx}
                    </Markdown>
                </article>

    </TabsContent>
}
