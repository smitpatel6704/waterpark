"use client";

import { motion } from "framer-motion";
import { Waves, Zap, RefreshCw, Users } from "lucide-react";

const stats = [
  {
    icon: <Waves className="w-6 h-6 text-aqua-500" />,
    title: "India’s Biggest",
    desc: "Inflatable Adventure",
  },
  {
    icon: <Zap className="w-6 h-6 text-coral-500" />,
    title: "India’s First",
    desc: "Water Go-Kart",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-aqua-500" />,
    title: "New Attractions",
    desc: "Every Season",
  },
  {
    icon: <Users className="w-6 h-6 text-ocean-500" />,
    title: "Adventures",
    desc: "For Every Age",
  },
];

export default function Intro() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-cyan-50 overflow-hidden" id="experience">
      <div className="container section-shell relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ocean-950 mb-5 sm:mb-6 leading-tight">
                A New Wave of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-500 to-ocean-500">
                  Water Adventure
                </span>
              </h2>
              <p className="text-base sm:text-lg text-ocean-800/80 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Aquatown is an upcoming inflatable water adventure park designed to bring together thrilling water challenges, a floating water park, giant inflatable slides, relaxing experiences, and family-friendly entertainment in one unforgettable destination — your perfect weekend getaway near Ahmedabad, Gujarat.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white/60 backdrop-blur-md border border-white p-3.5 sm:p-4 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <h4 className="font-bold text-ocean-950 text-sm sm:text-base leading-tight mb-1">{stat.title}</h4>
                  <p className="text-ocean-800/70 text-xs sm:text-sm font-medium">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Content - Floating Abstract Island */}
          <motion.div 
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square w-full">
              {/* Animated rings and shapes representing the park */}
              <motion.div 
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-3 sm:inset-4 rounded-[2rem] sm:rounded-[3rem] shadow-2xl overflow-hidden border-4 sm:border-8 border-white bg-cover bg-center"
                style={{ backgroundImage: "url('/intro-img.png')" }}
              >
                {/* Water surface inner reflection */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/40 to-transparent"></div>
              </motion.div>

              <motion.div 
                animate={{ y: [15, -15, 15], rotate: [-10, 10, -10] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-5 right-4 sm:top-10 sm:right-10 w-16 h-16 min-[420px]:w-20 min-[420px]:h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-coral-500 rounded-full border-[3px] sm:border-4 border-white shadow-xl opacity-90 backdrop-blur-md"
              ></motion.div>

              <motion.div 
                animate={{ y: [-20, 20, -20], x: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-5 sm:bottom-16 sm:left-8 lg:bottom-20 lg:left-10 w-14 h-14 min-[420px]:w-16 min-[420px]:h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-yellow-400 rounded-xl sm:rounded-2xl border-[3px] sm:border-4 border-white shadow-xl opacity-90 rotate-12"
              ></motion.div>

              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-2xl pointer-events-none"
              ></motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
