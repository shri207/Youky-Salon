import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-gold tracking-widest text-sm font-bold uppercase mb-4">Get In Touch</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Visit Our Salon</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { 
                icon: <MapPin size={24} />, 
                title: "Location", 
                lines: ["6 2 St. 1 Ln, Salmiya, Kuwait", "Located in Rasha Tower"] 
              },
              { 
                icon: <Phone size={24} />, 
                title: "Contact", 
                lines: ["Phone: +965 6222 5344", "WhatsApp: +965 6222 5344"] 
              },
              { 
                icon: <Clock size={24} />, 
                title: "Hours", 
                lines: ["Daily", "10:00 AM – 9:00 PM"] 
              },
              { 
                icon: <Mail size={24} />, 
                title: "Email", 
                lines: ["info@youkysalon.com", "Support 24/7"] 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col items-center text-center hover:border-gold/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-lg mb-3 text-white">{item.title}</h4>
                {item.lines.map((line, idx) => (
                  <p key={idx} className="text-white/50 text-sm mb-1">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden h-[400px] lg:h-auto p-2"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13915.228511674291!2d48.066487!3d29.332029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c58da728e5d%3A0x6bfb1b3ed9913693!2sSalmiya%2C%20Kuwait!5e0!3m2!1sen!2sus!4v1714902100000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '1rem', filter: 'grayscale(0.8) contrast(1.2)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
