
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { VscClose } from "react-icons/vsc";
import { BsWhatsapp, BsGearFill } from "react-icons/bs";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const location = useLocation();

  /* ---------------- SCROLL LOCK (Mobile Menu) ---------------- */
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, [menu]);

  /* ---------------- CLOSE MENU ON ROUTE CHANGE ---------------- */
  useEffect(() => {
    setMenu(false);
  }, [location]);

  /* ---------------- ESC KEY CLOSE ---------------- */
  useEffect(() => {
    const escClose = (e) => {
      if (e.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", escClose);
    return () => window.removeEventListener("keydown", escClose);
  }, []);

  /* ---------------- SMOOTH SCROLL HANDLER ---------------- */
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll =
            document.body.scrollHeight - window.innerHeight;

          const progress = (window.scrollY / totalScroll) * 100;

          setScrollProgress(progress);
          setScrolled(window.scrollY > 40);

          /* Hide on scroll down / show on up */
          if (window.scrollY > lastScroll && window.scrollY > 120) {
            setVisible(false);
          } else {
            setVisible(true);
          }
          setLastScroll(window.scrollY);

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Expertise" },
    { path: "/about", label: "Legacy" },
    { path: "/contactus", label: "Contact" },
  ];

  /* ---------------- LOGO ---------------- */
  const Logo = () => (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center">
        {/* Rotating ring */}
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full text-amber-500/30"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="18 10"
          />
        </motion.svg>

        {/* Core */}
        <motion.div
          whileHover={{ scale: 1.12, rotate: 90 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative z-10 w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-slate-800 to-slate-950 border border-amber-500/50 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.4)] group-hover:shadow-[0_0_40px_rgba(245,158,11,0.8)] transition-all duration-500"
        >
          <span className="text-amber-500 font-black text-base tracking-tight">
            BT
          </span>
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-amber-500/10 rounded-lg"
          />
        </motion.div>
      </div>

      <div className="hidden sm:flex flex-col">
        <h1 className="text-lg md:text-xl font-black tracking-[0.18em] text-white leading-none">
          BRAINY<span className="text-amber-500">TROVES</span>
        </h1>
        <span className="text-[9px] font-bold text-slate-500 tracking-[0.35em] uppercase">
          Consultancy & Services
        </span>
      </div>
    </div>
  );

  return (
    <motion.header
      initial={{ y: -120 }}
      animate={{ y: visible ? 0 : -120 }}
      transition={{ duration: 0.35 }}
      className={`fixed w-full top-0 left-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/70 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      {/* Scroll Progress */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-800/40">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 shadow-[0_0_12px_#f59e0b]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.path} className="relative">
                <Link
                  to={link.path}
                  className={`group px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 relative z-10 ${
                    location.pathname === link.path
                      ? "text-slate-950"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.label}

                  {/* underline animation */}
                  <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-amber-500 transition-all duration-500 group-hover:w-full group-hover:left-0" />
                </Link>

                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-amber-500 rounded-lg z-0 shadow-[0_0_25px_rgba(245,158,11,0.45)]"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* WhatsApp */}
          <motion.a
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919620996689"
            target="_blank"
            className="group relative px-6 py-3 bg-slate-900 border border-slate-700 rounded-xl flex items-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-amber-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
            <BsWhatsapp className="relative z-10 text-amber-500 group-hover:text-slate-950 transition-colors" />
            <span className="relative z-10 text-[10px] font-black tracking-widest text-white group-hover:text-slate-950 transition-colors">
              DIRECT LINE
            </span>
          </motion.a>
        </nav>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenu(!menu)}
          className="lg:hidden w-11 h-11 flex items-center justify-center text-amber-500 bg-slate-900 border border-slate-800 rounded-xl"
        >
          {menu ? <VscClose size={24} /> : <HiOutlineMenuAlt3 size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menu && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 right-0 w-full sm:w-[380px] z-[110] bg-slate-950 border-l border-slate-800 p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="text-amber-500 font-black text-xs tracking-widest">
                  NAVIGATION
                </span>
                <button onClick={() => setMenu(false)}>
                  <VscClose size={30} />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-4xl font-black tracking-tight flex items-center gap-4 ${
                        location.pathname === link.path
                          ? "text-amber-500"
                          : "text-slate-700 hover:text-white"
                      }`}
                    >
                      <span className="text-sm opacity-30">0{i + 1}</span>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-10 border-t border-slate-800 space-y-5">
                <a
                  href="mailto:info@brainytroves.com"
                  className="text-white font-semibold hover:text-amber-500 transition"
                >
                  info@brainytroves.com
                </a>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                    <BsGearFill className="text-slate-500 animate-spin" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenu(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[105] lg:hidden"
            />
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

