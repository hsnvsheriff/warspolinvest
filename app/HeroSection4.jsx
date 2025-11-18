"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection4() {
  const items = [
    { src: "/interior1.png", label: "Interior Precision" },
    { src: "/luxuryliving.png", label: "Luxury Living" },
    { src: "/watertank1.png", label: "Infrastructure" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-gray-200 py-32">

      {/* TITLE */}
      <div className="text-center mb-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-2">
          Crafted With Purpose
        </h1>

        {/* spacing increased — clean look */}
        <p className="text-gray-600 mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          Architecture shaped by precision, clarity and intention.
        </p>
      </div>

      {/* IMAGE TILES */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10">
        <Tile item={items[0]} height="h-[260px]" />
        <Tile item={items[2]} height="h-[420px]" />
        <Tile item={items[1]} height="h-[260px]" />
      </div>

      {/* CTA BUTTON (NOW FULL WHITE LIKE YOUR HERO SECTION) */}
      <div className="text-center mt-20">
        <Link
          href="/projects"
          className="
            inline-flex items-center justify-center
            px-10 py-4 rounded-xl font-bold
            bg-gray-900 shadow-xl
            hover:bg-gray-800 transition-all duration-300 hover:scale-105
            text-white !important
          "
        >
          <span className="text-white font-semibold">
            Explore Full Portfolio
          </span>

          <ArrowRight
            className="ml-2 w-5 h-5 text-white"
            strokeWidth={2.5}
          />
        </Link>
      </div>

    </section>
  );
}

/* TILE COMPONENT */
function Tile({ item, height }) {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden shadow-xl border 
                  border-gray-200 bg-white/30 backdrop-blur-sm ${height}
                  group transition-all duration-700`}
    >
      <Image
        src={item.src}
        alt={item.label}
        fill
        className="object-cover transition duration-[1200ms] group-hover:scale-110"
      />

      <div
        className="absolute bottom-4 left-4 px-4 py-2 rounded-xl bg-black/55 
                   backdrop-blur-md text-white font-semibold text-sm md:text-base 
                   shadow-lg border border-white/20"
      >
        {item.label}
      </div>

      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700" />
    </div>
  );
}
