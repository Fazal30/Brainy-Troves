import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import accentureLogo from "../assets/logo/Accenture.svg.png";
import hgsLogo from "../assets/logo/HGS.NS_BIG.png";
import infosysLogo from "../assets/logo/infosys-logo-jpeg.jpg";
import jpMorganLogo from "../assets/logo/JPM_logo.png";
import ai247Logo from "../assets/logo/(24)7.ai_Logo.svg.png";
import startekLogo from "../assets/logo/SRT_BIG.png";
import ackoLogo from "../assets/logo/acko-logo-png_seeklogo-456165.png";
import inTouchLogo from "../assets/logo/2023-24-7-intouch-new-logo-name-change-to-intouchcx.jpg";
import brickworkLogo from "../assets/logo/brickworkindia-logo.png";
import bigbasketLogo from "../assets/logo/bigbasket-logo.png";
import aloricaLogo from "../assets/logo/Alorica_logo.svg.png";
import techMahindraLogo from "../assets/logo/techmahindra-logo.png";

const OurClient = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clients = [
    { name: "Accenture", logo: accentureLogo },
    { name: "HGS", logo: hgsLogo },
    { name: "Infosys", logo: infosysLogo },
    { name: "JP Morgan", logo: jpMorganLogo },
    { name: "247.ai", logo: ai247Logo },
    { name: "Startek", logo: startekLogo },
    { name: "Acko", logo: ackoLogo },
    { name: "24-7 Intouch", logo: inTouchLogo },
    { name: "Brickwork", logo: brickworkLogo },
    { name: "BigBasket", logo: bigbasketLogo },
    { name: "Alorica", logo: aloricaLogo },
    { name: "Tech Mahindra", logo: techMahindraLogo }
  ];

  // Split clients for two rows if you want a massive "Wall of Fame" look
  const firstRow = clients.slice(0, 6);
  const secondRow = clients.slice(6, 12);

  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-amber-500 font-black text-xs tracking-[0.4em] uppercase mb-4 block"
          >
            Elite Partnerships
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            Powering <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Global Ambitions.</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
        </motion.div>

        {/* LOGO WALL CONTAINER */}
        <div className="space-y-12">
          {/* Row 1: Moving Left */}
          <div className="relative flex overflow-hidden py-4 mask-gradient">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="flex gap-8 items-center whitespace-nowrap"
            >
              {[...firstRow, ...firstRow, ...firstRow, ...firstRow].map((client, i) => (
                <LogoCard key={i} client={client} />
              ))}
            </motion.div>
            
            {/* Vignette Overlays for smooth entry/exit */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />
          </div>

          {/* Row 2: Moving Right */}
          <div className="relative flex overflow-hidden py-4">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="flex gap-8 items-center whitespace-nowrap"
            >
              {[...secondRow, ...secondRow, ...secondRow, ...secondRow].map((client, i) => (
                <LogoCard key={i} client={client} />
              ))}
            </motion.div>

            {/* Vignette Overlays */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />
          </div>
        </div>

        {/* Bottom CTA / Metric */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-500 font-medium italic">
            & Many more Fortune 500 giants & hyper-growth startups.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Sub-component for the Individual Logo Card
const LogoCard = ({ client }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        backgroundColor: "rgba(255, 255, 255, 0.08)" 
      }}
      className="flex-shrink-0 w-52 h-32 flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-colors group shadow-2xl"
    >
      <img
        src={client.logo}
        alt={client.name}
        className="max-w-full max-h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
      />
    </motion.div>
  );
};

export default OurClient;