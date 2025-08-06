import { JSX } from "react";
import { Inter } from "next/font/google";
import { Button } from "../../components/ui/button";
import { Icons } from "../../components/icons";

const inter = Inter({ subsets: ["latin"] });

export function HeroSection(): JSX.Element {
  return (
    <section
      aria-label="Hero section"
      className="w-full bg-[#F9BB40] "
      role="region"
    >
      <main className="md:pl-16 pl-0  pt-10 flex items-center justify-between w-full gap-7 ">
        <div className="md:w-1/2 w-full sm:w-full px-10 md:px-0  h-full space-y-8 py-10 md:py-0 md:-pt-14 pt-10 ">
          <h1
            className="md:text-[120px] text-[80px] md:leading-[120px] leading-[80px] font-normal Saker  text-white"
            aria-label="Nurturing Young Hearts"
          >
            Nurturing
            <br />
            Young Hearts
          </h1>

          <p
            className={`md:text-xl text-base text-[#4D4D4D] font-normal text-left md:text-justify ${inter.className}`}
          >
            We&apos;re a movement to create a better tomorrow by <br />
            shaping kids to be kind, loving and decent humans, <br />
            teaching them they don&apos;t need capes and <br />
            superpowers to be superheroes.
          </p>

          <div className="space-x-4 flex ">
            <Button
              variant="outline"
              className="flex h-10 bg-transparent cursor-pointer border border-[#0A64A2] text-[#0A64A2] hover:bg-transparent hover:text-[#0A64A2] px-6 py-3 rounded-4xl shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F9BB40]"
              aria-label="More About us"
            >
              More About us
            </Button>
            <Button
              variant="outline"
              className="flex bg-[#0A64A2] hover:bg-[#0a65a2f1] h-10  cursor-pointer border border-none  hover:text-white text-white px-6 py-3 rounded-4xl shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A64A2]"
              aria-label="Browse and buy products"
            >
              Buy Products
            </Button>
          </div>
        </div>

        <div
          className="w-full lg:w-1/2 items-baseline -mt-10 lg:-mt-32 justify-end hidden lg:flex"
          role="img"
          aria-label="Hero image or illustration"
        >
          <Icons.Hero1 />
        </div>
      </main>
    </section>
  );
}
