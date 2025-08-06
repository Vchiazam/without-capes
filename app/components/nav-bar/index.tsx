"use client";

import { JSX, useState } from "react";
import { Icons } from "../icons";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Menu, X } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["About", "Products", "Testimonials", "Contact"];

  return (
    <nav
      className="bg-[#D9D9D9] h-[90px] sticky top-0 z-50 px-6 md:px-12 flex items-center justify-between"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="flex-shrink-0" aria-label="Homepage">
        <Link href="/" aria-label="Home">
          <Icons.Logo className="h-14 md:h-36" role="img" aria-hidden="true" />
        </Link>
      </div>

      {/* Desktop Nav */}
      <ul
        className="hidden md:flex bg-transparent p-4 space-x-8 list-none"
        role="menubar"
      >
        {navItems.map((item) => (
          <li key={item} role="none">
            <Link
              href={`/${item.toLowerCase()}`}
              className={`${inter.className} text-[#4D4D4D] font-normal focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500`}
              role="menuitem"
            >
              {item}
            </Link>
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
        <div className="absolute top-[90px] left-0 w-full bg-[#D9D9D9] shadow-md md:hidden transition-all duration-200">
          <ul className="flex flex-col space-y-4 p-6" role="menu">
            {navItems.map((item) => (
              <li key={item} role="none">
                <Link
                  href={`/${item.toLowerCase()}`}
                  className={`${inter.className} block text-[#4D4D4D] font-normal focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500`}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
