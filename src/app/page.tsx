import {Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext} from "@/components/ui/carousel";
import Image from "next/image";
import htmlImage from '@/../public/html5-css3.png';
import jsReactImage from '@/../public/js-react.png';
import nextjsImage from '@/../public/next-js.jpg';
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return <main className={'mt-20 mb-12'}>

      <div className={'flex justify-around items-center gap-4'}>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              <span className={'text-my-primary italic'}>WebStanSchool</span>,<br/> apprenez à maitriser<br/>les <span className={"font-extrabold text-my-primary"}>technologies actuelles</span> <br/> du développement web <br/>en vous amusant
          </h1>


          <div className={'max-w-[300px]'}>
              <h2 className={'text-center text-2xl font-extrabold text-my-primary mb-4'}>Que vais-je apprendre?</h2>
              <Carousel>
                  <CarouselContent>
                      <CarouselItem>
                          <Image src={htmlImage} alt={'html et css'}></Image>
                      </CarouselItem>
                      <CarouselItem>
                          <Image src={jsReactImage} alt={'javascript et react'}></Image>
                      </CarouselItem>
                      <CarouselItem>
                          <Image src={nextjsImage} alt={'next js'}></Image>
                      </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious/>
                  <CarouselNext/>
              </Carousel>
          </div>
      </div>


      <div className={"flex flex-col items-center gap-4 mt-12"}>
          <ul className="text-lg font-semibold my-6 ml-6 list-disc [&>li]:mt-2">
              <li>50 cours par theme</li>
              <li>50 exercices par theme</li>
              <li>Visio-conférences individuelles et collectives (50h par personne)</li>
          </ul>

          <div className={'flex gap-2'}>
              <Button asChild>
                    <Link href={'/'}>Offre de lancement 89$</Link>
              </Button>


              <Button asChild>
                  <Link href={'/'}>En savoir plus (nos promesses)</Link>
              </Button>
          </div>
      </div>
  </main>;
}
