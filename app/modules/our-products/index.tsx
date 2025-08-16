"use client";
import { JSX, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Journal1 from "@/public/Green Values Journal.png";
import Journal2 from "@/public/Red Values Journal.png";
import Superheroes from "@/public/Superheroeas.png";
import Link from "next/link";

export function OurProducts(): JSX.Element {
  const autoplay = useMemo(() => Autoplay({ delay: 4000 }), []);
  const products = [
    {
      id: 1,
      name: "Green Life Values Journal",
      price: "N35,000",
      img: Journal1,
      link: "https://selfany.com/f44uHO",
    },
    {
      id: 2,
      name: "Red Life Values Journal",
      price: "N35,000",
      img: Journal2,
      link: "https://selfany.com/withoutcapes",
    },
    {
      id: 3,
      name: "Superheroes without capes",
      price: "N7,500",
      img: Superheroes,
      link: "https://selfany.com/swc",
    },
    {
      id: 4,
      name: "Red Life Values Journal",
      price: "N35,000",
      img: Journal2,
      link: "https://selfany.com/withoutcapes",
    },
  ];
  return (
    <section className="md:px-16 px-10" id="products-section">
      <main className="flex  justify-center flex-col items-center space-y-10 h-full pt-20">
        <h1 className="text-[#2CA474] text-4xl md:text-7xl light-text">
          Explore our products
        </h1>

        <Carousel
          plugins={[autoplay]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl"
        >
          <CarouselContent className="-ml-4">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <Card className="border-0 shadow-none">
                  <CardContent className="p-0">
                    <div className="bg-[#F9BB40]  overflow-hidden rounded-3xl items-center justify-center products h-[485px] lg:h-[450px] w-full flex flex-col">
                      <div className="h-full bg-[#D9D9D9] w-full flex items-center justify-center">
                        <Image
                          alt="Children playing in a classroom"
                          src={product.img}
                          className="h-full w-auto object-contain overflow-hidden"
                          sizes="(min-width:1024px) 50vw, 100vw"
                          priority
                        />
                      </div>
                      <div className="space-y-2 p-6 pb-8 h-1/2">
                        <p className="text-[#231F20] text-sm font-medium">
                          {product.name}
                        </p>
                        <p
                          className="text-gray-900 text-3xl font-bold medium-text text-center"
                          // style={{
                          //   fontWeight: 500,
                          // }}
                        >
                          {product.price}
                        </p>
                        <Link href={product.link} target="_blank">
                          <Button
                            className="bg-white  text-gray-800 hover:bg-gray-100 rounded-full px-6 py-2 text-sm font-medium w-full"
                            size="sm"
                          >
                            Buy
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </main>
    </section>
  );
}
