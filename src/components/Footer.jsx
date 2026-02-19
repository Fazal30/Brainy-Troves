import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdArrowForward } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="bg-[#0F172A] text-white relative overflow-hidden border-t border-slate-800"
    >
      {/* Background Subtle Gradient & Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#F59E0B 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <div className="relative max-w-7xl mx-auto pt-20 pb-10 px-6 lg:px-8">
        
        {/* Newsletter / CTA Section */}
        <motion.div 
          variants={fadeInUp}
          className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 md:p-12 rounded-[2.5rem] mb-20 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-md">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Stay ahead of the <span className="text-amber-500">Talent Curve.</span></h3>
            <p className="text-slate-400">Join our monthly brief on market trends and executive insights.</p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Business Email" 
              className="bg-slate-900 border border-slate-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors sm:w-80"
            />
            <button className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 group">
              Subscribe <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h1 className="text-3xl font-black text-white tracking-tighter">
              BRAINY<span className="text-amber-500">TROVES</span>
            </h1>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              A premier global consultancy architecting high-performance workforces. We bridge the gap between human potential and corporate excellence.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaLinkedinIn, link: "#" },
                { icon: FaTwitter, link: "#" },
                { icon: FaInstagram, link: "#" },
                { icon: FaWhatsapp, link: "https://wa.me/919620996689" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, backgroundColor: '#F59E0B', color: '#0F172A' }}
                  href={social.link}
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 transition-all shadow-lg"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={fadeInUp} className="lg:ml-8">
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em] mb-8">Navigation</h2>
            <nav className="flex flex-col gap-4">
              {["Home", "Services", "About Us", "Clients", "Careers", "Contactus"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase().replace(" ", "")}`}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="h-px w-0 bg-amber-500 group-hover:w-4 transition-all duration-300"></span>
                  {link}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em] mb-8">Specializations</h2>
            <nav className="flex flex-col gap-4">
              {[
                "Executive Placement",
                "Graduate Recruitment",
                "Career Transitioning",
                "Talent Architecture",
                "Market Intelligence",
              ].map((item) => (
                <Link
                  key={item}
                  to="/services"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Office Column */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em] mb-8">Global HQ</h2>
            <div className="space-y-4">
              <a href="mailto:info@brainytroves.com" className="flex items-start gap-3 group">
                <div className="mt-1 p-2 rounded-md bg-slate-800 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
                  <MdEmail size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Email Us</p>
                  <p className="text-slate-300 group-hover:text-white transition-colors">info@brainytroves.com</p>
                </div>
              </a>
              <a href="tel:+919620996689" className="flex items-start gap-3 group">
                <div className="mt-1 p-2 rounded-md bg-slate-800 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
                  <MdPhone size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Call Support</p>
                  <p className="text-slate-300 group-hover:text-white transition-colors">+91 96209 96689</p>
                </div>
              </a>
              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-2 rounded-md bg-slate-800 text-amber-500">
                  <MdLocationOn size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Find Us</p>
                  <p className="text-slate-300">Electronic City, Phase 1<br/>Bengaluru, KA 560100</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm"
        >
          <p className="text-slate-500">
            © {currentYear} <span className="text-slate-300 font-bold tracking-widest uppercase ml-1">Brainy Troves</span>. All rights reserved.
          </p>
          <div className="flex gap-8 text-slate-500">
            <Link to="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-amber-500 transition-colors">Cookie Settings</Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;