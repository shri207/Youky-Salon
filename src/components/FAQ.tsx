import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Do I need an appointment?",
    a: "We highly recommend booking an appointment to ensure you receive dedicated time and avoid waiting. However, we do accommodate walk-ins if we have availability."
  },
  {
    q: "Are walk-ins accepted?",
    a: "Yes, walk-ins are accepted depending on our stylists' availability for the day. For guaranteed service, especially for complex treatments, an appointment is best."
  },
  {
    q: "Which products do you use?",
    a: "We exclusively use premium, professional-grade salon products from top international luxury brands to ensure the health of your hair and skin."
  },
  {
    q: "Do you offer bridal makeup?",
    a: "Yes, we specialize in bridal makeup and pre-wedding beauty packages. Please contact us in advance to schedule a consultation and trial."
  },
  {
    q: "What are your business hours?",
    a: "We are open daily from 10:00 AM to 9:00 PM to serve you."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-gold tracking-widest text-sm font-bold uppercase mb-4">Got Questions?</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-gold/30 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.q}</span>
                <ChevronDown 
                  className={`text-gold transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-white/50 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
