"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function HeroSection({
  title = "WarsPolInvest",
  primaryLinkHref = "#projects",
  secondaryLinkHref = "#contact",
  backgroundImageSrc = "/watertank7.png",
}) {
  return (
    <section
      className="
        relative 
        h-screen          /* TRUE FULLSCREEN */
        w-full 
        overflow-hidden
        flex flex-col 
        justify-center 
        items-center
        text-white
      "
      style={{ margin: 0, padding: 0 }}   /* SAFETY — no spacing leaking */
    >
      {/* Background Image */}
      <Image
        src={backgroundImageSrc}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT — NO container, NO padding */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">

        <h1 className="
          text-5xl sm:text-6xl lg:text-7xl 
          font-bold tracking-tight mb-6
          text-white [text-shadow:0_0_12px_rgba(0,0,0,1)]
        ">
          {title}
        </h1>

        {/* BUTTON ROW */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">

          <a
            href={primaryLinkHref}
            className="
              flex-1 inline-flex items-center justify-center
              bg-gray-900 text-white px-8 py-3 
              rounded-lg font-semibold shadow-xl
              hover:bg-gray-800 transition
            "
          >
            Explore Projects
          </a>

          <a
            href={secondaryLinkHref}
            className="
              flex-1 inline-flex items-center justify-center
              bg-gray-900 text-white border border-white/40 
              px-8 py-3 rounded-lg font-semibold shadow-xl
              hover:bg-gray-800 transition
            "
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 motion-safe:animate-bounce">
        <ChevronDown className="w-6 h-6 text-white opacity-90" strokeWidth={3} />
      </div>
    </section>
  );
}
