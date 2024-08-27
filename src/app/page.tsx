"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import htmlImage from "@/../public/html5-css3.png";
import jsReactImage from "@/../public/js-react.png";
import nextjsImage from "@/../public/next-js.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Main from "@/components/main";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from "@/components/ui/table";
import SpanCourse from "@/components/cours/span-course";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { toast } = useToast();

  useEffect(() => {
    if (searchParams.successPaiement) {
      toast({
        description:
          "Paiement effectué avec succès. Vous pouvez maintenant accéder à tous nos cours.",
      });
    } else if (searchParams.successLogin) {
      toast({
        description: "Vous êtes bien connecté.",
      });
    } else if (searchParams.successSignUp) {
      toast({
        description: "Vous êtes bien inscrit.",
      });
    } else if (searchParams.successLogout) {
      toast({
        description: "Vous êtes bien déconnecté.",
      });
    }
    searchParams.successPaiement = undefined;
    searchParams.successLogin = undefined;
    searchParams.successLogout = undefined;
    searchParams.successSignUp = undefined;
  }, [
    searchParams.successSignUp,
    searchParams.successLogin,
    searchParams.successLogout,
    searchParams.successPaiement,
  ]);

  return (
    <Main className={"flex flex-col items-center justify-center min-h-[80vh]"}>


      <div className={"flex flex-wrap justify-center items-center gap-28 mt-8"}>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-7xl min750:leading-tight">
          <span className={"text-my-primary"}>Dev</span>.js,<br/>
            les bases du<br/><SpanCourse>
            développement web
          </SpanCourse>
        </h1>

        <div>
          <h2 className={"text-center text-4xl font-extrabold text-my-primary mb-8 min750:mr-12"}>
                Que vais-je apprendre?
          </h2>


          <Carousel className={"overflow-hidden w-full sm:max-w-[500px] sm:overflow-visible min750:mr-12"}>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src={htmlImage}
                  alt={"html et css"}
                  width={300}
                  height={300}
                  className={"w-full"}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={jsReactImage}
                  alt={"javascript et react"}
                  width={300}
                  height={300}
                  className={"w-full"}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={nextjsImage}
                  alt={"next js"}
                  width={300}
                  height={300}
                  className={"w-full"}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>


      <h2 className={"text-3xl mt-16"}>Notre offre</h2>
      <Table className={"max-w-2xl mx-auto border mt-8"}>
        <TableBody>
          <TableRow>
            <TableCell>4 cours d&apos;introduction</TableCell>
            <TableCell className="text-right">0€</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4 cours HTML / CSS</TableCell>
            <TableCell className="text-right">0€</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4 cours Javascript / React</TableCell>
            <TableCell className="text-right">0€</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4 cours Next.js</TableCell>
            <TableCell className="text-right">0€</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell className="text-right">0€</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <Button asChild className={"py-6 px-4 mt-8"}>
        <Link href={"/cours/introduction"}>Commencer le parcours</Link>
      </Button>
    </Main>
  );
}
