import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#faf9f6]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative group"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl h-[350px] md:h-[450px] relative">
              <img 
                src="/images/about_ai.png" 
                alt="Luxurious spa towels and orchids" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 pl-0 md:pl-8"
          >
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#c47768] mb-4 block">
              ABOUT US
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 leading-tight">
              Feel Beautiful, <br /> Feel Confident.
            </h2>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-8 max-w-md">
              At Touch of Joy, we believe there is beauty in serenity and peace. Discover yourself again and step into a world of calming therapies designed to lift your spirit and rejuvenate your soul.
            </p>
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Learn More
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
