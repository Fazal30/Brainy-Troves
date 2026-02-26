import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { VscClose } from "react-icons/vsc";
import { BsWhatsapp, BsArrowRight } from "react-icons/bs";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const location = useLocation();

  // Framer Motion Scroll Progress for the thin top line
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  /* ---------------- LOGIC: HIDE ON SCROLL DOWN ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 50);

      if (currentScroll > lastScroll && currentScroll > 150) {
        setVisible(false); // Scrolling down
      } else {
        setVisible(true); // Scrolling up
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  /* ---------------- LOGIC: MOBILE MENU LOCK ---------------- */
  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "auto";
  }, [menu]);

  useEffect(() => setMenu(false), [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Expertise" },
    { path: "/about", label: "About" },
    { path: "/contactus", label: "Contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -110 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}
        className={`w-full transition-all duration-500 ${
          scrolled 
            ? "py-3 px-4 md:px-10" 
            : "py-6 px-6 md:px-12"
        }`}
      >
        {/* Progress Bar */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-[3px] bg-amber-500 origin-left z-50 shadow-[0_0_15px_#f59e0b]"
          style={{ scaleX }}
        />

        <div className={`max-w-7xl mx-auto transition-all duration-500 rounded-[2rem] ${
          scrolled 
            ? "bg-slate-950/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] px-6 py-2" 
            : "bg-transparent px-0"
        } flex items-center justify-between`}>
          
          {/* LOGO SECTION */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-amber-500/30 rounded-xl"
              />
              <div className="relative z-10 w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:rotate-90 transition-transform duration-500">
                <span className="text-slate-950 font-black text-xs">BT</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black tracking-tighter text-lg leading-none group-hover:text-amber-500 transition-colors">
                BRAINY<span className="text-amber-500 group-hover:text-white transition-colors">TROVES</span>
              </span>
              <span className="text-[8px] font-bold text-slate-500 tracking-[0.3em] uppercase">Consultancy</span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-6 py-2 group overflow-hidden"
              >
                <span className={`relative z-10 text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${
                  location.pathname === link.path ? "text-amber-500" : "text-slate-300 group-hover:text-white"
                }`}>
                  {link.label}
                </span>
                
                {/* Hover Background Pill */}
                <motion.div 
                  className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"
                  layoutId={scrolled ? "hoverPill" : ""}
                />

                {/* Active Indicator */}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-1 left-6 right-6 h-[2px] bg-amber-500"
                  />
                )}
              </Link>
            ))}

            <div className="h-6 w-[1px] bg-slate-800 mx-4" />

            {/* WhatsApp CTA */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919620996689"
              target="_blank"
              className="bg-amber-500 text-slate-950 px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:bg-white transition-all"
            >
              <BsWhatsapp size={14} /> TALK TO US
            </motion.a>
          </nav>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setMenu(true)}
            className="lg:hidden p-3 text-white bg-white/5 border border-white/10 rounded-2xl hover:bg-amber-500 hover:text-slate-950 transition-all"
          >
            <HiOutlineMenuAlt3 size={24} />
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {menu && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-slate-950/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex justify-between items-center">
                <span className="text-amber-500 font-black text-xs tracking-widest">MENU</span>
                <button 
                  onClick={() => setMenu(false)}
                  className="p-4 bg-white/5 rounded-full text-white"
                >
                  <VscClose size={30} />
                </button>
              </div>

              <nav className="mt-20 flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-5xl font-black tracking-tighter ${
                        location.pathname === link.path ? "text-amber-500" : "text-white/20 hover:text-white"
                      } transition-colors flex items-center gap-4 group`}
                    >
                      <span className="text-xs font-mono opacity-50">0{i+1}</span>
                      {link.label}
                      <BsArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto border-t border-white/10 pt-8 flex justify-between items-end">
                <div>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2">Global Inquiry</p>
                  <a href="mailto:info@brainytroves.com" className="text-xl font-bold text-white hover:text-amber-500 transition-colors">
                    info@brainytroves.com
                  </a>
                </div>
                <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-amber-500">
                      <BsWhatsapp size={20} />
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;