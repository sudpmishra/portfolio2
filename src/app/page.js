"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#111113] text-white overflow-x-hidden">
      {/* Cursor Glow Effect */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          x: typeof window !== "undefined" ? 0 : 0,
          y: typeof window !== "undefined" ? 0 : 0,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
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
}
