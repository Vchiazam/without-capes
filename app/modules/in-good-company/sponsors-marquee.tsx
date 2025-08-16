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
import sp12 from "@/public/sponsors/Greenspring.jpg";

import Image from "next/image";

const sponsors = [
  { name: "Greenspring", logo: sp1 },
  { name: "The-RiverBank-School", logo: sp2 },
  { name: "fbis_technologies", logo: sp3 },
  { name: "sponsor-4", logo: sp4 },
  { name: "sponsor-5", logo: sp5 },
  { name: "sponsor-6", logo: sp6 },
  { name: "sponsor-7", logo: sp7 },
  { name: "sponsor-8", logo: sp8 },
  { name: "sponsor-9", logo: sp9 },
  { name: "sponsor-10", logo: sp10 },
  { name: "sponsor-11", logo: sp11 },
  //   { name: "sponsor-12", logo: sp12 },
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
