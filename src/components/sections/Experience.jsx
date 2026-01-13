import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Building2,
  Calendar,
} from "lucide-react";
import AnimatedCard from "../animations/AnimatedCard";
import { experiences } from "../../data/mock";
import FaultyTerminal from "../animations/FaultyTerminal";

const Experience = () => {
  const [expandedId, setExpandedId] = useState(1);

  return (
    <section id="experience" className="relative py-32 bg-[#0d0d0f]">
      {/* Background Decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-gradient-to-r from-green-500/5 to-transparent rounded-r-full filter blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-green-400 font-mono text-lg">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Where I've Worked
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent max-w-xs" />
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-green-500/20 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <AnimatedCard key={exp.id} delay={index * 0.1}>
                <motion.div
                  className={`relative pl-8 md:pl-20 ${
                    expandedId === exp.id ? "pb-4" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-8 top-6 -translate-x-1/2">
                    <motion.div
                      className={`w-4 h-4 rounded-full border-2 ${
                        expandedId === exp.id
                          ? "bg-green-500 border-green-500"
                          : "bg-[#0d0d0f] border-green-500/50"
                      } transition-colors duration-300`}
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>

                  {/* Card */}
                  <motion.div
                    className={`bg-[#1a1c1e] border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                      expandedId === exp.id
                        ? "border-green-500/30"
                        : "border-white/5 hover:border-white/10"
                    }`}
                    onClick={() =>
                      setExpandedId(expandedId === exp.id ? null : exp.id)
                    }
                    whileHover={{ x: 4 }}
                  >
                    {/* Header */}
                    <div className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-semibold text-white">
                              {exp.company}
                            </h3>
                            <a
                              href={exp.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-400 hover:text-green-300 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={16} />
                            </a>
                          </div>
                          <p className="text-gray-500 text-sm font-medium">
                            {exp.positions[0].title}
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-500"
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </div>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {expandedId === exp.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 space-y-4 border-t border-white/5 pt-4">
                            {exp.positions.map((pos, posIndex) => (
                              <motion.div
                                key={posIndex}
                                className="pl-4 border-l-2 border-green-500/30"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: posIndex * 0.1 }}
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-green-400 font-medium">
                                    {pos.title}
                                  </span>
                                  <span className="text-gray-600">|</span>
                                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                                    <Calendar size={14} />
                                    {pos.period}
                                  </div>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                  {pos.description}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
