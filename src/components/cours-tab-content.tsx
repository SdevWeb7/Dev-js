import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {TabsContent} from "@/components/ui/tabs";

type CoursTabContentProps = {
    value: string;
    title: string;
    description: string;
    content: string;
}
export default function CoursTabContent({value, content, title, description} : CoursTabContentProps) {

    return <TabsContent value={value} className={"sm:w-[70%]"}>
        <Card className={"min-h-[320px] flex flex-col justify-between"}>
            <CardHeader>
                <CardTitle className={'text-center text-2xl'}>{title}</CardTitle>
                <CardDescription className={"text-center text-lg"}>{description}</CardDescription>
            </CardHeader>


            <CardContent>
                <p>{content}</p>

            </CardContent>


            <CardFooter>
                <Button className={'block ml-auto'}>Terminer le cours</Button>
            </CardFooter>
        </Card>
    </TabsContent>
}
