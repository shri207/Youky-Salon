import { motion } from 'motion/react';

export default function About() {
  const stats = [
    { value: "5000+", label: "Happy Clients" },
    { value: "10+", label: "Professional Stylists" },
    { value: "8+", label: "Years Experience" },
    { value: "4.9★", label: "Customer Rating" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Salon Interior" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 md:-right-12 glass-gold p-6 rounded-2xl hidden md:block"
            >
              <h3 className="font-serif text-4xl text-gold mb-1">4.9★</h3>
              <p className="text-sm font-medium text-beige">Top Rated Salon<br/>in Salmiya</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-gold tracking-widest text-sm font-bold uppercase mb-4">Discover Our Story</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Elevating Beauty with Expertise & Passion</h2>
            <p className="text-beige/80 text-lg mb-6 leading-relaxed">
              Welcome to Youky Salon Kuwait, a premier women-owned luxury salon situated in the heart of Salmiya. We believe that beauty is an expression of individuality, and our mission is to help you radiate confidence from within.
            </p>
            <p className="text-beige/80 text-lg mb-10 leading-relaxed">
              With a serene, hygienic environment and a team of seasoned professionals, we offer personalized care using only the finest premium products. Whether you're seeking a transformative haircut, glowing skin, or flawless bridal makeup, our commitment to customer satisfaction ensures an unparalleled experience.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:border-gold/50 transition-all flex flex-col"
                >
                  <div className="text-3xl font-bold text-gold mb-2">{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
