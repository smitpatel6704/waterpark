"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import waterGoKart from "../../../public/aquakart-black-right.png";
import waterBackground from "../../../public/gokart-water-background.png";

export default function GoKart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Simplified parallax — only translateY, GPU-accelerated
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  // Smoother kart animation with shorter range
  const kartX = useTransform(scrollYProgress, [0.25, 0.75], ["-80%", "80%"]);
  const kartOpacity = useTransform(scrollYProgress, [0.2, 0.35, 0.65, 0.8], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-6 sm:py-8 lg:py-10 bg-[#062b3a] overflow-hidden min-h-[28rem] sm:min-h-[30rem] lg:min-h-[32rem] flex items-center border-t border-aqua-400/15">
      <svg aria-hidden="true" className="absolute h-0 w-0">
        <filter id="live-water-waves" x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.006 0.018"
            numOctaves={2}
            seed={7}
            result="waterNoise"
          >
            <animate
              attributeName="baseFrequency"
              values="0.006 0.018;0.009 0.025;0.006 0.018"
              dur="5s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="waterNoise"
            scale={22}
            xChannelSelector="R"
            yChannelSelector="B"
          >
            <animate
              attributeName="scale"
              values="14;26;14"
              dur="4s"
              repeatCount="indefinite"
            />
          </feDisplacementMap>
        </filter>
      </svg>

      {/* Cinematic water background */}
      <motion.div style={{ y: bgY, willChange: "transform" }} className="absolute inset-x-0 -inset-y-[12%] z-0 transform-gpu">
        <motion.div
          className="absolute -inset-[10%] transform-gpu"
          animate={{
            x: ["-8%", "8%"],
          }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity, repeatType: "loop" }}
          style={{ filter: "url(#live-water-waves)", willChange: "transform, filter" }}
        >
          <Image
            src={waterBackground}
            alt=""
            fill
            sizes="116vw"
            className="object-cover brightness-150 saturate-200"
            aria-hidden="true"
          />
        </motion.div>
        <motion.div
          className="absolute -inset-[12%] opacity-30 mix-blend-screen transform-gpu"
          animate={{
            x: ["-10%", "10%"],
          }}
          transition={{ duration: 5.5, ease: "linear", repeat: Infinity, repeatType: "loop" }}
          style={{ willChange: "transform" }}
        >
          <Image
            src={waterBackground}
            alt=""
            fill
            sizes="124vw"
            className="object-cover brightness-150 saturate-200"
            aria-hidden="true"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[#00bff3]/55 mix-blend-color"></div>
        <div className="absolute inset-0 bg-cyan-300/20 mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(0,55,78,0.34),transparent_58%)]"></div>
        <motion.div
          className="absolute -inset-x-1/4 bottom-[8%] h-[38%] bg-[linear-gradient(105deg,transparent_28%,rgba(210,251,255,0.34)_48%,transparent_68%)] blur-2xl"
          animate={{ x: ["-28%", "28%"], opacity: [0.55, 0.9] }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity, repeatType: "loop" }}
          style={{ willChange: "transform, opacity" }}
        />
      </motion.div>

      <div className="container section-shell relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-36 sm:mb-40 md:mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 mb-4 bg-coral-500/20 border border-coral-500/50 text-coral-400 font-bold uppercase tracking-widest text-xs sm:text-sm rounded-full shadow-[0_0_20px_rgba(255,92,51,0.3)]"
          >
            Coming Soon
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight"
          >
            India&apos;s First <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-400 to-yellow-400">
              Water Go-Kart
            </span>{" "}
            Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/70 font-medium leading-relaxed"
          >
            Feel the rush as you race across the water in a completely new go-karting experience built for speed, excitement, and unforgettable competition.
          </motion.p>
        </div>
      </div>

      {/* Animated Kart — GPU-optimized with will-change */}
      <motion.div
        style={{ x: kartX, opacity: kartOpacity, willChange: "transform, opacity" }}
        className="absolute top-[70%] md:top-[53%] left-0 w-full -translate-y-1/2 z-20 pointer-events-none transform-gpu"
      >
        <div className="relative w-[min(78vw,18rem)] md:w-[30rem] lg:w-[32rem] h-36 md:h-52 lg:h-56 mx-auto">
          {/* Speed trails — static gradients, no animated blur */}
          <div className="absolute top-1/2 right-full w-96 h-2 -translate-y-1/2 bg-gradient-to-l from-white/60 to-transparent rounded-full"></div>
          <div className="absolute top-[calc(50%+16px)] right-full w-64 h-1 -translate-y-1/2 bg-gradient-to-l from-aqua-400/60 to-transparent rounded-full"></div>
          <div className="absolute top-[calc(50%-16px)] right-full w-48 h-1 -translate-y-1/2 bg-gradient-to-l from-coral-400/60 to-transparent rounded-full"></div>

          {/* Water go-kart */}
          <div className="absolute inset-x-6 bottom-8 h-16 rounded-full bg-gradient-to-r from-aqua-400/10 via-coral-400/30 to-yellow-300/10 blur-2xl"></div>
          <div className="absolute inset-0">
            <Image
              src={waterGoKart}
              alt="Water Go Kart India – racer driving AquaKart at Aquatown inflatable water adventure park"
              fill
              sizes="(min-width: 768px) 544px, 320px"
              className="object-contain drop-shadow-[0_18px_18px_rgba(0,0,0,0.35)]"
            />
          </div>

          {/* Wake and spray */}
          <div className="absolute bottom-8 left-3 w-28 h-5 -skew-x-12 rounded-full bg-white/40 blur-md animate-pulse"></div>
          <div className="absolute bottom-4 left-0 w-44 h-2 rounded-full bg-gradient-to-r from-transparent via-aqua-200/60 to-transparent blur-sm"></div>
          <div className="absolute bottom-8 left-10 w-10 h-10 bg-white/25 rounded-full blur-md animate-ping [animation-duration:1.5s]"></div>
        </div>
      </motion.div>

    </section>
  );
}
