"use client";

export default function HeroSection3() {
  return (
    <section
      className="
        relative 
        w-screen 
        h-screen 
        min-h-screen         /* ⭐ ensures full mobile height */
        overflow-hidden 
        pt-32
      "
    >
      {/* Background video */}
      <video
        src="/fixed.mp4"
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
        className="
          absolute 
          top-0 left-0 
          w-full 
          h-full 
          object-cover 
          object-center        /* ⭐ keeps framing centered on mobile */
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>
    </section>
  );
}
