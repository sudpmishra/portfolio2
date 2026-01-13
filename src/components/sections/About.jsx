import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, Coffee, Sparkles } from 'lucide-react';
import BlurText from '../animations/BlurText';
import AnimatedCard from '../animations/AnimatedCard';
import { personalInfo } from '../../data/mock';

const About = () => {
  const stats = [
    { icon: Briefcase, value: '8+', label: 'Years Experience' },
    { icon: Code2, value: '20+', label: 'Projects Completed' },
    { icon: Coffee, value: '∞', label: 'Cups of Coffee' },
    { icon: Sparkles, value: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="relative py-32 bg-[#0d0d0f]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-green-400 font-mono text-lg">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <BlurText
              text={personalInfo.about}
              className="text-gray-400 text-lg leading-relaxed mb-8"
              delay={50}
              duration={0.6}
            />

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-gray-400">
                Here are a few technologies I've been working with recently:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {['JavaScript (ES6+)', 'React & React Native', 'Node.js', 'Python', 'Ruby on Rails', 'GraphQL'].map((tech, i) => (
                  <motion.div
                    key={tech}
                    className="flex items-center gap-2 text-gray-300 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <span className="text-green-400">▹</span>
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <AnimatedCard
                key={stat.label}
                delay={index * 0.1}
                className="group"
              >
                <div className="p-6 bg-[#1a1c1e] border border-white/5 rounded-2xl hover:border-green-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
