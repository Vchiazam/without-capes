import { JSX } from "react";
import { Inter } from "next/font/google";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import heroImg from "@/public/Hero 1 1.svg";
import heroMobile from "@/public/Hero 1M.svg";

const inter = Inter({ subsets: ["latin"] });

export function HeroSection(): JSX.Element {
  return (
    <section
      aria-label="Hero section"
      role="region"
      className="w-full bg-[#F9BB40] md:h-[min(calc(100vh-60px),750px)] h-fit overflow-hidden"
    >
      <main className="h-full md:pl-16 pl-4 pt-6 flex flex-col lg:flex-row items-center justify-between w-full gap-7 overflow-hidden">
        <div className="md:w-1/2 w-full px-6 md:px-0 pt-20 h-full flex flex-col justify-center space-y-6">
          <h1
            className="font-normal Saker text-[clamp(2.5rem,7.5vw,7.5rem)] leading-[clamp(2.6rem,7.8vw,7.6rem)] break-words text-white"
            aria-label="Nurturing Young Hearts"
          >
            Nurturing
            <span className="hidden md:inline">
              <br />
            </span>
            <span className="inline md:hidden"> </span>
            Young Hearts
          </h1>

          <p
            className={`text-[clamp(0.875rem,1.8vw,1.125rem)] text-[#4D4D4D] font-normal text-left md:text-justify ${inter.className}`}
          >
            We are a movement committed to creating a better tomorrow by
            nurturing children to grow into kind, loving, and decent humans. We
            teach them that they don&apos;t need capes or superpowers to be
            superheroes—because true heroism is found in everyday acts of love,
            empathy, and responsibility.
          </p>

          <div className="flex  gap-4 w-full">
            <Button
              variant="outline"
              className="
      flex h-12 md:min-w-[150px] min-w-[80px] border border-[#0A64A2] text-[#0A64A2] bg-transparent 
      rounded-4xl px-6 py-3 cursor-pointer 
      transition duration-300 ease-in-out
      hover:bg-white hover:text-[#F9BB40] hover:shadow-md hover:scale-105 hover:border-[#F9BB40]
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F9BB40]
    "
              aria-label="More About us"
            >
              More About us
            </Button>

            <Button
              variant="outline"
              className="
      flex h-12 md:min-w-[150px] min-w-[80px] bg-[#0A64A2] text-white border-none rounded-4xl px-6 py-3 cursor-pointer 
      transition duration-300 ease-in-out
      hover:bg-[#1565ac] hover:shadow-md hover:scale-105 hover:text-white
      active:scale-95
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A64A2]
    "
              aria-label="Browse and buy products"
            >
              Buy Products
            </Button>
          </div>
        </div>

        <figure className="flex w-full lg:w-1/2 items-center justify-center lg:justify-end h-full order-last lg:order-none mt-6 lg:mt-0">
          <div className="h-[100%] md:max-h-[1000px]  w-auto ">
            <Image
              alt="Children playing in a classroom"
              src={heroImg}
              className="h-full w-auto object-contain overflow-hidden"
              sizes="(min-width:1024px) 50vw, 100vw"
              priority
            />
          </div>
        </figure>
      </main>
    </section>
  );
}
