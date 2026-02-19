import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Constants for reusability
  const phoneNumber = "+919620996689";
  const emailAddress = "info@brainytroves.com";
  const locationAddress = "Electronic City, Bengaluru, Karnataka 560100";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationAddress)}`;

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

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] selection:bg-amber-500/30">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 pt-32 pb-20 max-w-7xl mx-auto px-6">
        
        {/* Success Toast */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              className="fixed top-10 left-1/2 -translate-x-1/2 z-[100] bg-emerald-500 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-emerald-400"
            >
              <div className="bg-white/20 p-1 rounded-full"><FaPaperPlane className="text-sm"/></div>
              <span className="font-bold tracking-tight">Strategy Received! We'll reach out shortly.</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm font-bold uppercase tracking-widest mb-6">
            Contact Partner Relations
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Let's Engineer Your <span className="text-amber-500">Success.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Whether you're scaling a startup or steering a conglomerate, our consultants are ready to bridge your talent gap.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {/* Phone - Click to Call */}
          <motion.a
            href={`tel:${phoneNumber}`}
            variants={itemVariants}
            className="group bg-slate-800/40 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:rotate-[15deg] transition-all duration-300">
                <FaPhone className="text-2xl text-amber-500 group-hover:text-slate-900 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Consultation Line</h3>
              <p className="text-slate-400 font-medium group-hover:text-amber-500 transition-colors">{phoneNumber}</p>
              <span className="mt-4 text-xs font-bold text-amber-500/50 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Click to Dial</span>
            </div>
          </motion.a>

          {/* Email - Click to Mail */}
          <motion.a
            href={`mailto:${emailAddress}`}
            variants={itemVariants}
            className="group bg-slate-800/40 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:rotate-[-15deg] transition-all duration-300">
                <FaEnvelope className="text-2xl text-amber-500 group-hover:text-slate-900 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Digital Inquiry</h3>
              <p className="text-slate-400 font-medium group-hover:text-amber-500 transition-colors">{emailAddress}</p>
              <span className="mt-4 text-xs font-bold text-amber-500/50 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Send Email</span>
            </div>
          </motion.a>

          {/* Location - Click to Map */}
          <motion.a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="group bg-slate-800/40 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                <FaMapMarkerAlt className="text-2xl text-amber-500 group-hover:text-slate-900 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Global HQ</h3>
              <p className="text-slate-400 font-medium group-hover:text-amber-500 transition-colors">Electronic City, BLR</p>
              <span className="mt-4 text-xs font-bold text-amber-500/50 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Get Directions</span>
            </div>
          </motion.a>

          {/* Hours */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-800/40 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-slate-700/50 rounded-2xl flex items-center justify-center mb-6">
                <FaClock className="text-2xl text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Availability</h3>
              <p className="text-slate-400 font-medium">Mon - Fri</p>
              <p className="text-amber-500/80 text-sm font-bold">09:00 - 18:00 IST</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form Section */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Form Context Text */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-4xl font-bold text-white leading-tight">Drop us a line and start <br/> <span className="text-amber-500">the conversation.</span></h2>
            <p className="text-slate-400 leading-relaxed">
              Our placement directors typically respond within 2 business hours. For urgent talent requirements, please use the WhatsApp line below.
            </p>
            <a 
              href={`https://wa.me/${phoneNumber.replace('+', '')}`} 
              target="_blank"
              className="inline-flex items-center gap-3 px-6 py-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-2xl font-bold hover:bg-emerald-500 hover:text-white transition-all duration-300"
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-3 bg-white/[0.03] backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-8 md:p-12 shadow-2xl shadow-black/50"
          >
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-400 uppercase tracking-tighter ml-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full bg-slate-900/50 border-2 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-4 focus:ring-amber-500/20 transition-all ${errors.name ? 'border-red-500/50' : 'border-slate-700 focus:border-amber-500'}`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-400 text-xs font-bold mt-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-400 uppercase tracking-tighter ml-1">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full bg-slate-900/50 border-2 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-4 focus:ring-amber-500/20 transition-all ${errors.email ? 'border-red-500/50' : 'border-slate-700 focus:border-amber-500'}`}
                    placeholder="name@company.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs font-bold mt-1">{errors.email}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-slate-400 uppercase tracking-tighter ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={`w-full bg-slate-900/50 border-2 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-4 focus:ring-amber-500/20 transition-all ${errors.subject ? 'border-red-500/50' : 'border-slate-700 focus:border-amber-500'}`}
                  placeholder="How can we help?"
                />
                {errors.subject && <p className="text-red-400 text-xs font-bold mt-1">{errors.subject}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-400 uppercase tracking-tighter ml-1">Brief Proposal / Message</label>
                <textarea
                  id="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full bg-slate-900/50 border-2 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-4 focus:ring-amber-500/20 transition-all ${errors.message ? 'border-red-500/50' : 'border-slate-700 focus:border-amber-500'}`}
                  placeholder="Tell us about your requirements..."
                ></textarea>
                {errors.message && <p className="text-red-400 text-xs font-bold mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full group relative flex items-center justify-center gap-3 px-8 py-5 bg-amber-500 text-slate-950 font-black rounded-2xl hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/10 active:scale-[0.98]"
              >
                Launch Message
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;