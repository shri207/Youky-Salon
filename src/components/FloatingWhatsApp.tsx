import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/96562225344"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors group"
    >
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>
      <Phone size={28} className="text-white" />
      <span className="absolute left-full ml-4 bg-white text-black text-sm font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
        Chat with us!
        <div className="absolute top-1/2 -left-1.5 w-3 h-3 bg-white transform -translate-y-1/2 rotate-45"></div>
      </span>
    </motion.a>
  );
}
