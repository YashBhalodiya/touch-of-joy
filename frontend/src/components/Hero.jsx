import React from 'react';
import { motion } from 'framer-motion';
const heroImage = "file:///C:/Users/yashb/.gemini/antigravity/brain/f2331ea8-1308-48d9-a1aa-a085312321f4/hero_woman_1778766060662.png";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#d7ebd8] via-[#f5f1eb] to-[#eebbaf] opacity-90"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 pt-10 md:pt-0"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-gray-900 mb-6">
              Rejuvenate <br />
              Your Skin, <br />
              Glow Every Day.
            </h1>
            <p className="text-sm md:text-base text-gray-700 mb-10 max-w-md leading-relaxed">
              Experience professional treatments that clear up your skin, 
              restore natural glowing beauty, and bring out the best in you 
              every single day.
            </p>
            <button className="bg-[#e29c8e] hover:bg-[#d18b7d] text-gray-900 font-semibold text-sm px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Book Now
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 relative mt-16 md:mt-0 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square md:max-w-none md:w-[500px] md:h-[500px] mx-auto md:mx-0">
              <img 
                src="/images/hero.png" 
                alt="Beautiful woman" 
                className="w-full h-full object-cover object-top rounded-[80px] md:rounded-[100px] shadow-xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
