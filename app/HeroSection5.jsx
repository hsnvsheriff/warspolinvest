"use client";

import React from "react";
import { ShieldCheck, Users, LineChart } from "lucide-react";

export default function HeroSection5() {
  return (
    <section className="relative py-32 bg-gray-100 overflow-hidden">

      {/* BG Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-200" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* MAIN TITLE */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Why WarsPolInvest?
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
            Precision, discipline, and engineering expertise — trusted by families,
            businesses, and partners across Poland.
          </p>
        </div>

        {/* 3 COMPACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <CompactCard
            icon={<ShieldCheck className="w-9 h-9 text-blue-700 mb-4" />}
            title="Unmatched Quality Control"
            text="Strict inspection system from foundation to finishing ensures flawless delivery."
          />

          <CompactCard
            icon={<Users className="w-9 h-9 text-blue-700 mb-4" />}
            title="Happy Clients"
            text="Clear communication, solid deadlines, smooth execution — 92% return rate."
          />

          <CompactCard
            icon={<LineChart className="w-9 h-9 text-blue-700 mb-4" />}
            title="Modern Engineering Workflow"
            text="Digital monitoring, precise tools, and efficient scheduling keep everything on track."
          />
        </div>

        {/* COMPACT STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Stat number="50+" label="Projects" />
          <Stat number="98%" label="Satisfaction" />
          <Stat number="5 yrs" label="Experience" />
          <Stat number="4 countries" label="Activity" />
        </div>

      </div>
    </section>
  );
}

function CompactCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all">
      {icon}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{text}</p>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-md border border-gray-200">
      <div className="text-3xl font-extrabold text-gray-900 mb-1">{number}</div>
      <div className="text-gray-700 text-sm font-semibold">{label}</div>
    </div>
  );
}
