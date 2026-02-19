import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsArrowRight, BsCheck2Circle, BsLightningCharge, BsShieldCheck } from "react-icons/bs";
import { FiTarget, FiUsers, FiTrendingUp, FiBriefcase, FiGlobe, FiLayers, FiSearch } from "react-icons/fi";
import OurClient from "./OurClient";

const Home = () => {
  const navigate = useNavigate();
  const targetRef = useRef(null);
  
  // Advanced Scroll Progress for Hero
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } 
    }
  };

  return (
    <div className="bg-slate-950 text-white selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* --- HERO SECTION WITH PARALLAX --- */}
      <section ref={targetRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        </div>

        <motion.div style={{ opacity, scale, y }} className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-amber-500/30 bg-amber-500/5 backdrop-blur-md"
            >
              <BsLightningCharge className="text-amber-500 animate-bounce" />
              <span className="text-amber-500 text-xs font-black tracking-[0.3em] uppercase">The Future of Human Capital</span>
            </motion.div>

            <motion.h1 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]"
            >
              ELITE TALENT. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600">
                UNLIMITED GROWTH.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
            >
              We curate high-impact leadership teams for the world's most ambitious organizations. Brainy Troves is where vision meets execution.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <button 
                onClick={() => navigate("/services")}
                className="group relative px-12 py-6 bg-amber-500 text-slate-950 font-black rounded-2xl overflow-hidden transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-3">
                  EXPLORE SOLUTIONS <BsArrowRight className="text-xl" />
                </span>
              </button>
              <button className="px-12 py-6 border border-slate-700 text-white font-bold rounded-2xl hover:bg-slate-800/50 backdrop-blur-md transition-all">
                VIEW CASE STUDIES
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent" />
        </motion.div>
      </section>

      {/* --- STATS STRIP --- */}
      <section className="py-12 border-y border-slate-900 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Global Reach", val: "45+", sub: "Countries" },
              { label: "Retention Rate", val: "94%", sub: "After 2 Years" },
              { label: "Talent Pool", val: "1.2M", sub: "Vetted Leaders" },
              { label: "Success Ratio", val: "10:1", sub: "Match Accuracy" },
            ].map((s, i) => (
              <div key={i} className="text-center group cursor-default">
                <h4 className="text-4xl md:text-5xl font-black text-white group-hover:text-amber-500 transition-colors">{s.val}</h4>
                <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mt-2">{s.label}</p>
                <p className="text-slate-500 text-xs mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CORE METHODOLOGY (NEW FEATURE) --- */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2 space-y-8">
              <motion.h2 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                className="text-5xl md:text-6xl font-black leading-tight"
              >
                Our 4-Phase <br />
                <span className="text-amber-500">Precision Search.</span>
              </motion.h2>
              <p className="text-slate-400 text-xl leading-relaxed">
                Standard recruitment is reactive. Our methodology is predictive, combining deep industry intelligence with psychometric evaluation.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Archetype Mapping", icon: <FiLayers />, desc: "Defining the DNA of your ideal leader." },
                  { title: "Deep-Web Sourcing", icon: <FiSearch />, desc: "Finding passive talent others can't see." },
                  { title: "Behavioral Vetting", icon: <BsShieldCheck />, desc: "Stress-testing soft skills and culture fit." },
                  { title: "Seamless Integration", icon: <FiTrendingUp />, desc: "90-day onboarding excellence program." },
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex gap-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/50 transition-all cursor-default"
                  >
                    <div className="text-3xl text-amber-500">{step.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{step.title}</h4>
                      <p className="text-slate-500">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-amber-500/20 blur-[100px] rounded-full" />
              <motion.div 
                animate={{ rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 border border-slate-800 rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" 
                  alt="Strategy session" 
                  className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-amber-500 p-10 rounded-full text-slate-950 font-black text-center shadow-2xl z-20 animate-bounce">
                EST. <br /> 2008
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID 2.0 --- */}
      <section className="py-32 bg-slate-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center mb-20">
          <h2 className="text-amber-500 text-sm font-black tracking-[0.4em] uppercase mb-4">Core Ecosystem</h2>
          <h3 className="text-5xl md:text-7xl font-black">Strategic Infrastructure</h3>
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -20 }}
              className="relative group p-12 rounded-[2.5rem] bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-8xl font-black text-slate-800 group-hover:text-amber-500/10 transition-colors">
                0{idx + 1}
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-slate-900 text-3xl mb-10 shadow-lg shadow-amber-500/20">
                  {service.icon}
                </div>
                <h4 className="text-3xl font-black text-white mb-6 tracking-tighter">{service.title}</h4>
                <p className="text-slate-400 text-lg leading-relaxed mb-10">{service.desc}</p>
                <button className="flex items-center gap-3 text-amber-500 font-bold group-hover:gap-5 transition-all">
                  VIEW ARCHITECTURE <BsArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CLIENTS MARQUEE (IMPROVED) --- */}
      <div className="py-32 bg-slate-950">
        <div className="container mx-auto px-6 mb-16">
          <p className="text-slate-500 font-bold tracking-widest text-center uppercase text-sm">Empowering Industry Giants</p>
        </div>
        <OurClient />
      </div>

      {/* --- FINAL CTA WITH GLASSMORPHISM --- */}
      <section className="py-40 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
            className="relative rounded-[4rem] p-12 md:p-32 text-center overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-3xl"
          >
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/20 rounded-full blur-[150px]" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px]" />
            
            <div className="relative z-10 max-w-4xl mx-auto space-y-12">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
                READY TO <br />
                <span className="text-amber-500">REWRITE THE RULES?</span>
              </h2>
              <p className="text-slate-400 text-xl md:text-2xl font-light">
                Join the network of leaders shaping the next decade. Let’s build your legacy together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => navigate("/contactus")}
                  className="px-16 py-8 bg-white text-slate-950 font-black rounded-3xl text-xl hover:bg-amber-500 transition-colors shadow-2xl shadow-white/5"
                >
                  START A PROJECT
                </button>
                <button className="px-16 py-8 border border-slate-700 text-white font-black rounded-3xl text-xl hover:bg-slate-800 transition-all">
                  SPEAK TO A PARTNER
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Executive Headhunting",
    desc: "We don't just fill seats; we find the visionary leaders who define the next generation of your industry.",
    icon: <FiTarget />
  },
  {
    title: "Global Mobility",
    desc: "Seamlessly scaling teams across borders with 100% regulatory compliance and local cultural intelligence.",
    icon: <FiGlobe />
  },
  {
    title: "Board Advisory",
    desc: "Strategic consulting for board members to ensure long-term governance and leadership succession.",
    icon: <FiUsers />
  }
];

export default Home;