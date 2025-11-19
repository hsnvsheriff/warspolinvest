"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GalleryHorizontal, Video, Users, Grid3x3 } from "lucide-react"; // Added Grid3x3 for Infrastructure icon

// --- Data for the sections ---
const TEAM_DATA = {
    image: "/team1.png", 
};

const PROJECTS_DATA = {
  interior: {
    title: "Premium Residential Interior",
    subtitle: "Modern, sustainable, and custom-tailored living spaces.",
    images: ["/interior1.png", "/interior2.png", "/interior3.png", "/interior4.png"],
  },

  exterior: {
    title: "Contemporary Exterior Architecture",
    subtitle: "Groundbreaking structures designed for the future.",
    media: [
      { type: "video", src: "/exteriorvideo.mp4" },
      { type: "image", src: "/home2.png" },

      // --- OLD EXTERIORS ---
      { type: "image", src: "/exterior1.png" },
      { type: "image", src: "/exterior2.png" },
      { type: "image", src: "/exterior3.png" },
      { type: "image", src: "/exterior4.png" },

      // --- NEW EXTERIORS 👇 ---
      { type: "image", src: "/exterior5.jpeg" },
      { type: "image", src: "/exterior6.jpeg" },
      { type: "image", src: "/exterior7.jpeg" },
      { type: "image", src: "/exterior8.jpeg" },
      { type: "image", src: "/exterior9.jpeg" },
      { type: "image", src: "/exterior10.jpeg" },
      { type: "image", src: "/exterior11.jpeg" },
      { type: "image", src: "/exterior12.jpeg" },
      { type: "image", src: "/exterior13.jpeg" },
      { type: "image", src: "/exterior14.jpeg" },
    ],
  },

  infrastructure: {
    title: "Specialized Water Infrastructure",
    subtitle: "Krakow S7 Water Tanks & Engineering",
    images: [
      "/watertank1.png",
      "/watertank2.png",
      "/watertank3.png",
      "/watertank4.png",
      "/watertank5.png",
      "/watertank6.png",
      "/watertank7.png",
    ],
  },

  // ⭐ NEW PROJECT ADDED HERE
  klaudyn: {
    title: "Klaudyn Warszaw Residential Complex",
    subtitle: "Modern multi-unit housing with premium engineering.",
    images: [
      "/Klaudynwarszaw1.jpeg",
      "/Klaudynwarszaw2.jpeg",
      "/Klaudynwarszaw3.jpeg",
      "/Klaudynwarszaw4.jpeg",
      "/Klaudynwarszaw5.jpeg",
      "/Klaudynwarszaw6.jpeg",
    ],
  },
};

// --------------------------------------------------------------------------

// --- Component for Image/Video Gallery Slider (Fixed for Next/Image) ---
const MediaSlider = ({ media, title, icon: Icon }) => (
    <div className="mb-12">
        <div className="flex items-center text-lg font-semibold text-gray-700 mb-4">
            <Icon className="w-5 h-5 mr-2 text-blue-600" />
            {title} Showcase
        </div>
        <div className="flex overflow-x-scroll snap-x snap-mandatory space-x-4 pb-4 scrollbar-hide">
            {media.map((item, i) => (
                <div key={i} className="snap-start flex-shrink-0 w-80 md:w-[600px] aspect-[4/3] rounded-xl overflow-hidden shadow-xl transition-shadow duration-300 relative">
                    {item.type === 'video' ? (
                        <video 
                            src={item.src} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <Image
                            src={item.src}
                            alt={`${title} image ${i + 1}`}
                            fill // Using fill for dynamic sizing
                            className="object-cover"
                            sizes="(max-width: 768px) 80vw, 600px"
                        />
                    )}
                </div>
            ))}
        </div>
    </div>
);


export default function HomeContent() {
  
  // Convert infrastructure images to the media format for the slider
  const infrastructureMedia = PROJECTS_DATA.infrastructure.images.map(src => ({ type: 'image', src }));

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      
      {/* 1. WARSPOL INVEST EXPLANATION */}
      <section id="explanation" className="max-w-7xl mx-auto px-6 py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-gray-900">
            Engineering the Future of Poland's Architecture
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            WarsPolInvest stands at the intersection of innovative design and rigorous construction management. We specialize in delivering high-end architectural and complex engineering projects, focusing on sustainability, precision, and unwavering quality across commercial and residential sectors.
          </p>
        </div>
      </section>

      {/* 2. OUR PROFESSIONAL TEAM (Collective Image Focus) */}
      <section id="team" className="max-w-7xl mx-auto px-6 py-20 border-b border-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            <Users className="w-8 h-8 inline-block mr-2 text-blue-600" /> Meet Our Professional Team
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            {/* Image (Collective Photo) */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl lg:col-span-2">
                <Image
                    src={TEAM_DATA.image}
                    alt="WarsPolInvest Collective Team Photo"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                />
            </div>

            {/* Team Explanation Text */}
            <div className="p-4 lg:p-0">
                <p className="text-sm font-medium text-blue-600 uppercase mb-3 tracking-widest">Leadership & Expertise</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                    Vision Driven by Polish Engineering
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Our strength lies in the collective expertise of our project leaders, architects, and engineers. We combine decades of experience with a passion for innovation, ensuring every structure is built to the highest standard of durability and design integrity.
                </p>
                <Link href="/about" className="group flex items-center mt-6 text-blue-600 font-semibold hover:text-blue-700 transition">
                    Learn More About Our Experts
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
      </section>

      {/* 3. PROJECTS SHOWCASE FLOW */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Selected Portfolio Highlights
        </h2>
        
        {/* INTERIOR DESIGN (Image Slider) */}
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
            {PROJECTS_DATA.interior.title}
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-4xl">{PROJECTS_DATA.interior.subtitle}</p>
        <MediaSlider 
            media={PROJECTS_DATA.interior.images.map(src => ({ type: 'image', src }))} 
            title="Interior Gallery"
            icon={GalleryHorizontal}
        />

        {/* EXTERIOR ARCHITECTURE (VIDEO & Image Slider) */}
        <div className="mt-20 pt-10 border-t border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {PROJECTS_DATA.exterior.title}
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl">{PROJECTS_DATA.exterior.subtitle}</p>
            <MediaSlider 
                media={PROJECTS_DATA.exterior.media} 
                title="Exterior Media" 
                icon={Video}
            />
        </div>

        {/* 💥 SPECIALIZED WATER INFRASTRUCTURE (Slider Now!) */}
        <div className="mt-20 pt-10 border-t border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {PROJECTS_DATA.infrastructure.title}
            </h3>
            <p className="text-lg text-gray-600 mb-8">
                {PROJECTS_DATA.infrastructure.subtitle}. View a detailed gallery of this project's specialized components.
            </p>
            <MediaSlider
                media={infrastructureMedia}
                title="Infrastructure Gallery"
                icon={Grid3x3}
            />
            
            <Link href="/projects" className="mt-8 block text-center text-blue-600 font-semibold hover:text-blue-700 transition">
                View All Infrastructure Case Studies <ArrowRight className="w-4 h-4 ml-2 inline-block" />
            </Link>
        </div>
        {/* KLAUDYN WARSAW PROJECT */}
<div className="mt-20 pt-10 border-t border-gray-200">
  <h3 className="text-3xl font-bold text-gray-900 mb-6">
    {PROJECTS_DATA.klaudyn.title}
  </h3>
  <p className="text-lg text-gray-600 mb-8">
    {PROJECTS_DATA.klaudyn.subtitle}
  </p>

  <MediaSlider
    media={PROJECTS_DATA.klaudyn.images.map(src => ({ type: "image", src }))}
    title="Klaudyn Warsaw Gallery"
    icon={GalleryHorizontal}
  />

  <Link href="/projects" className="mt-8 block text-center text-blue-600 font-semibold hover:text-blue-700 transition">
    View Klaudyn Warsaw Details
    <ArrowRight className="w-4 h-4 ml-2 inline-block" />
  </Link>
</div>

      </section>
      
    </main>
  );
}