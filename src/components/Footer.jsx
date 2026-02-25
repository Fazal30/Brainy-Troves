import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdArrowForward, MdRocketLaunch } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="bg-[#020617] text-white relative overflow-hidden border-t border-slate-800/50"
    >
      {/* --- ADVANCED BACKGROUND DECOR --- */}
      {/* Mesh Gradient */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="relative max-w-7xl mx-auto pt-24 pb-12 px-6 lg:px-8 z-10">
        
        {/* --- NEWSLETTER / CTA --- */}
        <motion.div 
          variants={itemVariants}
          className="relative group bg-slate-900/40 backdrop-blur-2xl border border-white/5 p-1 md:p-1 rounded-[3rem] mb-24 overflow-hidden shadow-2xl"
        >
          <div className="bg-slate-950/80 rounded-[2.8rem] p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-xl space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest">
                <MdRocketLaunch className="animate-bounce" /> Newsletter
              </div>
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
                Architecting the <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Future of Work.</span>
              </h3>
            </div>

            <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4 relative">
              <input 
                type="email" 
                placeholder="Enter business email" 
                className="bg-slate-900/50 border border-slate-700/50 rounded-2xl px-8 py-5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all sm:w-96 backdrop-blur-md"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-500 hover:bg-white text-slate-950 font-black py-5 px-10 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(245,158,11,0.3)] group"
              >
                SUBSCRIBE <MdArrowForward className="group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* --- MAIN LINKS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
          
          {/* Brand Identity */}
          <motion.div variants={itemVariants} className="space-y-8">
            <Link to="/" className="inline-block group">
                <h1 className="text-4xl font-black text-white tracking-tighter transition-transform group-hover:scale-105 duration-300">
                BRAINY<span className="text-amber-500 italic">TROVES</span>
                </h1>
                <div className="h-1 w-0 bg-amber-500 group-hover:w-full transition-all duration-500 rounded-full" />
            </Link>
            <p className="text-slate-400 leading-relaxed font-light">
              Elevating global enterprises through strategic talent architecture and radical operational transparency.
            </p>
            <div className="flex gap-4">
              {[
                { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/brainy-troves-consultancy/" },
                { icon: FaInstagram, link: "https://www.instagram.com/brainytroves" },
                { icon: FaWhatsapp, link: "https://wa.me/919620996689" },
                { icon: FaTwitter, link: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -8, rotate: 8 }}
                  href={social.link}
                  className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500 transition-all shadow-xl group"
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xs font-black text-amber-500 uppercase tracking-[0.3em] mb-10 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-amber-500/30" /> Explorer
            </h2>
            <nav className="space-y-5">
              {["Home", "Services", "About", "Contactus"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase().replace(" ", "")}`}
                  className="block text-slate-400 hover:text-white transition-all group overflow-hidden"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-0 group-hover:w-5 h-[2px] bg-amber-500 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium tracking-wide">{link}</span>
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Specialized Services */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xs font-black text-amber-500 uppercase tracking-[0.3em] mb-10 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-amber-500/30" /> Services
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Executive Search", "Bulk Staffing", "IT Outsourcing", 
                "BPO Support", "Strategy", "Compliance"
              ].map((item) => (
                <motion.span 
                  key={item}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(245,158,11,0.1)' }}
                  className="px-4 py-2 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-400 cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-xs font-black text-amber-500 uppercase tracking-[0.3em] mb-10 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-amber-500/30" /> Contact
            </h2>
            <div className="space-y-6">
              <a href="mailto:info@brainytroves.com" className="group flex gap-4 p-4 rounded-2xl bg-slate-900/30 border border-transparent hover:border-slate-800 transition-all">
                <MdEmail size={24} className="text-amber-500 group-hover:rotate-12 transition-transform" />
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Email</p>
                  <p className="text-slate-300 group-hover:text-amber-500 transition-colors">info@brainytroves.com</p>
                </div>
              </a>
              <a href="tel:+919620996689" className="group flex gap-4 p-4 rounded-2xl bg-slate-900/30 border border-transparent hover:border-slate-800 transition-all">
                <MdPhone size={24} className="text-amber-500 group-hover:rotate-12 transition-transform" />
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-slate-300 group-hover:text-amber-500 transition-colors">+91 96209 96689</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <motion.div
          variants={itemVariants}
          className="pt-12 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-8 text-xs relative"
        >
          <p className="text-slate-500 order-2 md:order-1">
            © {currentYear} <span className="text-amber-500 font-black tracking-widest uppercase">Brainy Troves</span>. Crafted for Excellence.
          </p>
          
          <div className="flex gap-8 text-slate-500 order-1 md:order-2">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>

          {/* Scroll to Top Circle */}
          <motion.button
            whileHover={{ scale: 1.1, y: -5 }}
            onClick={scrollToTop}
            className="md:absolute left-1/2 md:-translate-x-1/2 -top-6 w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-2xl z-20 group"
          >
            <FaArrowUp className="group-hover:animate-bounce" />
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;