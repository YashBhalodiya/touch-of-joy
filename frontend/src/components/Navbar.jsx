import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4 pointer-events-none" : "py-6 pointer-events-none"
      }`}
    >
      <div 
        className={`mx-auto flex items-center justify-between transition-all duration-500 pointer-events-auto relative ${
          scrolled 
            ? "w-[95%] max-w-5xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg rounded-[2rem] px-6 md:px-8 py-3" 
            : "container px-6 md:px-12 bg-transparent"
        }`}
      >
        
        <div className="flex items-center space-x-3 group cursor-pointer z-20">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#e29c8e] to-[#f7dfd6] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-900" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 0v8m0 0l-4 4m4-4l4 4" />
            </svg>
          </div>
          <span className="text-2xl font-serif font-bold text-gray-900 tracking-tight">Touch of Joy</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'Services', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="relative text-sm font-medium text-gray-800 hover:text-[#c47768] transition-colors group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e29c8e] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm px-7 py-2.5 rounded-full transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
          >
            Book Us
          </motion.button>
        </div>

        <div className="md:hidden flex items-center z-20">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-900 p-2 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-[120%] left-0 right-0 bg-white shadow-2xl rounded-2xl overflow-hidden md:hidden z-10 border border-gray-100"
            >
              <div className="flex flex-col px-6 py-4 space-y-2">
                {['Home', 'Services', 'About', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-gray-800 hover:text-[#c47768] transition-colors py-3 border-b border-gray-50 last:border-0"
                  >
                    {item}
                  </a>
                ))}
                <button className="bg-gray-900 text-white font-medium text-base px-7 py-3 rounded-full mt-4 w-full shadow-md">
                  Book Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>
  );
}
