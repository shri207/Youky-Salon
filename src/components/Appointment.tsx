import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, CheckCircle2 } from 'lucide-react';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    gender: '',
    service: '',
    date: '',
    time: '',
    messageText: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, phone, email, gender, service, date, time, messageText } = formData;
    
    const message = `Hello, I would like to book an appointment.

Name: ${name}
Phone: ${phone}
Email: ${email}
Gender: ${gender}
Service: ${service}
Date: ${date}
Time: ${time}
Message: ${messageText}

Please confirm my appointment.`;

    // Show success briefly
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      window.open(`https://wa.me/96562225344?text=${encodeURIComponent(message)}`, "_blank");
      // Reset form
      setFormData({
        name: '', phone: '', email: '', gender: '', service: '', date: '', time: '', messageText: ''
      });
    }, 1500);
  };

  return (
    <section id="appointment" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative Image */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1521590832167-7bfc17484d20?auto=format&fit=crop&q=80&w=1000" 
          alt="Spa items" 
          className="w-full h-full object-cover mask-image-gradient-l"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12">
          
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h4 className="text-gold tracking-widest text-sm font-bold uppercase mb-4">Book Now</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Reserve Your Seat</h2>
            <p className="text-beige/70 leading-relaxed mb-8">
              Fill out the form to request an appointment. Our team will confirm your booking via WhatsApp shortly.
            </p>
            <div className="flex items-center gap-4 text-gold">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Calendar size={24} />
              </div>
              <div>
                <p className="text-sm text-beige">Working Hours</p>
                <p className="font-serif font-medium">Daily, 10 AM – 9 PM</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl"
          >
            <AnimatePresence mode="wait">
              {showSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center py-20 text-center"
                >
                  <CheckCircle2 size={80} className="text-green-500 mb-6" />
                  <h3 className="text-3xl font-semibold mb-2">Request Preparing!</h3>
                  <p className="text-white/50">Redirecting you to WhatsApp to complete your booking...</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/70">Full Name *</label>
                      <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/70">Mobile Number *</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="+965 0000 0000" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/70">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/70">Gender *</label>
                      <select required name="gender" value={formData.gender} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none">
                        <option value="" disabled className="text-black">Select Gender</option>
                        <option value="Female" className="text-black">Female</option>
                        <option value="Male" className="text-black">Male</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2 text-white/70">Service Required *</label>
                      <select required name="service" value={formData.service} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none">
                        <option value="" disabled className="text-black">Select Service</option>
                        <option value="Haircut & Styling" className="text-black">Haircut & Styling</option>
                        <option value="Hair Coloring" className="text-black">Hair Coloring</option>
                        <option value="Facial & Skin" className="text-black">Facial & Skin</option>
                        <option value="Bridal Makeup" className="text-black">Bridal Makeup</option>
                        <option value="Grooming Package" className="text-black">Grooming Package</option>
                        <option value="Other" className="text-black">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/70">Preferred Date *</label>
                      <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/70">Preferred Time *</label>
                      <input required type="time" name="time" value={formData.time} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/70">Special Message</label>
                    <textarea name="messageText" value={formData.messageText} onChange={handleChange} rows={3} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Any specific requests?"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-gradient-to-r from-gold to-accent text-black py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all transform hover:scale-[1.02]">
                    Book via WhatsApp
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
      
      <style>{`
        .mask-image-gradient-l {
          mask-image: linear-gradient(to left, black, transparent);
          -webkit-mask-image: linear-gradient(to left, black, transparent);
        }
      `}</style>
    </section>
  );
}
