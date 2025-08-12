import { JSX } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
export function OurProducts(): JSX.Element {
  const products = [
    { id: 1, name: "Red Values Journal", price: "N35,000" },
    { id: 2, name: "Red Values Journal", price: "N35,000" },
    { id: 3, name: "Red Values Journal", price: "N35,000" },
    { id: 4, name: "Blue Values Journal", price: "N42,000" },
    { id: 5, name: "Green Values Journal", price: "N38,000" },
    { id: 6, name: "Purple Values Journal", price: "N40,000" },
  ];
  return (
    <section className="md:px-16 px-10" id="products-section">
      <main className="flex  justify-center flex-col items-center space-y-10 h-full pt-20">
        <h1 className="text-[#2CA474] text-4xl md:text-7xl light-text">
          Explore our products
        </h1>

        <Carousel
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
                    <div className="bg-[#F9BB40] rounded-3xl items-center justify-center p-6 h-[500px] w-full flex flex-col">
                      <div className="flex-1" />
                      <div className="space-y-3">
                        <p className="text-gray-800 text-sm">{product.name}</p>
                        <p
                          className="text-gray-900 text-3xl font-bold medium-text"
                          // style={{
                          //   fontWeight: 500,
                          // }}
                        >
                          {product.price}
                        </p>
                        <Button
                          className="bg-white text-gray-800 hover:bg-gray-100 rounded-full px-6 py-2 text-sm font-medium w-full"
                          size="sm"
                        >
                          Buy
                        </Button>
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
