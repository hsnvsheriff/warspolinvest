"use client";

export default function HeroSection3() {
  return (
    <section
      className="
        relative 
        w-screen 
        h-screen 
        overflow-hidden 
        pt-32                    /* ⭐ FIX: spacing from section above */
      "
    >
      {/* Background video */}
      <video
        src="/myvideo.mp4"
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        className="
          absolute 
          top-0 left-0 
          w-full h-full 
          object-cover
        "
      />

      {/* Optional dark overlay for readability (adjust opacity if needed) */}
      <div className="absolute inset-0 bg-black/20"></div>
    </section>
  );
}
