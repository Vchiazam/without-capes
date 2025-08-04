import Image from "next/image";
import { Navbar } from "./components/nav-bar";
import { Footer } from "./components/footer";
import { HeroSection } from "./modules/hero-section";
import { MissionSection } from "./modules/mission-section";
import { OurProducts } from "./modules/our-products";
import { InGoodCompany } from "./modules/in-good-company";
import { ContactUs } from "./modules/contact-us";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MissionSection />
      <OurProducts />
      <InGoodCompany />
      <ContactUs />
      <Footer />
    </div>
  );
}
