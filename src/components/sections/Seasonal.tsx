"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const seasons = [
  {
    id: "summer",
    title: "Summer Splash",
    desc: "Giant inflatable water slides and cool refreshing obstacle courses — the best summer vacation destination in Gujarat.",
    alt: "Summer water slides and inflatable obstacle course at Aquatown water park Gujarat",
    color: "from-yellow-400 to-coral-500",
    image: "/attr-slides.png",
  },
  {
    id: "monsoon",
    title: "Monsoon Madness",
    desc: "Rain-themed interactive splash zones and high-intensity balance challenges at India's largest inflatable water park.",
    alt: "Monsoon rain dance water activities at Aquatown inflatable adventure park",
    color: "from-aqua-500 to-ocean-600",
    image: "/intro-img.png",
  },
  {
    id: "winter",
    title: "Winter Wave",
    desc: "Heated relaxation pools alongside thrilling high-speed inflatable rides — a perfect family weekend getaway.",
    alt: "Winter water adventure with inflatable rides at Aquatown family water park near Ahmedabad",
    color: "from-purple-400 to-indigo-600",
    image: "/hero-bg.png",
  },
];

export default function Seasonal() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % seasons.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + seasons.length) % seasons.length);
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden bg-white">
      <div className="container section-shell relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-ocean-950 mb-5 sm:mb-6 leading-tight"
          >
            A New Adventure <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-500 to-purple-500">
              Every Season
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-ocean-800/80 font-medium leading-relaxed text-balance"
          >
            Aquatown will continuously introduce new inflatable rides, slides, challenges, and floating attractions so every visit feels fresh, exciting, and completely different.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="relative h-[30rem] min-[480px]:h-[29rem] md:h-[420px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl border border-black/5 bg-white backdrop-blur-xl group">
            
            {/* Ambient background glow based on current season */}
            <div className={cn(
              "absolute inset-0 opacity-10 bg-gradient-to-br transition-all duration-1000",
              seasons[currentIndex].color
            )}></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col md:flex-row items-center p-4 sm:p-5 md:p-8 gap-4 sm:gap-5 md:gap-8"
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-44 sm:h-48 md:h-full shrink-0 relative rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden shadow-xl border border-black/5">
                  <Image
                    src={seasons[currentIndex].image}
                    alt={seasons[currentIndex].alt}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/60 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-ocean-950/10 mix-blend-overlay"></div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 text-center md:text-left z-10">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="inline-block px-3 sm:px-4 py-1.5 mb-3 sm:mb-6 bg-ocean-50 border border-ocean-100 rounded-full text-ocean-900 font-bold text-[10px] sm:text-xs tracking-widest uppercase shadow-sm">
                      Concept Theme
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-ocean-950 mb-3 sm:mb-6 leading-tight">
                      {seasons[currentIndex].title}
                    </h3>
                    <p className="text-ocean-800/80 font-medium text-sm sm:text-base md:text-lg leading-relaxed mb-16 md:mb-8 max-w-md mx-auto md:mx-0">
                      {seasons[currentIndex].desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute bottom-5 md:bottom-auto md:top-1/2 left-0 right-0 flex justify-center md:justify-between px-5 sm:px-6 md:-translate-y-1/2 gap-4 md:gap-0 z-20 pointer-events-none">
              <button
                onClick={handlePrev}
                aria-label="Previous season"
                className="pointer-events-auto w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-md border border-ocean-100 shadow-lg flex items-center justify-center text-ocean-900 hover:bg-white hover:scale-110 transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next season"
                className="pointer-events-auto w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-md border border-ocean-100 shadow-lg flex items-center justify-center text-ocean-900 hover:bg-white hover:scale-110 transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          {/* Timeline Indicators */}
          <div className="flex justify-center gap-3 mt-10">
            {seasons.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Show ${seasons[idx].title}`}
                aria-current={idx === currentIndex ? "true" : undefined}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  idx === currentIndex ? "w-12 bg-ocean-600" : "w-3 bg-ocean-200 hover:bg-ocean-300"
                )}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
