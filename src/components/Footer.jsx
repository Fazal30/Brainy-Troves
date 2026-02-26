import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaWhatsapp, FaArrowUp, FaGlobeAmericas } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdArrowForward, MdRocketLaunch, MdShield } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredLink, setHoveredLink] = useState(null);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socialLinks = [
    { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/brainy-troves-consultancy/", color: "#0077b5" },
    { icon: FaInstagram, link: "https://www.instagram.com/brainytroves", color: "#e4405f" },
    { icon: FaWhatsapp, link: "https://wa.me/919620996689", color: "#25d366" },
    { icon: FaTwitter, link: "#", color: "#1da1f2" },
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="bg-[#020617] text-white relative overflow-hidden border-t border-slate-800/50"
    >
      {/* --- ELITE BACKGROUND ANIMATIONS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, 50, 0] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-amber-500 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.07, 0.03],
            y: [0, -100, 0] 
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px]" 
        />
        
        {/* Grid Pattern with Shine */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: `linear-gradient(#F59E0B 1px, transparent 1px), linear-gradient(90deg, #F59E0B 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto pt-28 pb-12 px-6 lg:px-8 z-10">
        
        {/* --- DYNAMIC CTA SECTION --- */}
        <motion.div 
          variants={itemVariants}
          className="relative group bg-gradient-to-b from-slate-800/40 to-slate-900/60 backdrop-blur-3xl border border-white/10 p-1 rounded-[3.5rem] mb-24 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="bg-[#020617]/40 rounded-[3.4rem] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/5">
            <div className="max-w-xl space-y-6 text-center lg:text-left">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] font-black uppercase tracking-[0.2em]"
              >
                <MdRocketLaunch className="animate-pulse" /> Dispatching Intelligence
              </motion.div>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] text-white">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">Evolve?</span>
              </h3>
              <p className="text-slate-400 text-lg font-light">Join 5,000+ executives receiving our weekly talent intelligence report.</p>
            </div>

            <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4 relative">
              <input 
                type="email" 
                placeholder="Ex: ceo@company.com" 
                className="bg-slate-950/50 border border-slate-800 rounded-2xl px-8 py-6 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all sm:w-96 placeholder:text-slate-600"
              />
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(245, 158, 11, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-amber-500 text-slate-950 font-black py-6 px-12 rounded-2xl transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
              >
                <span className="relative z-10">SUBSCRIBE</span>
                <MdArrowForward className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                <motion.div 
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  style={{ opacity: 0.2 }}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* --- MAIN NAVIGATION HUB --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20 mb-28">
          
          {/* Brand & Socials */}
          <motion.div variants={itemVariants} className="space-y-10">
            <Link to="/" className="inline-block group">
                <h1 className="text-4xl font-black text-white tracking-tighter">
                  BRAINY<span className="text-amber-500 italic">TROVES</span>
                </h1>
                <div className="h-[2px] w-12 bg-amber-500 mt-2 group-hover:w-full transition-all duration-700" />
            </Link>
            <p className="text-slate-400 leading-relaxed font-light text-lg">
              Architecting high-performance human ecosystems for the world's most ambitious enterprises.
            </p>
            <div className="flex gap-5">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -10, scale: 1.1 }}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all shadow-2xl relative group"
                >
                  <social.icon size={22} className="relative z-10" />
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" style={{ backgroundColor: social.color, opacity: 0.15 }} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links with Hover Effect */}
          <motion.div variants={itemVariants}>
            <h2 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.4em] mb-12 flex items-center gap-4">
              <span className="w-10 h-px bg-amber-500/20" /> NAVIGATE
            </h2>
            <nav className="space-y-6">
              {["Home", "Services", "About", "Contactus"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase().replace(" ", "")}`}
                  onMouseEnter={() => setHoveredLink(link)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="block text-slate-400 hover:text-white transition-all duration-300 relative"
                >
                  <span className="flex items-center gap-4 group">
                    <span className={`h-1 w-1 rounded-full bg-amber-500 transition-all duration-300 ${hoveredLink === link ? 'scale-[3] shadow-[0_0_10px_#f59e0b]' : 'opacity-20'}`} />
                    <span className="font-bold tracking-widest text-xs uppercase">{link}</span>
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Service Tags */}
          <motion.div variants={itemVariants}>
            <h2 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.4em] mb-12 flex items-center gap-4">
                <span className="w-10 h-px bg-amber-500/20" /> EXPERTISE
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { name: "Executive Search", path: "/services" },
                { name: "IT Outsourcing", path: "/services" },
                { name: "BPO Support", path: "/services" },
                { name: "Strategic Staffing", path: "/services" }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-slate-900/30 border border-transparent hover:border-slate-800 hover:bg-slate-900/50 transition-all"
                >
                  <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">{item.name}</span>
                  <MdArrowForward className="text-amber-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Global HQ Detail */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.4em] mb-12 flex items-center gap-4">
                <span className="w-10 h-px bg-amber-500/20" /> CONNECT
            </h2>
            <div className="space-y-6">
              <a href="mailto:info@brainytroves.com" className="group flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-500">
                   <MdEmail size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Email</p>
                  <p className="text-slate-200 group-hover:text-amber-500 transition-colors font-medium">info@brainytroves.com</p>
                </div>
              </a>
              <div className="group flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                   <MdLocationOn size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">HQ</p>
                  <p className="text-slate-200 font-medium">Electronic City, Phase 1<br/>Bengaluru, KA 560100</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- ELITE FOOTER BAR --- */}
        <motion.div
          variants={itemVariants}
          className="pt-12 border-t border-slate-800/50 flex flex-col lg:flex-row justify-between items-center gap-10 text-[11px] font-bold tracking-[0.2em] relative"
        >
          <div className="flex items-center gap-3 order-2 lg:order-1 text-slate-500">
            <FaGlobeAmericas className="text-amber-500 animate-spin-slow" style={{ animationDuration: '10s' }} />
            <span>OPERATING GLOBALLY</span>
            <span className="w-1 h-1 rounded-full bg-slate-800" />
            <span>© {currentYear} BRAINY TROVES</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-slate-500 order-1 lg:order-2">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
               <Link key={item} to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-amber-500 transition-colors flex items-center gap-2 group">
                  <MdShield className="opacity-0 group-hover:opacity-100 transition-opacity" /> {item.toUpperCase()}
               </Link>
            ))}
          </div>

          {/* Floating Back to Top */}
          <motion.button
            whileHover={{ y: -10, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="lg:absolute left-1/2 lg:-translate-x-1/2 -top-10 w-20 h-20 rounded-full bg-[#020617] border border-slate-800 flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.8)] z-30 group"
          >
            <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.6)] transition-all">
              <FaArrowUp />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;