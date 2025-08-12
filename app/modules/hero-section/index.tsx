import { JSX } from "react";
import { Inter } from "next/font/google";
import { Button } from "../../components/ui/button";
import { Icons } from "../../components/icons";
import Image from "next/image";
import heroImg from "@/public/Hero 1 1.svg";

const inter = Inter({ subsets: ["latin"] });

export function HeroSection(): JSX.Element {
  return (
    <section
      aria-label="Hero section"
      role="region"
      className="w-full bg-[#F9BB40] h-[min(calc(100vh-60px),750px)] overflow-hidden"
    >
      <main className="h-full md:pl-16 pl-4 pt-6 flex items-center justify-between w-full gap-7 overflow-hidden">
        <div className="md:w-1/2 w-full px-6 md:px-0 h-full flex flex-col justify-center space-y-6">
          <h1
            className={`font-normal Saker text-[clamp(2.5rem,7.5vw,7.5rem)] leading-[clamp(2.6rem,7.8vw,7.6rem)] break-words text-white`}
            aria-label="Nurturing Young Hearts"
          >
            Nurturing
            <br />
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

          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              className="flex h-12 min-w-[150px] bg-transparent cursor-pointer border border-[#0A64A2] text-[#0A64A2] hover:bg-transparent hover:text-[#0A64A2] px-6 py-3 rounded-4xl shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F9BB40]"
              aria-label="More About us"
            >
              More About us
            </Button>

            <Button
              variant="outline"
              className="flex h-12 min-w-[150px] bg-[#0A64A2] hover:bg-[#0a65a2f1] cursor-pointer border-none hover:text-white text-white px-6 py-3 rounded-4xl shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A64A2]"
              aria-label="Browse and buy products"
            >
              Buy Products
            </Button>
          </div>
        </div>

        <figure className="hidden lg:flex w-full lg:w-1/2 items-center justify-end h-full ">
          <div className="h-[100%] max-h-[1000px] w-auto ">
            <Image
              alt="Children playing in a classroom"
              src={heroImg}
              className="h-full w-auto object-contain overflow-hidden"
              sizes="(min-width:1024px) 50vw, 100vw"
              priority
              // placeholder="blur"
            />
          </div>
        </figure>
      </main>
    </section>
  );
}
