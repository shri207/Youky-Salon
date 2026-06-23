import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    name: "Patty Kaakour",
    text: "I had an amazing experience at Youky Salon in Kuwait. The salon is beautifully designed, clean and relaxing. The staff made me feel welcomed.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Jeny Farley",
    text: "Today was my first time and definitely not my last. Youky personally fixed my damaged haircut and exceeded my expectations.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Rand Alothman",
    text: "Youky is the best. Another salon ruined my haircut, but she spent so much effort fixing it. The results were amazing.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Aisha Al-Sabah",
    text: "The absolute best bridal makeup! They understood exactly what I wanted and made me look flawless for my big day. Highly recommend.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Sara Ahmed",
    text: "Professional, hygienic, and extremely talented staff. The hair spa treatment left my hair feeling like silk.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Noura Ali",
    text: "I've been coming here for years for my coloring. They always get the shade exactly right and keep my hair healthy.",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=200"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-gold/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-gold tracking-widest text-sm font-bold uppercase mb-4">Client Love</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">What They Say</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-16 testimonial-swiper"
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl h-full flex flex-col relative mt-8 hover:border-gold/50 transition-colors">
                  <div className="absolute -top-8 left-8">
                    <div className="w-16 h-16 rounded-full border-4 border-[#0B0B0B] overflow-hidden relative">
                      <img src={review.img} alt={review.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                  
                  <Quote className="absolute top-8 right-8 text-white/5" size={60} />
                  
                  <div className="mt-8 flex-1">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-gold fill-gold" />
                      ))}
                    </div>
                    <p className="text-white/50 italic leading-relaxed mb-6">"{review.text}"</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg text-white">{review.name}</h4>
                    <p className="text-gold text-xs uppercase tracking-widest mt-1">Verified Client</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: rgba(255,255,255,0.2);
          opacity: 1;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #D4AF37;
        }
      `}</style>
    </section>
  );
}
