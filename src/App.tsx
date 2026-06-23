/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white font-sans selection:bg-gold selection:text-black relative overflow-x-hidden">
      <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#D4AF37] opacity-[0.08] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#E8DCC7] opacity-[0.05] blur-[100px] rounded-full pointer-events-none"></div>
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Services />
        <Gallery />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Appointment />
        <Contact />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
}
