import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsArrowRight, BsWhatsapp } from "react-icons/bs";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // Handle scroll effects and progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About Us" },
    { path: "/contactus", label: "Contact Us" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full top-0 left-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 py-3" 
          : "bg-transparent py-6"
      }`}
    >
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-amber-600 to-amber-400"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand/Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"
            />
            <div className="relative w-11 h-11 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center font-black text-amber-500 text-xl">
              BT
            </div>
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-white">
            BRAINY<span className="text-amber-500">TROVES</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 relative group ${
                    location.pathname === link.path ? "text-amber-500" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Animated Center Underline */}
                  <span className={`absolute -bottom-2 left-1/2 w-0 h-[2px] bg-amber-500 transition-all duration-300 -translate-x-1/2 group-hover:w-full ${
                    location.pathname === link.path ? "w-full" : ""
                  }`} />
                </Link>
              </li>
            ))}
          </ul>

          {/* Social & CTA Section */}
          <div className="flex items-center gap-6 border-l border-slate-800 pl-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919620996689"
              target="_blank"
              className="relative group px-7 py-3 overflow-hidden rounded-full bg-amber-500 text-slate-950 font-black text-xs tracking-[0.15em] flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
              <BsWhatsapp size={16} />
              LET'S TALK
            </motion.a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenu(!menu)}
          className="lg:hidden p-2 text-white bg-slate-800/50 rounded-lg border border-slate-700"
        >
          {menu ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </motion.button>
      </div>

      {/* Modern Mobile Menu Overlay */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] z-[90] lg:hidden bg-slate-950/95 backdrop-blur-2xl flex flex-col p-8 gap-6 border-t border-slate-800"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setMenu(false)}
                  className={`text-4xl font-black tracking-tighter transition-all flex items-center justify-between group ${
                    location.pathname === link.path ? "text-amber-500" : "text-white"
                  }`}
                >
                  {link.label}
                  <BsArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-amber-500" size={24} />
                </Link>
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5 }}
              className="mt-auto border-t border-slate-800 pt-8"
            >
              <p className="text-slate-500 text-sm mb-4 tracking-widest uppercase font-bold">Quick Contact</p>
              <a href="tel:+919620996689" className="text-xl text-white font-bold tracking-tight">+91 96209 96689</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;