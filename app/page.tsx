import Image from "next/image";
import { Navbar } from "./components/nav-bar";
import { Footer } from "./components/footer";
import { HeroSection } from "./modules/hero-section";
import { MissionSection } from "./modules/mission-section";
import { OurProducts } from "./modules/our-products";
import { InGoodCompany } from "./modules/in-good-company";
import { ContactUs } from "./modules/contact-us";
import { OurVideo } from "./modules/our-video";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <MissionSection />
        <OurProducts />
        <InGoodCompany />
        <OurVideo />

        <ContactUs />
      </main>

      <Footer />
    </div>
  );
}
