import {Input} from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";


export default function ProfilsCommuSearch() {

    return <div className="flex w-full max-w-sm mx-auto mb-8 items-center space-x-2">

        <FaSearch />
        <Input className={"text-md"} type="search" placeholder="Entrez un prénom ou un nom"/>

    </div>
}
