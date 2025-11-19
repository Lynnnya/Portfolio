"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { navLinks } from "../../../navLinksDef";
import { navbarThemes } from "@/app/navbarThemes";

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
      <Instagram className="w-6 h-6" />
    </Link>
  ),
}) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 1. Pick theme based on pathname (Option 3)
  const theme =
    navbarThemes[pathname] ||
    navbarThemes[pathname.split("/")[1] ? `/${pathname.split("/")[1]}` : "/"] ||
    navbarThemes["/"]; // fallback

  const linksToRender = navLinks
    .filter((link) => {
      if (pathname === "/") return ["About"].includes(link.name);
      return true;
    })
    .map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          className={`text-xl ${pathname === link.href ? "font-bold underline" : ""
            }`}
        >
          {link.name}
        </Link>
      </li>
    ));

  return (
    <nav className={`w-full sticky p-8 ${theme.bg} ${theme.text}`}>
      <div className="flex top-12 right-12 left-12 justify-between items-center">
        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6">{linksToRender}</ul>

        {/* Title */}
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/8">
          <p className="whitespace-nowrap text-4xl md:text-5xl">
            {title}
          </p>
        </div>

        {/* Socials (theme-aware icons) */}
        <div className={`flex space-x-6 justify-center`}>
          {socials &&
            (Array.isArray(socials)
              ? socials.map((s, i) =>
                s && typeof s === "object" && "props" in s ? (
                  <s.type
                    key={i}
                    {...s.props}
                    className={`${theme.icon} ${s.props.className ?? ""}`}
                  />
                ) : (
                  s
                )
              )
              : "props" in socials
                ? (
                  <socials.type
                    {...socials.props}
                    className={`${theme.icon} ${socials.props.className ?? ""}`}
                  />
                )
                : socials)}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
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
