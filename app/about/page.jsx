"use client";
import { useEffect, useState, useRef } from "react";
import Topbar from "../Topbar";
import Footer from "../Footer";
import Link from "next/link";
// Importing professional Lucide icons
import { Zap, Clock3, Users, Leaf, HardHat, Flag } from "lucide-react"; 

// --- Office Data (Used for the new, clean layout) ---
const offices = [
    { name: "Warsaw, Poland", role: "Headquarters", flag: "🇵🇱" },
    { name: "Amsterdam, Netherlands", role: "Western European Hub", flag: "🇳🇱" },
    { name: "Brussels, Belgium", role: "Benelux Office", flag: "🇧🇪" },
];

export default function About() {
  
  const stats = [
    { label: "Completed Projects", value: 24, icon: Zap },
    { label: "Happy Companies", value: 100, icon: Users },
    { label: "Years of Operation", value: 8, icon: Clock3 },
  ];

  const coreValues = [
    { 
      title: "Precision Engineering", 
      description: "Delivering every project with meticulous accuracy, guaranteeing structural integrity and longevity.",
      icon: HardHat 
    },
    { 
      title: "Sustainable Design", 
      description: "Committing to environmentally responsible methods and materials that reduce footprint and operating costs.",
      icon: Leaf 
    },
    { 
      title: "Client Partnership", 
      description: "Fostering a transparent, collaborative environment where client vision is integrated at every stage.",
      icon: Users 
    },
  ];

  return (
    <>
      <Topbar />
      <main className="bg-white text-gray-900 pt-24 min-h-screen">
        
        {/* 1. HERO: High Impact Introduction */}
        <section className="flex flex-col items-center justify-center text-center px-6 py-32 bg-gray-950 text-white border-b-8 border-blue-600">
  <h1 className="text-6xl md:text-8xl font-extrabold mb-4 tracking-tighter">
    Our Vision
  </h1>

  <p className="max-w-4xl text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
    WarsPol Invest: Redefining the future of construction through Polish engineering 
    precision and visionary European design. We build trust, not just structures.
  </p>
</section>


        {/* 2. CORE VALUES: Detailed & Grid-Based */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
            The Pillars of Our Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-xl transition duration-500 hover:shadow-2xl hover:border-blue-600/30 text-center"
              >
                <value.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" /> 
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

{/* 3. MODERN EUROPEAN PRESENCE (Clean, No Flags) */}
{/* 3. MODERN EUROPEAN PRESENCE */}
<section className="relative py-24 bg-blue-50">
  <h2 className="text-4xl font-bold text-center mb-4">
    Our European Presence
  </h2>

  <p className="text-lg text-gray-600 text-center mb-16">
    Connecting construction expertise across key European locations.
  </p>

  <div className="max-w-6xl mx-auto px-6">
    
    {/* Office Grid */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">

      {/* Poland */}
      <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600/70 hover:shadow-2xl transition">
        <span className="text-gray-900 font-bold text-3xl">PL</span>
        <h3 className="text-xl font-extrabold text-gray-900 mt-3 mb-1">
          Warsaw
        </h3>
        <p className="text-gray-600 font-medium">Headquarters</p>
      </div>

      {/* Germany */}
      <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600/70 hover:shadow-2xl transition">
        <span className="text-gray-900 font-bold text-3xl">DE</span>
        <h3 className="text-xl font-extrabold text-gray-900 mt-3 mb-1">
          Berlin
        </h3>
        <p className="text-gray-600 font-medium">Operations Office</p>
      </div>

      {/* Netherlands */}
      <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600/70 hover:shadow-2xl transition">
        <span className="text-gray-900 font-bold text-3xl">NL</span>
        <h3 className="text-xl font-extrabold text-gray-900 mt-3 mb-1">
          Amsterdam
        </h3>
        <p className="text-gray-600 font-medium">Western Europe Hub</p>
      </div>

      {/* Belgium */}
      <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600/70 hover:shadow-2xl transition">
        <span className="text-gray-900 font-bold text-3xl">BE</span>
        <h3 className="text-xl font-extrabold text-gray-900 mt-3 mb-1">
          Brussels
        </h3>
        <p className="text-gray-600 font-medium">Benelux Projects</p>
      </div>

    </div>

  </div>
</section>




  {/* 4. COMPANY TIMELINE — Simple & Clean */}
<section className="py-24 max-w-5xl mx-auto px-6">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
    Company Timeline
  </h2>

  <div className="space-y-12">

    <TimelineEvent title="Founded in Warsaw" index={1}>
      WarsPol Invest started as a small engineering team focused on reliable,
      well-executed construction services in the Mazowieckie region.
    </TimelineEvent>

    <TimelineEvent title="First Large Infrastructure Projects" index={2}>
      The company expanded its portfolio with multiple exterior and water-related
      engineering projects across southern Poland.
    </TimelineEvent>

    <TimelineEvent title="Residential & Commercial Expansion" index={3}>
      Added modern exterior finishing, interior renovation, and commercial
      construction services to meet growing demand.
    </TimelineEvent>

    <TimelineEvent title="European Presence" index={4}>
      Opened operational points in Amsterdam and Brussels, supporting project
      management and cooperation with Western European partners.
    </TimelineEvent>

  </div>
</section>


        {/* 5. CALL TO ACTION (CTA) */}
        <section className="bg-gray-900 py-20 text-center">
            <h2 className="text-5xl font-extrabold text-white mb-4">
                Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Connect with our team of experts today and bring your architectural vision to life with uncompromising quality.
            </p>
            <Link 
                href="/contact" 
                className="inline-block bg-blue-600 text-white text-lg font-bold px-12 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition transform hover:scale-[1.05]"
            >
                Contact Our Team
            </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}

// Helper component for timeline events (Modified to accept index instead of year)
const TimelineEvent = ({ title, children, index }) => (
    <div className="flex relative">
        <div className="hidden md:flex flex-col items-center mr-4">
            <div className="w-px h-full bg-gray-300"></div>
            {/* Displaying index for sequence instead of year */}
            <div className="w-8 h-8 min-w-8 min-h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">{index}</div>
            <div className="w-px h-full bg-gray-300"></div>
        </div>
        <div className="flex-1 pb-10">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-2">{title}</h3>
            <p className="text-lg text-gray-600">{children}</p>
        </div>
    </div>
);