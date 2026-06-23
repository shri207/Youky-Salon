import { motion } from 'motion/react';
import { Scissors, Sparkles, Smile, Droplet } from 'lucide-react';

const categories = [
  {
    title: "Hair Services",
    items: [
      { name: "Haircut", price: "5", desc: "Precision cuts tailored to your face shape.", icon: <Scissors size={24}/>, img: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?auto=format&fit=crop&q=80&w=500" },
      { name: "Hair Styling", price: "10", desc: "Blowouts, curls, and elegant updos.", icon: <Sparkles size={24}/>, img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=500" },
      { name: "Hair Coloring", price: "25", desc: "Balayage, highlights, and full color.", icon: <Droplet size={24}/>, img: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=500" },
      { name: "Hair Spa", price: "15", desc: "Deep conditioning and scalp treatment.", icon: <Smile size={24}/>, img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=500" }
    ]
  },
  {
    title: "Beauty Services",
    items: [
      { name: "Facial", price: "12", desc: "Rejuvenating skin treatments.", icon: <Sparkles size={24}/>, img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=500" },
      { name: "Cleanup", price: "8", desc: "Quick pore cleansing and glow.", icon: <Droplet size={24}/>, img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=500" },
      { name: "Bridal Makeup", price: "50", desc: "Flawless makeup for your special day.", icon: <Smile size={24}/>, img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=500" },
      { name: "Skin Treatment", price: "20", desc: "Advanced skincare solutions.", icon: <Sparkles size={24}/>, img: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=500" }
    ]
  },
  {
    title: "Grooming Services",
    items: [
      { name: "Beard Trim", price: "3", desc: "Sharp and precise beard styling.", icon: <Scissors size={24}/>, img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=500" },
      { name: "Hair Wash", price: "4", desc: "Relaxing wash and basic dry.", icon: <Droplet size={24}/>, img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=500" },
      { name: "Head Massage", price: "5", desc: "Stress-relieving oil massage.", icon: <Smile size={24}/>, img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=500" },
      { name: "Shaving", price: "4", desc: "Classic hot towel shave.", icon: <Scissors size={24}/>, img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=500" }
    ]
  }
];

export default function Services() {
  const handleBook = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-gold tracking-widest text-sm font-bold uppercase mb-4">Our Expertise</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Premium Services</h2>
        </div>

        <div className="space-y-20">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-3xl font-serif font-bold mb-8 border-b border-white/10 pb-4 inline-block">{category.title}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden group hover:border-gold/50 transition-all flex flex-col"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={service.img} 
                        alt={service.name} 
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-gold p-2 rounded-full border border-white/20">
                        {service.icon}
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-semibold">{service.name}</h4>
                        <span className="text-gold font-mono text-sm">From KD {service.price}</span>
                      </div>
                      <p className="text-sm text-white/40 mb-6 flex-1">{service.desc}</p>
                      
                      <button 
                        onClick={handleBook}
                        className="w-full py-2 bg-white/5 border border-white/10 hover:border-gold text-white hover:text-gold rounded-full transition-colors font-medium text-sm flex justify-center items-center gap-2"
                      >
                        Book Now
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
