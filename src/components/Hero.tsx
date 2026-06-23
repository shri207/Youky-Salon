import { motion } from 'motion/react';
import { Star, Users, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
      </div>

      {/* Floating Particles/Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full w-fit mb-6 mx-auto"
        >
          <span className="text-gold text-xs">★ 4.9 Rating</span>
          <div className="w-1 h-1 bg-white/30 rounded-full"></div>
          <span className="text-white/60 text-xs">438 Google Reviews</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6"
        >
          Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-beige">Beauty</span>, <br className="hidden md:block"/> Style & Confidence
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Kuwait's premier destination for luxury hair styling, skincare, and bridal makeup. Located in the heart of Salmiya at Rasha Tower.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button 
            onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gold hover:text-black transition-all"
          >
            Book Appointment
          </button>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 rounded-xl font-bold hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            Explore Services <span className="text-gold">→</span>
          </button>
        </motion.div>

        {/* Features Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12"
        >
          {[
            { icon: <CheckCircle size={20} className="text-gold" />, text: "Premium Products" },
            { icon: <Users size={20} className="text-gold" />, text: "Professional Stylists" },
            { icon: <Star size={20} className="text-gold" />, text: "4.9★ Rating" },
            { icon: <Users size={20} className="text-gold" />, text: "5000+ Happy Clients" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm md:text-base font-medium text-beige">
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
