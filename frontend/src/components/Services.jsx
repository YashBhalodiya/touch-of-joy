import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const cards = [
    {
      title: "Gentle Skincare",
      bgColor: "bg-card-peach",
      image: "/images/card_bottle.png",
    },
    {
      title: "Spa Therapy",
      bgColor: "bg-card-pink",
      image: "/images/card_bowl.png",
    },
    {
      title: "Beauty Secrets",
      bgColor: "bg-card-mint",
      image: "/images/card_candle.png",
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#faf9f6]">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#c47768] mb-4 block">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
            Refresh Your Mind
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-lg mx-auto">
            Welcome to the ultimate luxury spa. Rejuvenate yourself and give your body the care it longs for with our highly curated sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative ${card.bgColor} rounded-[2rem] rounded-tr-[4.5rem] p-8 md:p-10 h-[380px] md:h-[420px] flex flex-col justify-between overflow-hidden group cursor-pointer border border-black/5 shadow-sm`}
            >
              <h3 className="text-3xl font-serif text-gray-900 w-full z-10 relative tracking-tight">
                {card.title}
              </h3>
              
              <div className="mt-auto z-10 relative">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/90 text-gray-900 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-white">
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </div>

              <div className="absolute bottom-0 right-0 w-[72%] h-[68%] overflow-hidden rounded-tl-md">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
