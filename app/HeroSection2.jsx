"use client";

export default function HeroSection2() {
  return (
    <div className="h-screen flex justify-center items-center p-4 md:p-8">
      <section
        className="
          w-full 
          h-full 
          max-h-[88vh]                 /* slightly taller */
          bg-cover bg-center 
          flex flex-col justify-center items-center 
          text-white text-center 
          shadow-xl 
          rounded-[3rem] md:rounded-[4rem]
          relative
          overflow-hidden
        "
        style={{
          backgroundImage: "url('/home2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* TEXT CONTENT */}
        <div className="px-4 md:px-10 py-10 md:py-14 relative z-10">
          
          <h1 className="text-4xl md:text-6xl font-thin mb-6 tracking-[0.2em] uppercase drop-shadow-lg">
            Engineering Excellence
          </h1>

          <p className="text-lg md:text-2xl opacity-90 max-w-2xl mx-auto font-light tracking-wide drop-shadow">
            Precision, discipline, and clarity — the foundation of every structure we create.
          </p>

        </div>
      </section>
    </div>
  );
}
