"use client";
import { JSX } from "react";
import { Icons } from "@/app/components/icons";
import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";
import desktopImg from "@/public/Contact.svg";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export function ContactUs(): JSX.Element {
  return (
    <section className="md:px-16 px-10 md:p-16 p-10 " id="contact-section">
      <main className="md:flex  md:flex-row flex-col items-center gap-12 justify-center">
        <div className="max-w-[349px] space-y-5 md:space-y-0 p-2 md:h-[200px] mb-5 md:mb-0  h-full">
          <header>
            <h1 className="w-[326px]  light-text text-[55px] leading-[55px] text-[#2CA474]  font-normal md:pb-[3rem]">
              Contact us
            </h1>
          </header>
          <p
            className={`text-sm   text-[#4D4D4D] font-normal pb-[1rem] ${inter.className}`}
          >
            Do you have enquiries or are you interested in supporting our work?
            Send us a quick message, or email us at{" "}
            <span className="font-bold">hello@withoutcapes.com</span>
          </p>
          <a
            href="https://wa.me/2349090236330"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="h-[40px] hover:bg-[#25d365f1] bg-[#25D366] rounded-full px-4 text-white flex items-center justify-between space-x-2">
              <Icons.whatsapp className="size-5" />
              <span className="text-center">Send Message</span>
            </Button>
          </a>
        </div>
        <div className="w-full max-w-[547px] bg-[#FF5548] rounded-4xl p-2 h-[150px] md:h-auto overflow-x-hidden">
          <Image
            alt=""
            src={desktopImg}
            className="w-full h-full object-contain"
          />
        </div>
      </main>
    </section>
  );
}
