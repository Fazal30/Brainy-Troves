import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  MdStars, 
  MdSchool, 
  MdTrendingUp, 
  MdGroups, 
  MdInsights, 
  MdArrowForward 
} from "react-icons/md";

// Note: Ensure these paths match your local file structure
import int1 from "../assets/exc.jpeg"; 

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: "01",
      title: "Executive Placement",
      description: "Our executive placement services cater to seasoned professionals seeking new challenges and leadership roles. We match top-tier talent with organizations that value expertise, vision, and transformative leadership.",
      image: int1,
      icon: <MdStars className="text-amber-500" />,
      color: "from-amber-500/20 to-transparent"
    },
    {
      id: "02",
      title: "Graduate Recruitment",
      description: "Nurturing the next generation of innovators. We bridge the gap between academic excellence and professional application, connecting emerging talent with organizations ready for fresh perspectives.",
      image: "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070&auto=format&fit=crop",
      icon: <MdSchool className="text-amber-500" />,
      reverse: true
    },
    {
      id: "03",
      title: "Career Transition Consulting",
      description: "Strategic pivot support for the modern professional. We provide personalized roadmaps, resume architecture, and interview coaching to ensure your professional shift is seamless and successful.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
      icon: <MdTrendingUp className="text-amber-500" />,
    },
    {
      id: "04",
      title: "Talent Acquisition",
      description: "Beyond just hiring—we build teams. We leverage our extensive network and predictive market knowledge to identify individuals who don't just fit the job description, but the company culture.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
      icon: <MdGroups className="text-amber-500" />,
      reverse: true
    },
    {
      id: "05",
      title: "Market Trend Analysis",
      description: "Stay ahead of the disruption. We provide deep-dive intelligence into sector shifts, salary benchmarks, and talent availability to help you make data-driven organizational decisions.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop",
      icon: <MdInsights className="text-amber-500" />,
    }
  ];

  return (
    <main className="bg-[#0F172A] text-white min-h-screen pb-24">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#f59e0b10_0%,_transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 border border-amber-500/30 rounded-full bg-amber-500/10"
          >
            <span className="text-amber-500 text-sm font-bold uppercase tracking-widest">Our Expertise</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter"
          >
            Elite Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Complex Challenges.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            We don't just provide services; we architect growth strategies that ensure your business or career stays at the pinnacle of its industry.
          </motion.p>
        </div>
      </section>

      {/* Services Content */}
      <section className="max-w-7xl mx-auto px-6 space-y-32 md:space-y-48">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, x: service.reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col ${service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2 group">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 border-2 border-amber-500/20 rounded-[2rem] group-hover:border-amber-500/50 transition-colors duration-500" />
                <div className="absolute -top-6 -left-6 text-9xl font-black text-white/5 pointer-events-none select-none">
                  {service.id}
                </div>
                
                {/* Image Container */}
                <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-slate-700">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent opacity-60" />
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-800 rounded-2xl border border-slate-700 shadow-xl text-3xl">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {service.title}
                </h2>
              </div>
              
              <p className="text-slate-400 text-lg leading-relaxed italic border-l-2 border-amber-500/50 pl-6">
                {service.description}
              </p>

              <motion.button 
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 text-amber-500 font-bold group"
              >
                Inquire about this service 
                <MdArrowForward className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Bottom Process Hint */}
      <section className="mt-48 max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] p-12 text-center border border-slate-700/50">
          <h2 className="text-3xl font-bold mb-6 text-white">Our Selection Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", label: "Consultation", text: "Deep dive into goals." },
              { step: "02", label: "Curation", text: "AI-powered vetting." },
              { step: "03", label: "Calibration", text: "Perfect alignment search." }
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <span className="text-amber-500 font-black text-2xl">{item.step}</span>
                <h4 className="font-bold text-xl">{item.label}</h4>
                <p className="text-slate-400 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;