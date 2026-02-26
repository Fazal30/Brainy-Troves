import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaInstagram } from "react-icons/fa";
import { FaLightbulb, FaHandshake, FaGlobeAmericas, FaShieldAlt, FaRocket } from "react-icons/fa";
import { FiTarget, FiArrowRight } from "react-icons/fi"; 
import { BsArrowRight, BsLinkedin, BsCpu, BsBriefcase } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import fazalImg from "../assets/fazal.jpg";
import CountUp from "react-countup";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const containerRef = useRef(null);
  
  // Progress Bar for the entire page
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const services = [
  {
    icon: <BsCpu />,
    title: "IT & Digital",
    desc: "We build intelligent digital ecosystems using AI, scalable cloud infrastructure, and enterprise-grade software solutions.",
    items: ["AI & Automation", "Cloud Solutions", "ERP Implementation"],
  },
  {
    icon: <BsBriefcase />,
    title: "Staffing",
    desc: "Our recruitment specialists connect organizations with pre-vetted, high-performance professionals across industries.",
    items: ["Executive Search", "Bulk Hiring", "Payroll Mgmt"],
  },
  {
    icon: <FaGlobeAmericas />,
    title: "Consulting",
    desc: "We help startups and enterprises expand globally through business strategy, legal compliance, and market research.",
    items: ["Business Setup", "Compliance", "Strategy"],
  },
  {
    icon: <FaShieldAlt />,
    title: "BPO/KPO",
    desc: "End-to-end operational support allowing businesses to focus on innovation while we handle operations.",
    items: ["Back Office", "Market Research", "Data Entry"],
  },
  {
    icon: <FaLightbulb />,
    title: "Training",
    desc: "Industry-oriented corporate training programs designed to upgrade workforce skills and productivity.",
    items: ["Corporate Training", "Skill Dev", "Workshops"],
  },
  {
    icon: <FaHandshake />,
    title: "Managed Services",
    desc: "We manage vendors, facilities, and operational projects with measurable performance metrics.",
    items: ["Facility Support", "Project Mgmt", "Vendor Mgmt"],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

  const timelineData = [
    { year: "2008", title: "The Inception", desc: "BTCS was founded with a vision to revolutionize the staffing industry in South Asia." },
    { year: "2015", title: "Digital Pivot", desc: "Expansion into IT & Digital solutions, integrating AI into our recruitment DNA." },
    { year: "2020", title: "Global Nexus", desc: "Opened 12+ global partner offices to facilitate international talent mobility." },
    { year: "2026", title: "Full-Spectrum Mastery", desc: "Evolved into a multi-sector powerhouse covering IT, BPO, and Strategic Consulting." }
  ];

  return (
    <main ref={containerRef} className="relative bg-[#020617] text-slate-200 overflow-hidden font-sans">
      
      {/* --- Page Scroll Progress Bar --- */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-amber-500 origin-left z-[100]" style={{ scaleX }} />

      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.08),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex justify-center mb-6"
            >
              <span className="px-5 py-2 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-500 text-[10px] font-black tracking-[0.5em] uppercase">
                Defining Corporate Evolution
              </span>
            </motion.div>

            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-6xl md:text-9xl font-black text-center leading-[0.85] tracking-tighter mb-10"
            >
              WE ARE THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-400 to-amber-700">ARCHITECTS.</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid md:grid-cols-3 gap-12 mt-20 border-t border-slate-800 pt-12"
            >
              {[
                { title: "Innovation", text: "Turning complex challenges into scalable digital assets." },
                { title: "Talent", text: "The elite 1% of the global workforce, curated for you." },
                { title: "Strategy", text: "Data-driven roadmaps that ensure sustainable market dominance." }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <h4 className="text-amber-500 font-black uppercase text-xs tracking-widest">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- THE TIMELINE JOURNEY --- */}
      <section className="py-32 relative bg-slate-950/50">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-4">Our <span className="text-amber-500">Trajectory</span></h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full" />
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-slate-800 hidden md:block" />
            
            {timelineData.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center justify-between mb-24 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <motion.div 
                   whileHover={{ y: -10 }}
                   className="w-full md:w-[45%] p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-6xl font-black text-slate-800/50 group-hover:text-amber-500/10 transition-colors absolute right-6 top-6 leading-none">{item.year}</span>
                  <h4 className="text-2xl font-bold text-white mb-4 relative z-10">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed relative z-10">{item.desc}</p>
                </motion.div>
                
                {/* Central Dot */}
                <div className="w-12 h-12 rounded-full bg-slate-950 border-4 border-slate-800 flex items-center justify-center z-10 hidden md:flex">
                   <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
                </div>
                
                <div className="w-full md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION BENTO GRID --- */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="lg:col-span-2 p-12 rounded-[3.5rem] bg-slate-900 border border-slate-800 relative overflow-hidden group shadow-2xl"
            >
              <FaRocket className="absolute -right-10 -bottom-10 text-[18rem] text-white/5 rotate-12 group-hover:text-amber-500/5 transition-colors duration-700" />
              <div className="relative z-10">
                <h3 className="text-5xl font-black text-white mb-8 tracking-tighter">Our Vision</h3>
                <p className="text-2xl text-slate-400 leading-relaxed max-w-2xl font-light">
                  To be the global benchmark for integrated business solutions, where every client interaction transforms into a legacy of success. 
                  <span className="text-amber-500/80 italic block mt-4 font-normal text-xl">"We don't just solve problems; we redefine what's possible."</span>
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-12 rounded-[3.5rem] bg-gradient-to-br from-amber-500 to-orange-600 text-slate-950 flex flex-col justify-between shadow-2xl shadow-amber-500/10"
            >
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-10">
                   <FiTarget size={32} />
                </div>
                <h3 className="text-4xl font-black uppercase leading-[0.9] mb-6 tracking-tighter">Our <br /> Mission</h3>
                <p className="font-bold text-lg leading-snug">
                  Delivering innovative, reliable, and scalable services that empower stakeholders and drive sustainable growth across the globe.
                </p>
              </div>
              <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                <BsArrowRight size={50} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP (SYED FAZAL UR RAHMAN) --- */}
      <section className="py-32 bg-[#010413] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="w-full lg:w-5/12 relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-[4rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse" />
              <div className="relative z-10 rounded-[3.5rem] overflow-hidden border border-slate-800 aspect-[4/5] bg-slate-900 shadow-2xl">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5 }}
                  src={fazalImg} 
                  alt="Syed Fazal Ur Rahman" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                />
                <div className="absolute bottom-10 right-[-20px] bg-amber-500 text-slate-950 px-8 py-4 rounded-2xl shadow-xl">
                  <p className="text-4xl font-black leading-none">5+</p>
                  <p className="text-[10px] font-black uppercase tracking-tighter">Years Excellence</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent opacity-80" />
              </div>
            </div>

            <div className="w-full lg:w-7/12 space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                  <span className="text-amber-500 text-xs font-black tracking-[0.3em] uppercase">CEO</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85]">
                  SYED FAZAL <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">UR RAHMAN</span>
                </h2>
              </div>
              
              <p className="text-xl text-slate-400 leading-relaxed font-light max-w-2xl">
                SYED FAZAL UR RAHMAN leads with a vision that blends AI-driven precision with human-centric empathy, ensuring every client interaction is defined by radical transparency and operational mastery.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: <FiTarget />, text: "Strategic Talent Acquisition" },
                  { icon: <BsCpu />, text: "Operational Digitalization" },
                  { icon: <FaShieldAlt />, text: "Governance & Compliance" },
                  { icon: <FaHandshake />, text: "Scaling BPO/IT Operations" }
                ].map((pillar, i) => (
                  <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center gap-3 p-4 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-amber-500/50 transition-all">
                    <span className="text-amber-500 text-xl">{pillar.icon}</span>
                    <span className="text-slate-300 font-bold text-sm tracking-wide">{pillar.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-12 pt-6">
                <div className="flex items-center gap-8">
                  <div>
                    <h5 className="text-white font-black text-3xl">500+</h5>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">Placements</p>
                  </div>
                  <div className="w-[1px] h-10 bg-slate-800" />
                  <div>
                    <h5 className="text-white font-black text-3xl">Global</h5>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">Outreach</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/brainy-troves-consultancy/" className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-500 transition-all"><BsLinkedin size={20}/></a>
                  <a href="https://www.instagram.com/brainytroves?igsh=MWR4MTVzdnlkOWk4eQ%3D%3D&utm_source=qr" className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-500 transition-all"><FaInstagram size={20}/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MULTI-SECTOR SERVICE STACK --- */}
      <section className="py-32 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-amber-500/10 blur-[180px] rounded-full" />

      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-5xl font-black mb-6 tracking-tighter text-white">
            A Full-Spectrum <span className="text-amber-500 relative">
              Service Stack
              <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-amber-500 animate-pulse"></span>
            </span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            BTCS operates at the intersection of technology, talent, and transformation. 
            We don’t just provide services — we build scalable business ecosystems that help companies grow faster and smarter.
          </p>
        </motion.div>

        {/* Stats Counter */}
        <div className="grid md:grid-cols-3 gap-10 mb-24 text-center">
          {[
            { number: 5, label: "Years Experience" },
            { number: 150, label: "Enterprise Clients" },
            { number: 320, label: "Projects Delivered" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-slate-900/40 border border-slate-800"
            >
              <h3 className="text-5xl font-bold text-amber-500">
                <CountUp end={stat.number} duration={3} />+
              </h3>
              <p className="text-slate-400 mt-3">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Services */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((sector, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -12, rotateX: 3, rotateY: -3 }}
              className="relative p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 group transition-all duration-500 overflow-hidden"
            >
              {/* hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-500/10" />

              {/* icon */}
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 text-3xl mb-8 
              group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-500 group-hover:rotate-12">
                {sector.icon}
              </div>

              {/* title */}
              <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {sector.title}
              </h4>

              {/* description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {sector.desc}
              </p>

              {/* list */}
              <ul className="space-y-3 mb-8">
                {sector.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-slate-500 group-hover:text-slate-300 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="text-amber-500 font-semibold tracking-wide relative">
                Learn More →
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-500"></span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

      {/* --- FINAL IMPACT CTA --- */}
      <section className="py-40 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              SHAPING <span className="text-amber-500">LEGACIES.</span> <br /> 
              ONE PARTNERSHIP <br /> 
              AT A TIME.
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
              <button 
                onClick={() => navigate('/contactus')}
                className="group px-12 py-6 bg-amber-500 text-slate-950 font-black rounded-2xl hover:bg-white transition-all shadow-2xl shadow-amber-500/20 flex items-center gap-3"
              >
                JOIN THE TROVE <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-12 py-6 border border-slate-800 text-white font-black rounded-2xl hover:bg-slate-900 transition-all">
                REQUEST CONSULTATION
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;