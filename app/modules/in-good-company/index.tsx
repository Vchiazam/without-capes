"use client";
import { JSX } from "react";

export function InGoodCompany(): JSX.Element {
  return (
    <section className="px-16">
      <main className="flex basis-1 items-center justify-center flex-col w-full space-y-4">
        <h1 className="text-[120px]">In good company!</h1>
        <p className="text-center max-w-3xl text-[20px] mb-8">
          From teachers to parents and guardians, the general public absolute
          loves Without Capes and find that our products are incredibly helpful
          in raising kids.
        </p>
        <div role="presentation" className="space-x-3 flex w-full">
          {Array.from({
            length: 5,
          }).map((_, index) => (
            <div
              className="bg-[#2CA474] rounded-3xl w-full p-1  h-[15em]"
              key={index}
            />
          ))}
        </div>
        <h6 className="max-w-96 text-center mt-4 text-base">
          We&apos;ve also enjoyed the support of incredible organization who
          believe in our mission.
        </h6>
      </main>
    </section>
  );
}
