"use client";

import Marquee from "react-fast-marquee";
import sp1 from "@/public/sponsors/Greenspring.png";
import sp2 from "@/public/sponsors/riverbank.png";
import sp3 from "@/public/sponsors/fbis.png";
import sp4 from "@/public/sponsors/Beehive.png";
import sp5 from "@/public/sponsors/Greenwood.png";
import sp6 from "@/public/sponsors/methodist-girls.png";
import sp7 from "@/public/sponsors/unified-Payments.png";
import sp8 from "@/public/sponsors/alphageek.png";
import sp9 from "@/public/sponsors/payattitude.png";
import sp10 from "@/public/sponsors/bells.png";
import sp11 from "@/public/sponsors/kings-college.png";

import Image from "next/image";

const sponsors = [
  { name: "Greenspring", logo: sp1 },
  { name: "The-RiverBank-School", logo: sp2 },
  { name: "fbis_technologies", logo: sp3 },
  { name: "Beehive-logo", logo: sp4 },
  { name: "Greenwood-logo", logo: sp5 },
  { name: "methodist-girls", logo: sp6 },
  { name: "unified-payments", logo: sp7 },
  { name: "alphageek", logo: sp8 },
  { name: "payattitude", logo: sp9 },
  { name: "bell-log", logo: sp10 },
  { name: "kings-college", logo: sp11 },
];

export default function SponsorsMarquee() {
  return (
    <div className="w-full bg-[#F2F2F2] py-8">
      <Marquee gradient={false} speed={40} pauseOnHover>
        {sponsors.map((sponsor, index) => (
          <div key={index} className="mx-8 flex-shrink-0">
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              className="h-8 w-auto object-contain hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
