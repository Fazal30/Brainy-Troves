import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { BsArrowRight, BsCheck2Circle, BsLightningCharge, BsCpu, BsPeople, BsHeadset, BsGraphUp } from "react-icons/bs";
import { FiTarget, FiUsers, FiTrendingUp, FiBriefcase, FiGlobe, FiLayers, FiSearch, FiCode } from "react-icons/fi";
import OurClient from "./OurClient";

import { FaHeartbeat, FaShoppingCart, FaUniversity, FaIndustry, FaGraduationCap, FaTruck, FaRocket } from "react-icons/fa";

const industries = [
  { name: "Healthcare", icon: <FaHeartbeat className="text-amber-500"/> },
  { name: "E-Commerce", icon: <FaShoppingCart className="text-amber-500"/> },
  { name: "FinTech", icon: <FaUniversity className="text-amber-500"/> },
  { name: "Manufacturing", icon: <FaIndustry className="text-amber-500"/> },
  { name: "Retail", icon: <FaShoppingCart className="text-amber-500"/> },
  { name: "Startups", icon: <FaRocket className="text-amber-500"/> },
  { name: "Education", icon: <FaGraduationCap className="text-amber-500"/> },
  { name: "Logistics", icon: <FaTruck className="text-amber-500"/> },
];
const Home = () => {
  const navigate = useNavigate();
  const [activeSector, setActiveSector] = useState(0);
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const sectors = [
    {
      title: "IT & Digital",
      icon: <BsCpu />,
      content: ["AI & Automation", "Cloud Infrastructure", "Cybersecurity", "Custom Software"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Recruitment",
      icon: <BsPeople />,
      content: ["Executive Search", "Bulk Hiring", "Payroll Mgmt", "Staffing Solutions"],
      color: "from-amber-500 to-orange-400"
    },
    {
      title: "BPO & KPO",
      icon: <BsHeadset />,
      content: ["Customer Support", "Data Processing", "Back Office", "Market Research"],
      color: "from-emerald-500 to-teal-400"
    },
    {
      title: "Consulting",
      icon: <BsGraphUp />,
      content: ["Business Strategy", "Digital Transformation", "Compliance", "Process Optimization"],
      color: "from-purple-500 to-pink-400"
    }
  ];

  return (
    <div className="bg-slate-950 text-white selection:bg-amber-500/30 overflow-x-hidden font-sans mt-24 md:mt-20">
      
      <section
  ref={targetRef}
  className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 sm:px-6"
>

  <div className="absolute inset-0 z-0">
    {/* amber glow */}
    <div className="absolute top-[-15%] left-[-10%] w-[60vw] h-[60vw] bg-amber-500/10 rounded-full blur-[150px] animate-pulse" />

    {/* blue glow */}
    <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[150px] animate-[pulse_8s_infinite]" />

    {/* center glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[120px]" />
  </div>

  {/* grid pattern */}
  <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:36px_36px]" />

  <motion.div
    style={{ opacity, scale }}
    className="container mx-auto relative z-10 text-center"
  >

    <motion.h1
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="
      font-black tracking-tight leading-[0.85] mb-6
      text-[clamp(3rem,9vw,9rem)]
      "
    >
      <span className="bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-transparent text-8xl">
        BT
      </span>
      <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent animate-pulse text-8xl">
        CS
      </span>
    </motion.h1>

    {/* - SUBTITLE - */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="
      text-slate-300 font-light leading-relaxed
      max-w-4xl mx-auto mb-10
      text-[clamp(1rem,1.4vw,1.5rem)]
      "
    >
      Brainy Troves Consultancy & Services integrates
      <span className="text-white font-semibold"> Technology</span>,
      <span className="text-white font-semibold"> Talent</span>, and
      <span className="text-white font-semibold"> Strategy</span>
      to help startups, enterprises and MSMEs scale faster, reduce operational
      cost and accelerate growth.
    </motion.p>

    {/* - FLOATING SERVICE PILLS - */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl mx-auto"
    >
      {[
        "IT Solutions",
        "Recruitment",
        "BPO/KPO",
        "Consulting",
        "Training",
        "Managed Services",
      ].map((item, i) => (
        <motion.span
          key={i}
          whileHover={{ y: -4, scale: 1.05 }}
          className="px-4 py-2 text-xs sm:text-sm border border-slate-700 rounded-full 
          bg-slate-900/60 backdrop-blur-md text-slate-300
          hover:border-amber-500 hover:text-amber-500 transition-all"
        >
          {item}
        </motion.span>
      ))}
    </motion.div>

    {/* - CTA BUTTONS - */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-6"
    >
      {/* Primary */}
      <button
        onClick={() => navigate("/contactus")}
        className="group relative px-10 sm:px-12 py-5 bg-amber-500 text-slate-950 font-black rounded-2xl overflow-hidden transition-all hover:scale-105"
      >
        <span className="relative z-10 flex items-center gap-2">
          START A PROJECT <BsArrowRight />
        </span>

        {/* shine effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1s]" />
      </button>

      {/* Secondary */}
      <a
        href="https://wa.me/919620996689"
        className="px-10 sm:px-12 py-5 border border-slate-700 rounded-2xl font-bold 
        hover:bg-white hover:text-slate-950 transition-all backdrop-blur-md"
      >
        TALK TO CONSULTANT
      </a>
    </motion.div>

    {/* - STATS (GLASS CARDS) - */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20 max-w-5xl mx-auto"
    >
      {[
        { num: "6+", label: "Service Sectors" },
        { num: "20+", label: "Solutions Offered" },
        { num: "100%", label: "Client Focus" },
        { num: "24/7", label: "Support" },
      ].map((s, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -8 }}
          className="bg-slate-900/60 border border-slate-800 rounded-2xl py-7 backdrop-blur-xl shadow-xl"
        >
          <h3 className="text-3xl md:text-4xl font-black text-amber-500">
            {s.num}
          </h3>
          <p className="text-slate-400 text-sm mt-1">{s.label}</p>
        </motion.div>
      ))}
    </motion.div>

    {/* SCROLL INDICATOR - */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.3 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-500"
    >
      <span className="text-xs tracking-widest mb-2">SCROLL</span>
      <div className="w-5 h-9 border border-slate-600 rounded-full flex justify-center">
        <div className="w-1 h-2 bg-amber-500 rounded-full mt-2 animate-bounce" />
      </div>
    </motion.div>

  </motion.div>
      </section>

      {/* --- SECTOR SELECTOR: PREMIUM INTERACTIVE EXPERIENCE --- */}
      <section className="relative py-36 overflow-hidden bg-slate-950">

  {/* Animated Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-amber-600/10 blur-[140px] rounded-full animate-pulse" />
    <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[140px] rounded-full" />
  </div>

  <div className="container mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-amber-500 font-black tracking-[0.4em] uppercase text-xs mb-6">
        Multi-Sector Expertise
      </h2>

      <h3 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
        One Organization. <br/>
        <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
          Infinite Solutions.
        </span>
      </h3>

      <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
        BTCS delivers cross-industry innovation by integrating technology,
        consulting, talent, and operations under one powerful ecosystem.
      </p>
    </div>


    {/* Sector Tabs */}
    <div className="flex flex-wrap justify-center gap-5 mb-20">
      {sectors.map((s, i) => (
        <motion.button
          key={i}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveSector(i)}
          className={`px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 relative overflow-hidden ${
            activeSector === i
              ? "bg-amber-500 text-slate-950 shadow-2xl shadow-amber-500/20"
              : "bg-slate-900 border border-slate-800 text-slate-400 hover:border-slate-600"
          }`}
        >
          <span className="text-lg">{s.icon}</span>
          {s.title}

          {activeSector === i && (
            <motion.span
              layoutId="sectorIndicator"
              className="absolute bottom-0 left-0 w-full h-[3px] bg-slate-950"
            />
          )}
        </motion.button>
      ))}
    </div>


    {/* Sector Content Card */}
    <AnimatePresence mode="wait">
      <motion.div
        key={activeSector}
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.98 }}
        transition={{ duration: 0.4 }}
        className="relative grid lg:grid-cols-2 gap-16 items-center bg-slate-900/60 backdrop-blur-xl p-14 rounded-[3rem] border border-slate-800 shadow-2xl"
      >

        {/* Left Content */}
        <div>

          <h4
            className={`text-5xl font-black mb-6 bg-gradient-to-r ${sectors[activeSector].color} bg-clip-text text-transparent`}
          >
            {sectors[activeSector].title}
          </h4>

          <p className="text-slate-400 mb-10 text-lg leading-relaxed">
            {sectors[activeSector].description ||
              "We provide strategic, operational, and technology-driven services tailored for this industry, ensuring measurable growth and long-term sustainability."}
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {sectors[activeSector].content.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 text-slate-300 bg-slate-800/60 p-4 rounded-xl border border-slate-700 hover:border-amber-500 transition"
              >
                <BsCheck2Circle className="text-amber-500 text-lg" />
                {item}
              </motion.div>
            ))}
          </div>

          {/* Sector Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            {["98%", "24/7", "Global"].map((stat, idx) => (
              <div key={idx} className="text-center">
                <h5 className="text-2xl font-black text-amber-500">{stat}</h5>
                <p className="text-xs text-slate-500 mt-1">
                  {idx === 0 && "Client Satisfaction"}
                  {idx === 1 && "Support Availability"}
                  {idx === 2 && "Service Reach"}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ x: 8 }}
            className="mt-12 flex items-center gap-2 text-amber-500 font-black tracking-widest text-sm group"
          >
            <span className="relative">
              EXPLORE THIS SECTOR
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </span>
            <BsArrowRight />
          </motion.button>
        </div>


        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[2rem] overflow-hidden group"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${sectors[activeSector].color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
          />

          <img
            src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426`}
            alt="Sector"
            className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-5 py-3 rounded-xl border border-slate-700 text-sm text-slate-300">
            Industry-Focused Strategy
          </div>
        </motion.div>

      </motion.div>
    </AnimatePresence>

  </div>
      </section>

      {/* --- INDUSTRIES WE SERVE : PREMIUM PARALLAX MARQUEE --- */}
    <section className="relative py-28 overflow-hidden bg-slate-950 border-y border-slate-900">

  {/* Background Grid Pattern */}
  <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] [background-size:40px_40px]" />

  {/* Glow Beam */}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-40 animate-pulse"/>

  <div className="container mx-auto px-6 mb-16 text-center">
    <h4 className="text-slate-500 font-bold tracking-[0.4em] uppercase text-xs mb-5">
      Industries We Serve
    </h4>

    <h2 className="text-4xl md:text-5xl font-black">
      Trusted Across
      <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
        {" "}Multiple Domains
      </span>
    </h2>

    <p className="text-slate-400 max-w-2xl mx-auto mt-4">
      Our solutions adapt to diverse industries — from fast-growing startups to
      large enterprises — helping businesses innovate, scale, and compete globally.
    </p>
  </div>


  {/* Fade Edges (VERY IMPORTANT for premium look) */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-slate-950 to-transparent z-10"/>
  <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-slate-950 to-transparent z-10"/>


  {/* Marquee Layer 1 (Fast) */}
  <div className="flex whitespace-nowrap gap-14 mb-10">
    <motion.div
      animate={{ x: ["0%", "-100%"] }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      className="flex gap-14 items-center text-3xl md:text-5xl font-black text-slate-800"
    >
      {industries.map((ind, i) => (
        <div
          key={i}
          className="group flex items-center gap-5 cursor-pointer transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-amber-500 group-hover:shadow-lg group-hover:shadow-amber-500/20 transition">
            {ind.icon}
          </div>

          <span className="group-hover:text-amber-500 transition duration-300">
            {ind.name}
          </span>

          <span className="text-amber-500/20">•</span>
        </div>
      ))}

      {/* Duplicate */}
      {industries.map((ind, i) => (
        <div key={"dup"+i} className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
            {ind.icon}
          </div>
          <span>{ind.name}</span>
          <span className="text-amber-500/20">•</span>
        </div>
      ))}
    </motion.div>
  </div>


  {/* Marquee Layer 2 (Slow Opposite Direction → Parallax) */}
  <div className="flex whitespace-nowrap gap-14">
    <motion.div
      animate={{ x: ["-100%", "0%"] }}
      transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
      className="flex gap-14 items-center text-2xl md:text-4xl font-black text-slate-700"
    >
      {industries.map((ind, i) => (
        <div key={i} className="flex items-center gap-5 opacity-70 hover:opacity-100 transition">
          <span className="text-amber-500/30">◆</span>
          <span className="hover:text-amber-400 transition">{ind.name}</span>
        </div>
      ))}

      {industries.map((ind, i) => (
        <div key={"dup2"+i} className="flex items-center gap-5 opacity-70">
          <span className="text-amber-500/30">◆</span>
          <span>{ind.name}</span>
        </div>
      ))}
    </motion.div>
  </div> 
    </section>

      {/* --- CORE STRENGTHS : PREMIUM ANIMATED BENTO GRID --- */}
    <section className="relative py-36 overflow-hidden bg-slate-950">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-amber-600/10 blur-[140px] rounded-full animate-pulse"/>
    <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[140px] rounded-full"/>
  </div>

  <div className="container mx-auto px-6">

    {/* Section Heading */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-20"
    >
      <h2 className="text-amber-500 font-black tracking-[0.4em] uppercase text-xs mb-6">
        Core Strengths
      </h2>
      <h3 className="text-4xl md:text-6xl font-black">
        The Foundation of
        <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
          {" "}Our Excellence
        </span>
      </h3>
    </motion.div>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* Vision & Mission Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="relative lg:col-span-2 p-14 rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 overflow-hidden group"
      >
        {/* Animated Border Glow */}
        <div className="absolute inset-0 rounded-[3rem] border border-transparent group-hover:border-amber-500/40 transition-all duration-500"/>

        <div>
          <h3 className="text-4xl font-bold mb-6 group-hover:text-amber-500 transition">
            Our Vision & Mission
          </h3>

          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            To become a leading service-based enterprise delivering integrated 
            solutions across IT, staffing, consulting, and business operations 
            while maintaining ethical governance and scalable models.
          </p>
        </div>

        {/* Micro Values */}
        <div className="mt-14 flex flex-wrap gap-6">
          {[
            { title: "Ethics", desc: "Transparent & Ethical Practices" },
            { title: "Innovation", desc: "Continuous Improvement" },
            { title: "Scalability", desc: "Modular Service Models" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-700 hover:border-amber-500 transition"
            >
              <h4 className="text-amber-500 font-bold mb-2">{item.title}</h4>
              <p className="text-xs text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>


      {/* Growth Partner Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ rotate: 1, scale: 1.03 }}
        className="relative p-14 rounded-[3rem] bg-amber-500 text-slate-950 flex flex-col justify-center items-center text-center shadow-2xl"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <FiTrendingUp size={70} className="mb-8"/>
        </motion.div>

        <h3 className="text-3xl font-black mb-4 uppercase">
          Growth Partner
        </h3>

        <p className="font-medium max-w-xs">
          Providing strategic insights that transform ideas into sustainable enterprises.
        </p>

        {/* Animated Stats */}
        <div className="mt-10 text-center">
          <h4 className="text-3xl font-black">100%</h4>
          <p className="text-xs mt-1">Commitment to Client Success</p>
        </div>
      </motion.div>


      {/* Strength Items */}
      {[
        { title: "Skilled Professionals", desc: "Experienced & certified experts" },
        { title: "Client-Centric Approach", desc: "Solutions tailored to your business" },
        { title: "Technology Driven", desc: "Modern tools & scalable systems" },
      ].map((strength, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
          viewport={{ once: true }}
          whileHover={{ y: -10, scale: 1.03 }}
          className="relative p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800 hover:border-amber-500 transition-all group overflow-hidden"
        >
          {/* Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition duration-500"/>

          <motion.div
            whileHover={{ rotate: 10 }}
            className="mb-6"
          >
            <BsCheck2Circle className="text-amber-500 text-4xl"/>
          </motion.div>

          <h4 className="text-xl font-bold group-hover:text-amber-500 transition-colors mb-3">
            {strength.title}
          </h4>

          <p className="text-slate-400 text-sm">
            {strength.desc}
          </p>
        </motion.div>
      ))}

    </div>

  </div>
    </section>

      {/* --- CLIENTS : TRUST & PARTNERS --- */}
    <section className="relative py-32 bg-slate-950 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-amber-500/10 blur-[140px] rounded-full animate-pulse"/>
    <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[140px] rounded-full"/>
  </div>

  {/* Top Divider Beam */}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-40 animate-pulse"/>

  <div className="container mx-auto px-6">

    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-amber-500 font-black tracking-[0.4em] uppercase text-xs mb-6">
        Our Clients
      </h2>

      <h3 className="text-4xl md:text-6xl font-black">
        Trusted By
        <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
          {" "}Growing Businesses
        </span>
      </h3>

      <p className="text-slate-400 max-w-2xl mx-auto mt-6">
        We collaborate with startups, SMEs, and enterprises across multiple
        industries delivering measurable impact and long-term partnerships.
      </p>
    </motion.div>


    {/* Client Logos Wrapper */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
      className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-[3rem] p-12 shadow-2xl shadow-amber-500/5"
    >
      {/* Subtle Hover Glow */}
      <div className="absolute inset-0 rounded-[3rem] border border-transparent hover:border-amber-500/40 transition-all duration-500 pointer-events-none"/>

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="opacity-70 hover:opacity-100 transition duration-500"
      >
        <OurClient />
      </motion.div>
    </motion.div>

  </div>

    </section>

      {/* --- FINAL CTA : PREMIUM CONVERSION SECTION --- */}
     <section className="relative py-44 overflow-hidden bg-slate-950">

  {/* Animated Background Aura */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-[-25%] left-[-10%] w-[60%] h-[60%] bg-amber-500/10 rounded-full blur-[160px] animate-pulse"/>
    <div className="absolute bottom-[-25%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[160px]"/>
  </div>

  {/* Moving Light Beam */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -left-1/2 top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 animate-[shine_7s_linear_infinite]" />
  </div>

  <div className="container mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative bg-slate-900/70 backdrop-blur-xl border border-slate-800 p-14 md:p-24 rounded-[4rem] text-center overflow-hidden"
    >

      {/* Floating Accent Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/20 blur-[120px] -mr-40 -mt-40"/>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-xs font-bold tracking-widest uppercase mb-10"
      >
        <span className="w-2 h-2 bg-amber-400 rounded-full animate-ping"/>
        Let’s Build Something Together
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-5xl md:text-7xl font-black mb-8 leading-tight"
      >
        Transform Your
        <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
          Business Operations
        </span>
        With BTCS
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-14"
      >
        Whether you need IT solutions, skilled manpower, consulting, or operational
        support — our experts are ready to help you scale faster, reduce costs,
        and improve efficiency.
      </motion.p>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="flex flex-wrap justify-center gap-8 mb-14 text-sm text-slate-400"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-500 rounded-full"/> Free Consultation
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-500 rounded-full"/> 24 Hour Response
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-500 rounded-full"/> Dedicated Support Team
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="flex flex-col sm:flex-row justify-center gap-8"
      >

        {/* Primary Button */}
        <button
          onClick={() => navigate("/contactus")}
          className="group relative px-14 py-6 bg-amber-500 text-slate-950 font-black rounded-2xl text-lg overflow-hidden shadow-2xl shadow-amber-500/20"
        >
          <span className="relative z-10">Start a Project</span>

          {/* Ripple Hover */}
          <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full"/>
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919620996689"
          className="group relative px-14 py-6 border border-slate-700 rounded-2xl text-lg font-black overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            Speak to an Expert
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
          </span>

          <span className="absolute inset-0 bg-slate-800 opacity-0 group-hover:opacity-100 transition"/>
        </a>

      </motion.div>

      {/* Footer Credibility Line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-xs text-slate-500 mt-14"
      >
        Trusted by startups, SMEs & growing enterprises across multiple industries.
      </motion.p>

    </motion.div>
  </div>
     </section>
    </div>
  );
};

export default Home;