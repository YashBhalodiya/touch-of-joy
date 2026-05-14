import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen font-sans bg-[#faf9f6]">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#e29c8e] transform origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
