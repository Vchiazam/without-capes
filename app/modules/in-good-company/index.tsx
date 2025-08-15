"use client";
import type { JSX } from "react";
import { Inter } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const inter = Inter({ subsets: ["latin"] });

export function InGoodCompany(): JSX.Element {
  const testimonials = Array.from({ length: 8 }).map((_, index) => ({
    id: index,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }));

  return (
    <section className="md:px-16 px-10 pt-24" id="testimonials-section">
      <main className="flex basis-1 items-center justify-center flex-col w-full space-y-8">
        <h1 className="md:text-[120px] text-[50px] md:leading-[120px] leading-[40px] Saker text-[#2CA474]">
          In good company!
        </h1>
        <p
          className={`text-center max-w-xl md:text-[18px] text-sm md:font-normal font-light mb-8 text-[#4D4D4D] ${inter.className}`}
        >
          From teachers to parents and guardians, the general public absolute
          loves Without Capes and find that our products are incredibly helpful
          in raising kids.
        </p>

        <div className="w-full max-w-6xl">
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div
                    tabIndex={0}
                    role="article"
                    aria-label={`Testimonial from ${testimonial.name}`}
                    className="bg-[#2CA474] space-y-3 rounded-3xl p-1 flex flex-col items-center justify-center h-[17em] focus:outline-none focus:ring-2 focus:ring-[#2CA474] focus:ring-offset-2"
                  >
                    <div className="size-20 bg-[#D9D9D9] rounded-full justify-center items-center flex" />
                    <p
                      className={`max-w-[25em] text-center md:text-[12px] text-white text-[10px] md:font-normal font-normal ${inter.className}`}
                    >
                      {testimonial.text}
                    </p>
                    <p className={`text-white ${inter.className}`}>
                      {testimonial.name}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white shadow-lg hover:shadow-xl border-0 text-[#2CA474]" />
            <CarouselNext className="bg-white shadow-lg hover:shadow-xl border-0 text-[#2CA474]" />
          </Carousel>
        </div>

        <h6
          className={`max-w-96 text-center mt-8 md:text-[18px] text-[#4D4D4D] text-sm md:font-normal font-normal ${inter.className}`}
        >
          We&apos;ve also enjoyed the support of incredible organization who
          believe in our mission.
        </h6>
      </main>
    </section>
  );
}
