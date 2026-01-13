import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import SplitText from "../animations/SplitText";
import GradientText from "../animations/GradientText";
import ParticleCanvas from "../animations/ParticleCanvas";
import { personalInfo } from "../../data/mock";
import Threads from "../animations/Threads";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111113]">
      {/* Particle Canvas */}
      {/* <ParticleCanvas /> */}
      <div className="absolute inset-0 z-0">
        <Threads amplitude={4} distance={0.1} enableMouseInteraction={true} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full filter blur-[128px] animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full filter blur-[100px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="h-px w-12 bg-green-400" />
              <span className="text-green-400 font-mono text-sm">
                Hi, my name is
              </span>
            </motion.div>

            {/* Name */}
            <SplitText
              text={personalInfo.name}
              className="text-5xl md:text-6xl font-bold text-white mb-4"
              delay={30}
              duration={0.6}
              splitType="chars"
            />

            {/* Title with gradient */}
            <div className="text-3xl md:text-4xl font-bold text-gray-400 mb-6">
              <GradientText
                colors={["#22c55e", "#10b981", "#34d399", "#22c55e"]}
              >
                {personalInfo.title}
              </GradientText>
            </div>

            {/* Location */}
            <motion.div
              className="flex items-center gap-2 text-white mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <MapPin size={16} className="text-green-400" />
              <span>{personalInfo.location}</span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {personalInfo.tagline}. I specialize in building exceptional
              digital experiences with modern technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-xl transition-all duration-300 inline-flex items-center gap-2 group"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(34, 197, 94, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.a>
              <motion.a
                href="/print"
                target="_blank"
                className="px-8 py-4 border-2 border-green-500/30 text-green-400 hover:border-green-400 hover:bg-green-400/10 font-semibold rounded-xl transition-all duration-300 inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-emerald-500/20 rounded-full filter blur-3xl scale-110" />

              {/* Image Container */}
              <motion.div
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-500/30"
                whileHover={{ borderColor: "rgba(34, 197, 94, 0.6)" }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent" />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-green-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-green-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-gray-500"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-xs font-mono">Scroll Down</span>
            <ArrowDown size={16} className="text-green-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
