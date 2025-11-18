"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Topbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-lg" : "bg-transparent"}
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link
          href="/"
          className={`text-2xl font-semibold tracking-wide transition-all duration-300 
            ${scrolled ? "text-gray-900" : "text-white"}
          `}
        >
          WarsPolInvest
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <DesktopItem href="/projects" label="Projects" scrolled={scrolled} />
          <DesktopItem href="/about" label="About" scrolled={scrolled} />
          <DesktopItem href="/contact" label="Contact" scrolled={scrolled} />
        </div>

        {/* MOBILE MENU BUTTON */}
       {/* MOBILE MENU BUTTON */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden w-10 h-10 flex flex-col justify-center items-center"
>
  {/* TOP BAR */}
  <span
    className={`h-[3px] w-7 rounded bg-white transition-all duration-300
      ${menuOpen ? "rotate-45 translate-y-2" : ""}
    `}
    style={{ boxShadow: "0 0 3px rgba(0,0,0,0.7)" }}
  ></span>

  {/* MIDDLE BAR */}
  <span
    className={`h-[3px] w-7 rounded bg-white my-1.5 transition-all duration-300
      ${menuOpen ? "opacity-0" : ""}
    `}
    style={{ boxShadow: "0 0 3px rgba(0,0,0,0.7)" }}
  ></span>

  {/* BOTTOM BAR */}
  <span
    className={`h-[3px] w-7 rounded bg-white transition-all duration-300
      ${menuOpen ? "-rotate-45 -translate-y-2" : ""}
    `}
    style={{ boxShadow: "0 0 3px rgba(0,0,0,0.7)" }}
  ></span>
</button>

      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl w-full shadow-lg border-t border-gray-200 flex flex-col items-center py-6 space-y-4">
          <MobileItem href="/projects" label="Projects" close={() => setMenuOpen(false)} />
          <MobileItem href="/about" label="About" close={() => setMenuOpen(false)} />
          <MobileItem href="/contact" label="Contact" close={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}

/* Desktop item — explicit color */
function DesktopItem({ href, label, scrolled }) {
  return (
    <Link
      href={href}
      className={`transition-all duration-300
        ${scrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-300"}
      `}
    >
      {label}
    </Link>
  );
}

/* Mobile dropdown items */
function MobileItem({ href, label, close }) {
  return (
    <Link
      href={href}
      onClick={close}
      className="text-gray-900 hover:text-blue-600 transition text-lg"
    >
      {label}
    </Link>
  );
}
