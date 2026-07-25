"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, Baby, Users, HeartPulse, LifeBuoy, Map } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Baby className="w-8 h-8 text-coral-400" />,
    title: "Dedicated Kids Zone",
    desc: "Safe, appropriately sized inflatables with constant monitoring.",
  },
  {
    icon: <Users className="w-8 h-8 text-aqua-400" />,
    title: "Adult Adventure Zone",
    desc: "High-intensity obstacles designed specifically for older thrill-seekers.",
  },
  {
    icon: <LifeBuoy className="w-8 h-8 text-ocean-400" />,
    title: "Trained Safety Team",
    desc: "Certified lifeguards and staff stationed across all attraction zones.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
    title: "Safe Structures",
    desc: "Premium, commercial-grade inflatables with strict safety standards.",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-purple-400" />,
    title: "Family-Friendly",
    desc: "A welcoming, clean, and well-managed environment for the whole family.",
  },
  {
    icon: <Map className="w-8 h-8 text-yellow-400" />,
    title: "Separate Areas",
    desc: "Carefully planned layout to prevent overcrowding and mix-ups.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function Safety() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32 bg-[#CEFAFE] overflow-hidden" id="safety">
      {/* Top Wave Divider connecting from the white section above */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-[99%] z-10 rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#CEFAFE"></path>
        </svg>
      </div>

      {/* Decorative background blurs */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-cyan-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container section-shell relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ocean-950 mb-5 sm:mb-6 leading-tight">
                Safe Water Adventure <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-600 to-aqua-600">
                  for Everyone
                </span>
              </h2>
              <p className="text-base sm:text-lg text-ocean-800/80 mb-8 sm:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium text-balance">
                Aquatown is being designed as the best family water park in Gujarat with dedicated experiences for adults, kids, families, and adventure seekers, supported by carefully planned activity zones and trained safety teams.
              </p>

              {/* Premium Safety Image Card */}
              <div className="hidden lg:block relative w-full aspect-[4/3] rounded-[2.5rem] bg-ocean-900 overflow-hidden group shadow-2xl shadow-ocean-900/30 border border-white/40">
                <Image
                  src="/safety-inflatable-park.png"
                  alt="Family-friendly inflatable water park with trained safety lifeguards at Aquatown Gujarat"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/30 to-ocean-950/10"></div>

                <motion.div
                  className="absolute right-10 bottom-10 w-48 h-48 bg-aqua-500/20 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>

                <div className="relative z-10 flex flex-col h-full justify-between p-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center group-hover:bg-aqua-500/20 transition-colors">
                    <ShieldCheck className="w-8 h-8 text-aqua-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white mb-3">Safety First</h3>
                    <p className="text-white/80 font-medium text-lg leading-relaxed max-w-sm">Our top priority is ensuring a secure environment so you can focus purely on the fun.</p>
                  </div>
                </div>
                {/* Glowing border effect */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-aqua-500/50 rounded-[2.5rem] transition-colors duration-500"></div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 min-[440px]:grid-cols-2 gap-3 sm:gap-4"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/50 backdrop-blur-xl border border-white/60 hover:bg-white/80 hover:-translate-y-1 hover:shadow-xl transition-all group overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]"
                >
                  {/* Subtle top glow on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/80 border border-white flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:bg-white transition-all shadow-sm">
                    {feature.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-ocean-950 mb-2">{feature.title}</h4>
                  <p className="text-ocean-800/70 text-xs sm:text-sm font-medium leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
