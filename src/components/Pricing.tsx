import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: "Basic Package",
    price: "5",
    features: ["Haircut", "Hair Wash", "Styling"],
    highlighted: false
  },
  {
    name: "Premium Package",
    price: "15",
    features: ["Hair Spa", "Hair Styling", "Facial"],
    highlighted: true
  },
  {
    name: "Luxury Package",
    price: "30",
    features: ["Hair Coloring", "Premium Facial", "Makeup", "Head Massage"],
    highlighted: false
  }
];

export default function Pricing() {
  const handleBook = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-gold tracking-widest text-sm font-bold uppercase mb-4">Pricing Plans</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Tailored Packages</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`p-8 rounded-3xl relative overflow-hidden bg-white/5 backdrop-blur-md border ${
                pkg.highlighted 
                  ? 'border-gold shadow-[0_0_30px_rgba(212,175,55,0.15)] transform md:-translate-y-4' 
                  : 'border-white/10 hover:border-gold/30'
              } transition-all`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-gold text-black text-[10px] font-bold uppercase rounded-bl-lg">Popular</div>
              )}
              
              <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-mono text-gold">KD {pkg.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/70 text-sm">
                    <Check size={18} className="text-gold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={handleBook}
                className={`w-full py-3 rounded-xl font-bold transition-all ${
                  pkg.highlighted 
                    ? 'bg-gradient-to-r from-gold to-accent text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105' 
                    : 'bg-white/5 border border-white/20 hover:bg-white/10 text-white'
                }`}
              >
                Book Appointment
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
