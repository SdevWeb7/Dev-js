import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";


export default function ProfilsCommuSearch() {

    return <div className="flex w-full max-w-sm mx-auto mb-8 items-center space-x-2">
        <Input type="search" placeholder="Chercher un dev"/>
        <Button type="submit">Chercher un dev</Button>
    </div>
}
