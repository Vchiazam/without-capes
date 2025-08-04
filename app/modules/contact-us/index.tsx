"use client";
import { JSX } from "react";
import { Icons } from "@/app/components/icons";

export function ContactUs(): JSX.Element {
  return (
    <section className="px-16 p-10 pb-[10rem]">
      <main className="flex gap-4 justify-center">
        <div className="w-1/4  p-2 h-[200px] ">
          <header>
            <h1 className="w-[326px]  font-neue text-[55px] leading-[55px] text-[#2CA474]  font-normal pb-[3rem]">
              Contact us
            </h1>
          </header>
          <p className="text-1x2  text-[#4D4D4D] font-normal pb-[1rem]">
            Do you have enquiries or are you interested in supporting our work?
            Send us a quick message, or email us at{" "}
            <span className="font-bold">hello@withoutcapes.com</span>
          </p>
          <button className="w-90% bg-[#25D366] rounded-full p-2  text-white flex items-center justify-between">
            <Icons.whatsapp className="inline-block mr-2" />
            <span className="mr-2 ml-4">Send Message</span>
          </button>
        </div>
        <div className="w-1/3 bg-[#FF5548] rounded-4xl p-2 h-[300px]"></div>
      </main>
    </section>
  );
}
