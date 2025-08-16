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
import Av1 from "@/public/Avatars-01.png";
import Av2 from "@/public/Avatars-02.png";
import Av3 from "@/public/Avatars-03.png";
import Av4 from "@/public/Avatars-04.png";
import Av5 from "@/public/Avatars-06.png";
import Image from "next/image";
import SponsorsMarquee from "./sponsors-marquee";

const inter = Inter({ subsets: ["latin"] });

export function InGoodCompany(): JSX.Element {
  const testimonials = [
    {
      id: 1,
      name: "Yinka Ogedengbe, Parent",
      img: Av1,
      text: "Working on crafting our identity statement yesterday. We had a lot of fun with it, and got a lot of hilarious and thoughtful responses from them- loved the questions.",
    },
    {
      id: 2,
      name: "Principal, Methodist Girls High School,Lagos.",
      img: Av2,

      text: "It is great to see that the values and character deficit in the country are being addressed",
    },
    {
      id: 3,
      name: "Bowale Ikotun, Pastor and Leadership Coach",
      img: Av3,

      text: "I wish my younger self had access to a tool like the without capes journal. I believe it would have helped me with my struggles with low self-esteem and lack of confidence.",
    },
    {
      id: 4,
      name: "Kwala",
      img: Av4,

      text: "This journal is a thoughtful and engaging tool for children to explore and practice important values each month. It encourages reflection, kindness, and personal growth in a fun and meaningful way. A great resource for parents and educators alike.",
    },
    {
      id: 5,
      name: "Ms Regina, Head of School, Riverbank School, Oniru.",
      img: Av5,
      text: "The Without Capes Daily Journal is an outstanding tool for helping pre-teens grow into mindful, responsible, and emotionally aware individuals. Thoughtfully designed for young minds, this planner strikes the perfect balance between structure, creativity, and emotional development.",
    },
  ];

  return (
    <section className="md:px-16 px-10 pt-24" id="testimonials-section">
      <main className="flex basis-1 items-center justify-center flex-col w-full space-y-8">
        <h1 className="md:text-[120px] text-[50px] whitespace-nowrap md:leading-[120px] leading-[40px] Saker text-[#2CA474]">
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
                    className="bg-[#2CA474] space-y-3 rounded-3xl p-1 flex flex-col items-center justify-center h-[18em]  focus:outline-none focus:ring-2 focus:ring-[#2CA474] focus:ring-offset-2"
                  >
                    <div className="size-20 bg-[#D9D9D9] rounded-full justify-center items-center flex">
                      <Image
                        alt={`${testimonial.name}-profile-image`}
                        src={testimonial.img}
                      />
                    </div>
                    <p
                      className={`max-w-[28em] h-[100px]  flex items-center justify-center text-center md:text-[12px] text-white text-[8px] md:font-semibold font-normal ${inter.className}`}
                    >
                      {testimonial.text}
                    </p>
                    <p
                      className={`text-white text-sm h-[40px] font-normal flex items-center md:text-[12px] justify-center  break-words max-w-[200px] text-center ${inter.className}`}
                    >
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
      <section className="mt-10">
        <SponsorsMarquee />
      </section>
    </section>
  );
}
