import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import AnimatedCard from "../animations/AnimatedCard";
import { education } from "../../data/mock";
import FaultyTerminal from "../animations/FaultyTerminal";

const Education = () => {
  return (
    <section className="relative py-24 bg-[#0d0d0f]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-green-400 font-mono text-lg">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Education
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent max-w-xs" />
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <AnimatedCard key={edu.id} delay={index * 0.1}>
              <motion.div
                className="h-full p-6 bg-[#1a1c1e]/70 backdrop-blur-sm border border-white/5 rounded-xl hover:border-green-500/30 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ y: -4 }}
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                  <GraduationCap className="w-6 h-6 text-green-400" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {edu.degree}
                </h3>

                <p className="text-gray-400 text-sm mb-4">{edu.institution}</p>

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar size={14} className="text-green-400/70" />
                  <span>{edu.period}</span>
                </div>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
