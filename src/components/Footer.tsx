import { Instagram, Facebook, Youtube, Phone, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/40 pt-20 pb-10 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
              <img 
                src="/logo.png" 
                alt="Youky Salon Logo" 
                className="h-10 w-auto object-contain bg-white rounded p-1"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('logo-fallback-footer');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div id="logo-fallback-footer" className="hidden w-10 h-10 bg-gradient-to-tr from-gold to-accent rounded-lg items-center justify-center font-bold text-black text-xl">Y</div>
              <span className="text-xl font-semibold tracking-tight uppercase hidden sm:block">Youky Salon <span className="font-light text-gold">Kuwait</span></span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Experience Beauty, Style & Confidence. Professional salon services delivered with excellence in Kuwait.
            </p>
            <div className="flex gap-4 items-center">
              {[Instagram, Facebook, Youtube, Phone].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all text-white/60">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Gallery', 'Pricing', 'Testimonials', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-gold before:rounded-full before:opacity-0 hover:before:opacity-100">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Our Services</h4>
            <ul className="space-y-4">
              {['Haircut & Styling', 'Hair Coloring', 'Bridal Makeup', 'Skin Treatments', 'Facial & Spa', 'Grooming Packages'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-gold before:rounded-full before:opacity-0 hover:before:opacity-100">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><strong className="text-white font-medium">Address:</strong><br/>6 2 St. 1 Ln, Salmiya, Kuwait<br/>Rasha Tower</li>
              <li><strong className="text-white font-medium">Phone:</strong><br/>+965 6222 5344</li>
              <li><strong className="text-white font-medium">Email:</strong><br/>info@youkysalon.com</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Youky Salon Kuwait. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute bottom-10 right-4 sm:right-8 w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-colors"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
