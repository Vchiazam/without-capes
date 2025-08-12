"use client";

import { JSX, useState } from "react";
import { Icons } from "../icons";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Menu, X } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", target: "about-section" },
    { label: "Products", target: "products-section" },
    { label: "Testimonials", target: "testimonials-section" },
    { label: "Contact", target: "contact-section" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className="bg-white h-[70px] sticky top-0 z-50 px-6 md:px-12 flex items-center justify-between shadow"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="flex-shrink-0" aria-label="Homepage">
        <Link href="/" aria-label="Home">
          <Icons.Logo className="h-10 md:h-20" role="img" aria-hidden="true" />
        </Link>
      </div>

      {/* Desktop Nav */}
      <ul
        className="hidden md:flex bg-transparent p-4 space-x-10 list-none"
        role="menubar"
      >
        {navItems.map(({ label, target }) => (
          <li key={label} role="none">
            <button
              onClick={() => handleScroll(target)}
              className={`${inter.className} cursor-pointer text-[#4D4D4D] font-normal transition-all duration-300 hover:text-[#0A64A2] hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500`}
              role="menuitem"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md md:hidden transition-all duration-200">
          <ul className="flex flex-col space-y-4 p-6" role="menu">
            {navItems.map(({ label, target }) => (
              <li key={label} role="none">
                <button
                  onClick={() => handleScroll(target)}
                  className={`${inter.className} block text-[#4D4D4D] font-normal transition-all duration-300 hover:text-[#0A64A2] hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500`}
                  role="menuitem"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
