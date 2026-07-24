"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Lightbulb,
  Plane,
  Search,
  HardHat,
  PartyPopper,
  Rocket,
} from "lucide-react";

const milestones = [
  {
    year: "2023",
    title: "The Vision Begins",
    description:
      "A bold dream was born — to create an unforgettable water adventure experience unlike anything India had ever seen.",
    icon: Lightbulb,
    color: "from-aqua-400 to-aqua-600",
    bgColor: "bg-aqua-500",
    image: "/timeline-vision.png",
    status: "completed",
  },
  {
    year: "2024",
    title: "Inspiration from Dubai",
    description:
      "A visit to Dubai introduced us to world-class inflatable water attractions and immersive entertainment.",
    icon: Plane,
    color: "from-ocean-400 to-ocean-600",
    bgColor: "bg-ocean-500",
    image: "/timeline-dubai.png",
    status: "completed",
  },
  {
    year: "2025",
    title: "Research & Planning",
    description:
      "A year dedicated to extensive research, market analysis, location selection, global partnerships, and designing the perfect experience.",
    icon: Search,
    color: "from-cyan-400 to-cyan-600",
    bgColor: "bg-cyan-500",
    image: "/timeline-research.png",
    status: "completed",
  },
  {
    year: "2026",
    title: "Start to Build Up",
    description:
      "The dream turned into action! We began building India's BIGGEST inflatable water park with unmatched attractions.",
    icon: HardHat,
    color: "from-coral-400 to-coral-600",
    bgColor: "bg-coral-500",
    image: "/timeline-construction.png",
    status: "current",
  },
  {
    year: "2027",
    title: "Be Ready",
    description:
      "Everything comes together as we prepare to open the gates to India's most exciting water adventure destination.",
    icon: PartyPopper,
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-500",
    image: "/timeline-opening.png",
    status: "upcoming",
  },
  {
    year: "2028",
    title: "Something BIG is Coming!",
    description:
      "Get ready for the next level of adventure. A whole new experience is on the horizon! Stay tuned!",
    icon: Rocket,
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-500",
    image: "/timeline-future.png",
    status: "upcoming",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-ocean-950 via-ocean-900 to-ocean-950 overflow-hidden"
      id="journey"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-aqua-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-40 w-[500px] h-[500px] bg-coral-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ocean-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container section-shell relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-5 bg-white/10 backdrop-blur-sm border border-white/10 text-aqua-300 font-bold uppercase tracking-widest text-xs rounded-full">
            Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-5 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-300 to-aqua-100">
              Journey
            </span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base sm:text-lg font-medium">
            From a bold vision to India&apos;s biggest inflatable water
            adventure — follow the Aquatown story.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Vertical Line (static background) */}
          <div className="absolute left-5 sm:left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-white/10"></div>

          {/* Animated Progress Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-5 sm:left-6 md:left-1/2 md:-translate-x-px top-0 w-0.5 bg-gradient-to-b from-aqua-400 via-aqua-300 to-coral-400 origin-top max-h-[60%]"
          ></motion.div>

          {/* Milestone Items */}
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative mb-10 sm:mb-14 lg:mb-20 last:mb-0"
              >
                {/* Timeline Icon — Center */}
                <div className="absolute left-5 sm:left-6 md:left-1/2 -translate-x-1/2 z-20 top-8 sm:top-1/2 sm:-translate-y-1/2">
                  <div
                    className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg shadow-black/30 border-4 border-ocean-950 ${
                      milestone.status === "current"
                        ? "ring-4 ring-coral-400/50 ring-offset-2 ring-offset-ocean-950"
                        : ""
                    } scale-90 sm:scale-100`}
                  >
                    <Icon size={22} className="text-white" />
                    {milestone.status === "current" && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-coral-400 animate-ping"></span>
                    )}
                  </div>
                </div>

                {/* Card — alternating sides */}
                <div
                  className={`ml-12 sm:ml-16 md:ml-0 md:w-[calc(50%-3.5rem)] ${
                    isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
                  }`}
                >
                  <div
                    className={`group relative rounded-2xl border overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                      milestone.status === "current"
                        ? "bg-ocean-800/80 backdrop-blur-lg border-coral-500/40 shadow-xl shadow-coral-500/10"
                        : milestone.status === "completed"
                        ? "bg-ocean-800/60 backdrop-blur-sm border-white/10 hover:bg-ocean-800/80 hover:border-aqua-500/30"
                        : "bg-ocean-800/40 backdrop-blur-sm border-white/5 hover:bg-ocean-800/60 hover:border-white/15"
                    }`}
                  >
                    {/* Card inner layout: image + text */}
                    <div className="flex flex-col sm:flex-row">
                      {/* Image */}
                      <div className="relative w-full sm:w-40 md:w-48 h-40 sm:h-auto shrink-0 overflow-hidden">
                        <Image
                          src={milestone.image}
                          alt={milestone.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ocean-800/30"></div>
                      </div>

                      {/* Text Content */}
                      <div className="p-4 sm:p-5 md:p-6 flex-1">
                        {/* Year Badge */}
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 ${
                            milestone.status === "current"
                              ? "bg-coral-500/30 text-coral-300 border border-coral-500/30"
                              : milestone.status === "completed"
                              ? "bg-aqua-500/20 text-aqua-300 border border-aqua-500/20"
                              : "bg-white/10 text-white/50 border border-white/10"
                          }`}
                        >
                          {milestone.status === "current" && (
                            <span className="inline-block w-2 h-2 rounded-full bg-coral-400 animate-pulse mr-2 align-middle"></span>
                          )}
                          {milestone.year}
                          {milestone.status === "current" && " — Now"}
                        </span>

                        <h3
                          className={`text-lg md:text-xl font-black mb-2 leading-tight ${
                            milestone.status === "upcoming"
                              ? "text-white/60"
                              : "text-white"
                          }`}
                        >
                          {milestone.title}
                        </h3>
                        <p
                          className={`text-sm leading-relaxed font-medium ${
                            milestone.status === "upcoming"
                              ? "text-white/40"
                              : "text-white/65"
                          }`}
                        >
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Bottom dot */}
          <div className="absolute left-5 sm:left-6 md:left-1/2 -translate-x-1/2 bottom-0 z-20">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-coral-400 to-coral-600 border-4 border-ocean-950 shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
