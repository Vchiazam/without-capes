"use client";
import { JSX } from "react";
import { Icons } from "@/app/components/icons";
import { Button } from "@/components/ui/button";

export function ContactUs(): JSX.Element {
  return (
    <section className="px-16 p-20 ">
      <main className="flex gap-8 justify-center">
        <div className="max-w-[349px]  p-2 h-[200px] ">
          <header>
            <h1 className="w-[326px]   text-[55px] leading-[55px] text-[#2CA474]  font-normal pb-[3rem]">
              Contact us
            </h1>
          </header>
          <p className="text-[20px]     text-[#4D4D4D] font-normal pb-[1rem]">
            Do you have enquiries or are you interested in supporting our work?
            Send us a quick message, or email us at{" "}
            <span className="font-bold">hello@withoutcapes.com</span>
          </p>
          <Button className=" h-[40px] hover:bg-[#25d365f1] bg-[#25D366] rounded-full  px-4  text-white flex items-center justify-between space-x-2">
            <Icons.whatsapp className="size-5" />
            <span className="text-center">Send Message</span>
          </Button>
        </div>
        <div className="w-[547px] bg-[#FF5548] rounded-4xl p-2 h-[300px]"></div>
      </main>
    </section>
  );
}
