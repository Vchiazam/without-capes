import { Icons } from "@/app/components/icons";
import { JSX } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export function MissionSection(): JSX.Element {
  return (
    <section
      className="px-6 md:px-16 pt-14 w-full"
      aria-labelledby="mission-heading"
      role="region"
      id="about-section"
    >
      <article
        className="bg-[#0A64A2] text-white flex flex-col items-center justify-center rounded-[40px] p-6 md:px-20 md:py-24 gap-12"
        aria-describedby="mission-description"
      >
        <h2
          id="mission-heading"
          className="text-2xl sm:text-4xl md:text-5xl font-semibold text-center leading-snug max-w-4xl NeueHaas"
        >
          Our mission is to design products that support character building and
          value-based education by working closely with educators, parents,
          guardians and the government.
        </h2>

        <Icons.Illu
          className="h-[120px] sm:h-[160px] md:h-[300px] w-full"
          role="presentation"
          aria-hidden="true"
        />

        <p
          id="mission-description"
          className={`text-[clamp(0.9rem,1.8vw,1.1rem)] font-normal text-center leading-relaxed max-w-2xl ${inter.className}`}
        >
          We aim to equip children with the mindset and tools to be everyday
          superheroes through their acts of kindness, empathy, and
          responsibility. Since 2022, we&apos;ve been creating products,
          toolkits, and tours that inspire kids to make a positive impact in
          their everyday lives. Our goal is to help raise kind humans who live
          with love and make the world a better place, one small act at a time.
        </p>
      </article>
    </section>
  );
}
