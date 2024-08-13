"use client";

import {Input} from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import {useRouter} from "next/navigation";
import {useState} from "react";

type ProfilsCommuSearchProps = {
    page: number;
    searchKey: string | undefined;
}
export default function CommunauteSearch({page, searchKey} : ProfilsCommuSearchProps) {
    const [search, setSearch] = useState(searchKey ?? "");
    const router = useRouter();


    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        const searchKey = e.target.value;
        router.push(`/profils-communaute?searchKey=${searchKey}&page=${page}`);
    }

    return <div className="flex w-full max-w-sm mx-auto mb-8 items-center space-x-2">

        <FaSearch />
        <Input
            value={search}
            onChange={handleSearch}
            className={"text-md"}
            type="search"
            placeholder="Entrez un prénom ou un nom" />

    </div>
}
