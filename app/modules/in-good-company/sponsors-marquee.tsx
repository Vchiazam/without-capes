"use client";

import Marquee from "react-fast-marquee";
import sp1 from "@/public/sponsors/Greenspring.jpg";
import sp2 from "@/public/sponsors/The-RiverBank-School-Logo-Changing-Website2.png";
import sp3 from "@/public/sponsors/fbis_technologies_ltd_logo.jpeg";
import sp4 from "@/public/sponsors/images (1).jpeg";
import sp5 from "@/public/sponsors/images (2).png";
import sp6 from "@/public/sponsors/mghs-llogo.jpg";
import sp7 from "@/public/sponsors/unified-Payments.jpg";
import sp8 from "@/public/sponsors/new.png";
import sp9 from "@/public/sponsors/images (1).png";

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
];

export default function SponsorsMarquee() {
  return (
    <div className="w-full bg-[#F2F2F2] py-8">
      <Marquee
        gradient={false} // no fading edges
        speed={40} // pixels per second
        pauseOnHover // pause when hovered
      >
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
