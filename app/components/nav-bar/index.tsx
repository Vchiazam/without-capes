import { JSX } from "react";
import { Icons } from "../icons";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function Navbar(): JSX.Element {
  return (
    <nav
      className="bg-[#D9D9D9] h-[90px] sticky top-0 z-50 flex px-12 justify-between items-center"
      aria-label="Main navigation"
    >
      <div className="flex-shrink-0" aria-label="Homepage">
        <Link href="/" aria-label="Home">
          <Icons.Logo className="h-36" role="img" aria-hidden="true" />
        </Link>
      </div>

      <ul
        className="flex bg-transparent p-4 space-x-14 list-none"
        role="menubar"
      >
        {["About", "Products", "Testimonials", "Contact"].map((item) => (
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
    </nav>
  );
}
