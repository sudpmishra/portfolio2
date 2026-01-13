import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import PrintableResume from './components/pages/PrintableResume';
import './App.css';
import FaultyTerminal from './components/animations/FaultyTerminal';

function App() {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Portfolio Home Page Component
  const PortfolioHome = () => (
    <div className="min-h-screen bg-[#111113] text-white overflow-x-hidden">
      {/* Cursor Glow Effect */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%)'
        }}
        animate={{
          x: typeof window !== 'undefined' ? 0 : 0,
          y: typeof window !== 'undefined' ? 0 : 0
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />

      <Header />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/print" element={<PrintableResume />} />
      </Routes>
    </Router>
  );
}

export default App;
