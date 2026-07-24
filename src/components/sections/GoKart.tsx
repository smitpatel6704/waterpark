"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import waterGoKart from "../../../public/water-go-kart-with-driver.png";

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
    <section ref={containerRef} className="relative py-10 sm:py-12 lg:py-16 bg-[#062b3a] overflow-hidden min-h-[34rem] sm:min-h-[36rem] lg:min-h-[40rem] flex items-center border-t border-aqua-400/15">

      {/* Cinematic Background — simplified for performance */}
      <motion.div style={{ y: bgY, willChange: "transform" }} className="absolute inset-0 z-0 transform-gpu">
        <div className="absolute inset-0 bg-gradient-to-b from-[#062532] via-[#0a4052] to-[#062936]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(51,214,255,0.10),transparent_34%),radial-gradient(circle_at_22%_68%,rgba(255,92,51,0.07),transparent_28%)]"></div>
        {/* Abstract track lines — static, no blur animation */}
        <div className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 bg-white/5 skew-y-3"></div>
        <div className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-aqua-500/30 shadow-[0_0_10px_rgba(51,214,255,0.4)]"></div>
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
              alt="Helmeted racer driving a blue and orange water go-kart"
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
