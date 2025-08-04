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
      <main className="pl-16 pt-10 flex items-start justify-between w-full gap-7">
        <div className="md:w-1/2 w-full sm:w-full h-full space-y-8 pt-10">
          <h1
            className="text-[120px] leading-[120px] font-normal Saker text-white"
            aria-label="Nurturing Young Hearts"
          >
            Nurturing
            <br />
            Young Hearts
          </h1>

          <p
            className={`text-xl text-[#4D4D4D] font-normal text-justify ${inter.className}`}
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
          className="w-1/2  items-center justify-end hidden sm:hidden md:flex "
          role="img"
          aria-label="Hero image or illustration"
        >
          <Icons.Hero1 className="-mt-32" />
        </div>
      </main>
    </section>
  );
}
