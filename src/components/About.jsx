import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLightbulb, FaStar, FaHandshake, FaBullseye, FaQuoteLeft } from "react-icons/fa";
import { BsArrowRight, BsLinkedin, BsTwitter } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import fazalImg from "../assets/fazal.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const handleGetStarted = () => navigate('/contactus');

  const stats = [
    { number: "08+", label: "Years of Heritage", color: "from-amber-400 to-amber-600" },
    { number: "1.2k", label: "Talent Placements", color: "from-blue-400 to-blue-600" },
    { number: "95%", label: "Retention Rate", color: "from-emerald-400 to-emerald-600" },
    { number: "50+", label: "Fortune Partners", color: "from-purple-400 to-purple-600" },
  ];

  const values = [
    {
      title: "Strategic Innovation",
      description: "We don't just fill roles; we engineer future-proof teams using predictive talent analytics.",
      icon: <FaLightbulb />,
      gradient: "from-amber-500 to-amber-700",
    },
    {
      title: "Ethical Excellence",
      description: "Uncompromising standards in vetting and executive search, ensuring cultural alignment.",
      icon: <FaStar />,
      gradient: "from-slate-700 to-slate-900",
    },
    {
      title: "Global Synergy",
      description: "Building bridges between local talent troves and international corporate demands.",
      icon: <FaHandshake />,
      gradient: "from-amber-600 to-orange-700",
    },
    {
      title: "Precision Focus",
      description: "A client-first methodology that treats your business goals as our primary blueprint.",
      icon: <FaBullseye />,
      gradient: "from-slate-800 to-black",
    },
  ];

  return (
    <main className="relative bg-[#0F172A] overflow-hidden">
      {/* Decorative Parallax Elements */}
      <motion.div style={{ y: yRange }} className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <motion.div style={{ y: yRange }} className="absolute bottom-20 right-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">Our Legacy</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight"
          >
            Architecting the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-600 to-orange-600">
              Future of Work.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Brainy Troves is more than a consultancy. We are a strategic talent foundry, 
            blending decades of industry wisdom with modern AI-driven recruitment 
            to empower the next generation of global leaders.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={handleGetStarted}
              className="group flex items-center gap-3 px-10 py-5 bg-amber-500 text-slate-950 font-black rounded-2xl hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20"
            >
              Partner With Us
              <BsArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-slate-800/50 text-white font-bold rounded-2xl border border-slate-700 hover:bg-slate-700 transition-all">
              Our Methodology
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Glassmorphism */}
      <section className="py-24 relative z-10" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-md border border-slate-700/50 p-8 rounded-[2rem] text-center group hover:border-amber-500/50 transition-colors"
              >
                <h3 className={`text-4xl md:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                  {stat.number}
                </h3>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-tighter">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visionary Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              A Mission to <span className="text-amber-500">Solve</span> <br /> the Human Capital Puzzle.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              In an era of rapid digital disruption, the differentiator isn't just technology—it's the people behind it. 
              Our mission is to curate the "Brainy Troves" of the world, connecting visionary companies with 
              unparalleled talent that drives sustainable competitive advantage.
            </p>
            <div className="flex items-center gap-4 p-6 bg-slate-800/40 rounded-3xl border-l-4 border-amber-500">
              <FaQuoteLeft className="text-amber-500 text-4xl opacity-50" />
              <p className="italic text-slate-300">
                "We don't just recruit; we engineer the teams that will define the next decade of industry."
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-amber-500 rounded-[3rem] rotate-3 opacity-20" />
            <div className="relative bg-slate-800 h-[400px] rounded-[3rem] overflow-hidden border border-slate-700 shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800')] bg-cover bg-center grayscale opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">The Pillars of Our Success</h2>
            <p className="text-slate-400">Built on integrity, driven by results.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2rem] bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.gradient} flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}>
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">Executive Leadership</h2>
            <p className="text-slate-400 italic">The visionaries steering the Brainy Troves ship.</p>
          </div>
          
          <div className="flex justify-center">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="w-full max-w-sm group"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-800 border border-slate-700 p-4">
                <div className="relative h-96 rounded-[2rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={fazalImg} alt="CEO" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent opacity-80" />
                  
                  {/* Social Overlay */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                    <a href="#" className="w-12 h-12 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center hover:bg-white transition-colors"><BsLinkedin size={20}/></a>
                    <a href="#" className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-colors"><BsTwitter size={20}/></a>
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-black text-white tracking-tight uppercase">SYED FAZAL UR RAHMAN</h3>
                  <p className="text-amber-500 font-bold text-sm tracking-[0.2em] mt-2 uppercase">Founder & Chief Strategist</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          className="max-w-5xl mx-auto relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-amber-500 to-orange-700 p-1"
        >
          <div className="bg-[#0F172A] rounded-[2.9rem] py-20 px-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter relative z-10">
              Ready to Expand Your <br /> <span className="text-amber-500">Intellectual Capital?</span>
            </h2>
            <button
              onClick={handleGetStarted}
              className="relative z-10 px-12 py-6 bg-white text-slate-950 font-black rounded-2xl hover:bg-amber-500 transition-all shadow-2xl active:scale-95"
            >
              Start Your Transformation
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default About;