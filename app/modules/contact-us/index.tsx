"use client";
import { JSX } from "react";
import { Icons } from "@/app/components/icons";
import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function ContactUs(): JSX.Element {
  return (
    <section className="md:px-16 px-10 md:p-20 p-10 ">
      <main className="md:flex  md:flex-row flex-col gap-8 justify-center">
        <div className="max-w-[349px]  p-2 md:h-[200px]  h-full">
          <header>
            <h1 className="w-[326px]  light-text text-[55px] leading-[55px] text-[#2CA474]  font-normal pb-[3rem]">
              Contact us
            </h1>
          </header>
          <p
            className={`text-sm     text-[#4D4D4D] font-normal pb-[1rem] ${inter.className}`}
          >
            Do you have enquiries or are you interested in supporting our work?
            Send us a quick message, or email us at{" "}
            <span className="font-bold">hello@withoutcapes.com</span>
          </p>
          <Button className=" h-[40px] hover:bg-[#25d365f1] bg-[#25D366] rounded-full  px-4  text-white flex items-center justify-between space-x-2">
            <Icons.whatsapp className="size-5" />
            <span className="text-center">Send Message</span>
          </Button>
        </div>
        <div className="md:w-[547px] w-full bg-[#FF5548] rounded-4xl p-2 md:h-[300px] h-[150px]"></div>
      </main>
    </section>
  );
}
