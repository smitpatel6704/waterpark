"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const attractions = [
  {
    title: "Adult Water Inflatable Course",
    desc: "A massive inflatable water obstacle course designed for thrill seekers with challenging obstacles and interactive activities.",
    color: "from-ocean-500 to-ocean-800",
    image: "/hero-bg.png",
  },
  {
    title: "Kids Inflatable Pool",
    desc: "A dedicated children's water play area featuring safe inflatable slides, splash games, and fun-filled attractions.",
    color: "from-yellow-300 to-yellow-500",
    image: "/attr-pool.png",
  },
  {
    title: "Water Go Cart",
    desc: "Experience India's first water-based go-kart racing attraction with a unique blend of speed and water adventure.",
    badge: "India's First",
    color: "from-coral-400 to-coral-600",
    image: "/attr-gokart.png",
  },
  {
    title: "Paintball Arena",
    desc: "Gear up and experience an action-packed paintball battle in our custom-designed competitive arena.",
    color: "from-purple-400 to-purple-600",
    image: "/attr-slides.png",
  },
  {
    title: "Rain-Dance Area",
    desc: "Dance to the latest beats under a refreshing shower of rain, featuring spectacular lighting and an exciting atmosphere.",
    color: "from-aqua-400 to-ocean-500",
    image: "/intro-img.png",
  },
];

export default function Attractions() {
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateScrollRange = () => {
      if (containerRef.current) {
        // Calculate the exact distance needed to scroll to the end
        const scrollWidth = containerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // The maximum distance we can scroll left is the content width minus the screen width
        const maxScroll = Math.max(0, scrollWidth - viewportWidth);
        setScrollRange(maxScroll);
      }
    };

    updateScrollRange();
    window.addEventListener("resize", updateScrollRange);
    return () => window.removeEventListener("resize", updateScrollRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Use translate3d for GPU acceleration, interpolating exactly to the pixel amount needed
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section ref={targetRef} className="attractions-section relative h-[300vh] bg-ocean-950" id="attractions">
      <div className="attractions-sticky sticky top-0 h-screen flex flex-col justify-center overflow-hidden will-change-transform">

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-aqua-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container section-shell mb-6 sm:mb-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Dive Into the <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-aqua-200">Adventure</span>
            </h2>
            <p className="text-white/70 max-w-2xl text-base sm:text-lg font-medium text-balance">
              Explore a world of inflatable challenges, high-speed excitement, floating fun, and relaxing water experiences.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={containerRef}
          style={{ x, willChange: "transform" }}
          className="attractions-track flex gap-4 lg:gap-5 px-6 md:px-10 lg:px-20 relative z-10 w-max pb-6"
        >
          {attractions.map((item, index) => (
            <div
              key={index}
              tabIndex={0}
              className="attraction-card relative w-[min(76vw,270px)] md:w-[280px] lg:w-[310px] h-[370px] md:h-[380px] lg:h-[410px] rounded-[1.5rem] overflow-hidden group cursor-pointer shrink-0 transform-gpu transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Background Image — using Next/Image for optimized loading */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 300px, 400px"
                className="object-cover transform-gpu transition-transform duration-700 group-hover:scale-110"
                priority={index < 3}
              />

              {/* Dark Gradient for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/60 to-transparent opacity-90 z-10"></div>

              {/* Color Tint based on original card color */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40 group-hover:opacity-20 transition-opacity duration-500 mix-blend-color z-10`}></div>

              {item.badge && (
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white text-ocean-950 font-bold text-[10px] uppercase tracking-widest rounded-full shadow-lg z-20">
                  {item.badge}
                </div>
              )}

              <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end z-20">
                <div className="attraction-copy transform-gpu transition-transform duration-500 ease-out">
                  <h3 className="text-xl md:text-2xl font-black text-white mb-2 drop-shadow-md">{item.title}</h3>
                  <p className="attraction-detail text-white/90 font-medium text-xs md:text-sm leading-relaxed mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-md">
                    {item.desc}
                  </p>

                  <div className="attraction-detail flex items-center gap-2 text-white font-bold text-[10px] sm:text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    Discover More <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Animated glowing border on hover */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/40 rounded-[2rem] transition-colors duration-500 z-30"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
