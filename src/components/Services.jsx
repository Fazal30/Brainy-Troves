import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MdStars, MdSchool, MdTrendingUp, MdGroups, 
  MdInsights, MdArrowForward, MdSettingsSuggest,
  MdDns, MdSecurity, MdAutoGraph
} from "react-icons/md";
import { FiLayers, FiActivity, FiGlobe, FiBriefcase } from "react-icons/fi";

const Services = () => {
  const [activeTab, setActiveTab] = useState("recruitment");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectors = {
    recruitment: {
      title: "Recruitment & Staffing",
      description: "Bridging the gap between organizations and elite skilled professionals.",
      icon: <MdGroups />,
      services: [
        { id: "R1", title: "Executive Search", desc: "Curating C-suite leadership for transformative growth.", icon: <MdStars /> },
        { id: "R2", title: "Bulk & Campus Hiring", desc: "Scaling workforces rapidly with high-caliber graduate talent.", icon: <MdSchool /> },
        { id: "R3", title: "Payroll & Compliance", desc: "Managing end-to-end HR outsourcing and verification.", icon: <MdSecurity /> }
      ]
    },
    it: {
      title: "IT & Digital Solutions",
      description: "Driving digital transformation through advanced AI and Cloud ecosystems.",
      icon: <MdDns />,
      services: [
        { id: "I1", title: "AI & Automation", desc: "Implementing intelligent workflows and robotic process automation.", icon: <MdAutoGraph /> },
        { id: "I2", title: "Cloud & Infrastructure", desc: "Scalable cloud management and cybersecurity hardening.", icon: <FiLayers /> },
        { id: "I3", title: "ERP/CRM Systems", desc: "Full-lifecycle implementation of Salesforce, SAP, and custom ERPs.", icon: <MdSettingsSuggest /> }
      ]
    },
    bpo: {
      title: "BPO & Operations",
      description: "Enhancing operational efficiency with cost-effective back-office solutions.",
      icon: <FiActivity />,
      services: [
        { id: "B1", title: "KPO & Market Research", desc: "Deep-dive data analytics and strategic market intelligence.", icon: <MdInsights /> },
        { id: "B2", title: "Customer Success", desc: "Multi-channel support and quality analysis auditing.", icon: <FiGlobe /> },
        { id: "B3", title: "Data Management", desc: "High-accuracy data processing and documentation support.", icon: <FiBriefcase /> }
      ]
    }
  };

  return (
    <main className="bg-[#020617] text-white min-h-screen pb-32 overflow-hidden selection:bg-amber-500/30">
      
      {/* --- DYNAMIC HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6">
        {/* Animated Background Grids */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-600/10 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-amber-500/30 bg-amber-500/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
            <span className="text-amber-500 text-xs font-black tracking-[0.4em] uppercase">Multi-Sector Excellence</span>
          </motion.div>

          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.85]"
          >
            ONE TROVE. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600">FULL SPECTRUM.</span>
          </motion.h1>
        </div>
      </section>

      {/* --- INTERACTIVE SECTOR SWITCHER --- */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="flex flex-wrap justify-center gap-4 bg-slate-900/50 p-3 rounded-[2.5rem] border border-slate-800 backdrop-blur-xl">
          {Object.keys(sectors).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-3 px-8 py-4 rounded-[2rem] font-bold text-sm uppercase tracking-widest transition-all duration-500 ${
                activeTab === key 
                ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105" 
                : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {sectors[key].icon} {sectors[key].title}
            </button>
          ))}
        </div>
      </section>

      {/* --- DYNAMIC CONTENT DISPLAY --- */}
      <section className="max-w-7xl mx-auto px-6 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "circOut" }}
            className="space-y-20"
          >
            {/* Sector Intro */}
            <div className="flex flex-col md:flex-row gap-12 items-end border-b border-slate-800 pb-16">
              <div className="md:w-2/3">
                <h2 className="text-5xl md:text-7xl font-black mb-6">{sectors[activeTab].title}</h2>
                <p className="text-xl text-slate-400 leading-relaxed font-light italic">
                   "{sectors[activeTab].description}"
                </p>
              </div>
              <div className="md:w-1/3 flex justify-end">
                <div className="text-[10rem] font-black text-white/5 select-none leading-none capitalize">
                  {activeTab.charAt(0)}
                </div>
              </div>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sectors[activeTab].services.map((service, i) => (
                <motion.div
                  key={service.id}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="group relative p-10 rounded-[3rem] bg-gradient-to-br from-slate-900 to-[#020617] border border-slate-800 hover:border-amber-500/50 transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 p-8 text-4xl text-white/5 group-hover:text-amber-500/10 font-black">
                    {service.id}
                  </div>
                  
                  <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 text-3xl mb-8 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-500">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-500 transition-colors">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm mb-8">
                    {service.desc}
                  </p>
                  
                  <button className="flex items-center gap-2 text-xs font-black tracking-widest uppercase text-slate-400 group-hover:text-white transition-all">
                    Detail Brief <MdArrowForward className="group-hover:translate-x-2 transition-transform"/>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* --- BTCS METHODOLOGY PATH --- */}
      <section className="mt-60 max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
           <h2 className="text-4xl md:text-6xl font-black mb-4">Precision <span className="text-amber-500">Execution</span></h2>
           <p className="text-slate-500">The BTCS blueprint for excellence.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-800 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {[
              { label: "Intelligence", desc: "Predictive data-driven auditing.", color: "bg-blue-500" },
              { label: "Vetting", desc: "Rigorous technical & cultural stress tests.", color: "bg-purple-500" },
              { label: "Synergy", desc: "Seamless integration into existing ops.", color: "bg-amber-500" },
              { label: "Optimization", desc: "Continuous performance monitoring.", color: "bg-emerald-500" }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                className="text-center group"
              >
                <div className={`w-12 h-12 ${step.color} rounded-full mx-auto mb-6 flex items-center justify-center text-slate-950 font-black shadow-2xl transition-transform group-hover:scale-125`}>
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold mb-2">{step.label}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="mt-48 px-6">
        <motion.div 
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          className="max-w-5xl mx-auto rounded-[4rem] p-12 md:p-24 text-center border border-slate-800 bg-slate-900/30 backdrop-blur-3xl relative overflow-hidden"
        >
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
          <h2 className="text-4xl md:text-6xl font-black mb-10 relative z-10 leading-tight">
            Ready to Integrate <br /> <span className="text-amber-500">Brainy Troves</span> Into Your DNA?
          </h2>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="px-12 py-6 bg-amber-500 text-slate-950 font-black rounded-2xl hover:scale-110 transition-transform">
              GET A CUSTOM QUOTE
            </button>
            <button className="px-12 py-6 border border-slate-700 text-white font-black rounded-2xl hover:bg-slate-800 transition-all">
              DOWNLOAD SERVICE CATALOG
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Services;