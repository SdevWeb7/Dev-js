"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const listeCategories = [
  {
    value: "introduction",
    label: "Introduction",
  },
  {
    value: "cours",
    label: "Cours",
  },
  {
    value: "exercices",
    label: "Exercices",
  },
  {
    value: "pense-betes",
    label: "Pense-Bêtes",
  },
  {
    value: "ressources-utiles",
    label: "Ressources utiles",
  },
];
export default function CourseSectionNavigation() {
  const pathname = usePathname();
  const params = pathname.split("/").filter(Boolean);

  return (
    <div className="lg:sticky lg:top-24">
      <Card className={"border-none shadow-none"}>
        <CardContent className="flex flex-col gap-2 justify-center pt-6">
          {listeCategories.map((categorie, index) => (
            <Link
              key={index}
              href={`/cours/${params[1]}/${params[2]}/${categorie.value}`}
              className={cn("rounded-md text-center p-2", {
                "bg-accent": params[3] === categorie.value,
                "text-white": params[3] === categorie.value,
              })}
            >
              {categorie.label}
            </Link>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
