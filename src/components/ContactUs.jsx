import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, 
  FaPaperPlane, FaWhatsapp, FaLinkedinIn, FaInstagram 
} from "react-icons/fa";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const phoneNumber = "+919620996689";
  const emailAddress = "info@brainytroves.com";
  const locationAddress = "Electronic City, Bengaluru, Karnataka 560100";
  
  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: <FaLinkedinIn />, 
      url: "https://www.linkedin.com/company/brainy-troves-consultancy/",
      color: "hover:bg-[#0077b5]",
      glow: "group-hover:shadow-[#0077b5/40]"
    },
    { 
      name: "Instagram", 
      icon: <FaInstagram />, 
      url: "https://www.instagram.com/brainytroves?igsh=MWR4MTVzdnlkOWk4eQ%3D%3D&utm_source=qr",
      color: "hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      glow: "group-hover:shadow-[#ee2a7b/40]"
    }
  ];

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email address.';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-amber-500/30 overflow-hidden relative">
      
      {/* --- ANIMATED AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-amber-600/10 rounded-full blur-[150px]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="relative z-10 pt-40 pb-24 max-w-7xl mx-auto px-6">
        
        {/* --- SUCCESS NOTIFICATION --- */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              className="fixed top-12 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 border border-emerald-500/50 p-1 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.2)]"
            >
              <div className="bg-emerald-500/10 px-8 py-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce">
                  <FaPaperPlane className="text-slate-900 text-sm"/>
                </div>
                <div>
                  <h4 className="font-black text-emerald-500">TRANSMISSION SUCCESSFUL</h4>
                  <p className="text-xs text-emerald-500/70 uppercase tracking-widest">Our analysts are reviewing your brief.</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- HERO HEADER --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-5 py-2 bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-[0.3em] rounded-sm mb-8">
              Global Command Center
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              START THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">EVOLUTION.</span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col gap-6 lg:items-end"
          >
            <p className="text-slate-400 text-xl max-w-md lg:text-right font-light italic">
              "Connecting brainy talent to the world's most innovative troves."
            </p>
            {/* Social Connect Dock */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`group w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-xl transition-all duration-500 ${social.color} ${social.glow}`}
                >
                  <span className="group-hover:text-white transition-colors">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* --- LEFT COLUMN: CONTACT CARDS --- */}
          <div className="lg:col-span-4 space-y-6">
            {[
              { icon: <FaPhone />, label: "Direct Access", val: phoneNumber, sub: "Voice & Data", link: `tel:${phoneNumber}` },
              { icon: <FaEnvelope />, label: "Encryption Mail", val: emailAddress, sub: "2hr Response Time", link: `mailto:${emailAddress}` },
              { icon: <FaMapMarkerAlt />, label: "Physical Node", val: "Electronic City, BLR", sub: "Tech Hub 1", link: "#" }
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group block p-8 bg-slate-900/40 border border-slate-800 rounded-[2rem] hover:bg-slate-800/60 hover:border-amber-500/50 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                   <FiExternalLink size={40} />
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 text-xl group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{item.label}</p>
                    <h4 className="text-lg font-bold text-white group-hover:text-amber-500 transition-colors">{item.val}</h4>
                    <p className="text-xs text-slate-600">{item.sub}</p>
                  </div>
                </div>
              </motion.a>
            ))}

            <motion.div 
              className="p-8 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-[2rem] text-slate-950"
              whileHover={{ scale: 1.02 }}
            >
              <FaWhatsapp className="text-4xl mb-4" />
              <h3 className="text-2xl font-black mb-2">Instant Liaison</h3>
              <p className="text-sm font-medium mb-6 opacity-80">Skip the queue. Chat directly with our talent coordinators via encrypted WhatsApp.</p>
              <a 
                href={`https://wa.me/${phoneNumber.replace('+', '')}`} 
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-950 text-white rounded-xl font-bold text-xs tracking-widest hover:bg-white hover:text-slate-950 transition-all"
              >
                OPEN CHAT <FiArrowRight />
              </a>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: THE FORM --- */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-slate-900/20 backdrop-blur-3xl border border-slate-800 p-10 md:p-16 rounded-[3.5rem] relative"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full bg-transparent border-b-2 border-slate-800 py-3 text-xl focus:outline-none focus:border-amber-500 transition-all placeholder-transparent"
                    />
                    <label htmlFor="name" className="absolute left-0 top-0 text-slate-500 text-sm uppercase font-black tracking-widest transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-3 peer-focus:top-[-20px] peer-focus:text-amber-500 peer-focus:text-xs">
                      Identity / Name
                    </label>
                    {errors.name && <span className="text-red-500 text-[10px] font-bold mt-2 block tracking-widest">{errors.name}</span>}
                  </div>

                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full bg-transparent border-b-2 border-slate-800 py-3 text-xl focus:outline-none focus:border-amber-500 transition-all placeholder-transparent"
                    />
                    <label htmlFor="email" className="absolute left-0 top-0 text-slate-500 text-sm uppercase font-black tracking-widest transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-3 peer-focus:top-[-20px] peer-focus:text-amber-500 peer-focus:text-xs">
                      Corporate Email
                    </label>
                    {errors.email && <span className="text-red-500 text-[10px] font-bold mt-2 block tracking-widest">{errors.email}</span>}
                  </div>
                </div>

                <div className="relative group">
                  <input
                    type="text"
                    id="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-slate-800 py-3 text-xl focus:outline-none focus:border-amber-500 transition-all placeholder-transparent"
                  />
                  <label htmlFor="subject" className="absolute left-0 top-0 text-slate-500 text-sm uppercase font-black tracking-widest transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-3 peer-focus:top-[-20px] peer-focus:text-amber-500 peer-focus:text-xs">
                    Project Subject
                  </label>
                </div>

                <div className="relative group">
                  <textarea
                    id="message"
                    required
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-slate-800 py-3 text-xl focus:outline-none focus:border-amber-500 transition-all placeholder-transparent resize-none"
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 top-0 text-slate-500 text-sm uppercase font-black tracking-widest transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-3 peer-focus:top-[-20px] peer-focus:text-amber-500 peer-focus:text-xs">
                    Mission Brief
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(245,158,11,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-6 bg-amber-500 text-slate-950 font-black text-xs tracking-[0.4em] uppercase rounded-2xl flex items-center justify-center gap-4 transition-all"
                >
                  DEPLOY MESSAGE <FaPaperPlane />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* --- MAP EMBED / DECORATIVE SECTION --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 h-[400px] w-full bg-slate-900 border border-slate-800 rounded-[3rem] overflow-hidden grayscale contrast-125 opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62231.259972828694!2d77.63261621!3d12.8458778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8a3cba6391%3A0x6d85900593b45281!2sElectronic%20City%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;