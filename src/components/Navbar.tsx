import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Services', 'Gallery', 'Pricing', 'Testimonials', 'FAQ', 'Contact'];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/5 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src="/logo.png" 
            alt="Youky Salon Logo" 
            className="h-10 w-auto object-contain bg-white rounded p-1"
            onError={(e) => {
              // Hide broken image icon and show fallback text
              e.currentTarget.style.display = 'none';
              const fallback = document.getElementById('logo-fallback-nav');
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div id="logo-fallback-nav" className="hidden w-10 h-10 bg-gradient-to-tr from-gold to-accent rounded-lg items-center justify-center font-bold text-black text-xl">Y</div>
          <span className="text-xl font-semibold tracking-tight uppercase hidden sm:block">Youky Salon <span className="font-light text-gold">Kuwait</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('Appointment')}
            className="px-6 py-2.5 bg-gradient-to-r from-gold to-accent text-black font-bold rounded-full text-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105 transition-transform"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 mt-4 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="text-left text-lg font-medium hover:text-gold transition-colors py-2 border-b border-white/5"
                >
                  {link}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('Appointment')}
                className="bg-gold text-black w-full py-3 rounded-full font-semibold mt-4"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
