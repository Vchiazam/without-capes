"use client";

import { useEffect, useRef } from "react";
import sp1 from "@/public/sponsors/Greenspring.jpg";
import sp2 from "@/public/sponsors/The-RiverBank-School-Logo-Changing-Website2.png";
import sp3 from "@/public/sponsors/fbis_technologies_ltd_logo.jpeg";
import sp4 from "@/public/sponsors/images (1).jpeg";
import sp5 from "@/public/sponsors/images (2).png";
import sp6 from "@/public/sponsors/mghs-llogo.jpg";
import sp7 from "@/public/sponsors/unified-Payments.jpg";
import Image from "next/image";

const sponsors = [
  { name: "Greenspring", logo: sp1 },
  { name: "The-RiverBank-School", logo: sp2 },
  { name: "fbis_technologies", logo: sp3 },
  { name: "sponsor-4", logo: sp4 },
  { name: "sponsor-5", logo: sp5 },
  { name: "sponsor-6", logo: sp6 },
  { name: "sponsor-7", logo: sp7 },
];

export default function SponsorsMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const scrollWidth = marquee.scrollWidth;
    const clientWidth = marquee.clientWidth;

    let animationId: number;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;

      if (Math.abs(position) >= scrollWidth / 2) {
        position = 0;
      }

      marquee.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#F2F2F2] py-8">
      <div
        ref={marqueeRef}
        className="flex items-center gap-16 whitespace-nowrap"
        style={{ width: "max-content" }}
      >
        {sponsors.map((sponsor, index) => (
          <div key={`first-${index}`} className="flex-shrink-0">
            <Image
              src={sponsor.logo || "/placeholder.svg"}
              alt={sponsor.name}
              className="h-8 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {sponsors.map((sponsor, index) => (
          <div key={`second-${index}`} className="flex-shrink-0">
            <Image
              src={sponsor.logo || "/placeholder.svg"}
              alt={sponsor.name}
              className="h-8 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}

        {/* Third set for extra smoothness */}
        {sponsors.map((sponsor, index) => (
          <div key={`third-${index}`} className="flex-shrink-0">
            <Image
              src={sponsor.logo || "/placeholder.svg"}
              alt={sponsor.name}
              className="h-8 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
