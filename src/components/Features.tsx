import { motion } from 'motion/react';
import { Scissors, Droplet, Sparkles, Heart, DollarSign, Smile } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <Scissors size={32} />, title: "Experienced Stylists", desc: "Master stylists with years of global expertise." },
    { icon: <Sparkles size={32} />, title: "Premium Products", desc: "We use only top-tier luxury brand products." },
    { icon: <Droplet size={32} />, title: "Hygienic Environment", desc: "Strict sanitation protocols for your safety." },
    { icon: <Heart size={32} />, title: "Personalized Care", desc: "Treatments tailored to your unique beauty needs." },
    { icon: <DollarSign size={32} />, title: "Affordable Pricing", desc: "Luxury services at accessible price points." },
    { icon: <Smile size={32} />, title: "Customer Satisfaction", desc: "100% commitment to leaving you delighted." }
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-gold tracking-widest text-sm font-bold uppercase mb-4">The Youky Difference</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Why Choose Us</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-gold/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
