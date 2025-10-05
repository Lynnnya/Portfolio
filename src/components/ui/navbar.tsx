"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { navLinks } from "../../../navLinksDef";

interface NavbarProps {
  displayLinks?: string[];
  title?: string;
  socials?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({
  displayLinks,
  title = "Lynn Chen",
  socials = (
    <Link
      href="https://www.instagram.com/androlynnn/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <Instagram className="w-6 h-6 text-zinc-200 hover:text-zinc-400 transition-colors" />
    </Link>
  ),
}) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linksToRender = navLinks
    .filter((link) => {
      if (pathname === "/") return ["About"].includes(link.name);
      return true;
    })
    .map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          className={`text-xl ${pathname === link.href ? "font-bold" : ""}`}
        >
          {link.name}
        </Link>
      </li>
    ));

  return (
    <nav className="w-full sticky bg-zinc-950 text-white p-8">
      <div className="flex top-8 right-8 left-8 justify-between items-center">
        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6">{linksToRender}</ul>

        {/* Title */}
        <div className="text-6xl items-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/8">
          <p className="text-[clamp(1rem, 2vw+0.5rem, 2rem)]">{title}</p>
        </div>

        {/* Socials */}
        <div className="flex space-x-6 justify-center">{socials}</div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">
            {mobileMenuOpen ? "Close main menu" : "Open main menu"}
          </span>
          ☰
        </button>
      </div>

      {/* Mobile links */}
      <ul
        id="mobile-menu"
        className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} mt-2`}
      >
        {linksToRender}
      </ul>
    </nav>
  );
};

export default Navbar;
