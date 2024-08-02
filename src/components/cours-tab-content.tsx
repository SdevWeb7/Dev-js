import {Card, CardContent} from "@/components/ui/card";
import {TabsContent} from "@/components/ui/tabs";
import {getCourseMdxContent} from "@/actions/mdx-actions";
import Markdown from "markdown-to-jsx";
import {ScrollArea} from "@/components/ui/scroll-area";

type CoursTabContentProps = {
    value: string;
    mdxPath: string;
}
export default async function CoursTabContent({value, mdxPath} : CoursTabContentProps) {
    const contentMdx = await getCourseMdxContent(mdxPath);

    return <TabsContent value={value} className={"w-full sm:w-[70%]"}>
        <Card className={"min-h-[320px] flex flex-col justify-between"}>

            <CardContent>
                <ScrollArea className={"sm:h-[400px]"}>
                <article className={"prose prose-img:rounded-xl w-full"}>

                    <Markdown>
                        {contentMdx}
                    </Markdown>
                </article>
                </ScrollArea>
            </CardContent>


        </Card>
    </TabsContent>
}
