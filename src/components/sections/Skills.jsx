import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedCard from '../animations/AnimatedCard';
import { skills } from '../../data/mock';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const categories = [
    { id: 'languages', label: 'Languages', icon: '{ }' },
    { id: 'frameworks', label: 'Frameworks', icon: '⚛' },
    { id: 'databases', label: 'Databases', icon: '◎' },
    { id: 'tools', label: 'Tools', icon: '⚙' },
    { id: 'platforms', label: 'Platforms', icon: '▣' }
  ];

  const skillColors = {
    languages: 'from-green-400 to-emerald-500',
    frameworks: 'from-cyan-400 to-blue-500',
    databases: 'from-purple-400 to-violet-500',
    tools: 'from-orange-400 to-red-500',
    platforms: 'from-pink-400 to-rose-500'
  };

  return (
    <section id="skills" className="relative py-32 bg-[#111113]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-green-400 font-mono text-lg">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Tech</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent max-w-xs" />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-green-500 text-black'
                  : 'bg-[#1a1c1e] text-gray-400 hover:text-white hover:bg-[#252729] border border-white/5'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-base">{cat.icon}</span>
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {skills[activeCategory]?.map((skill, index) => (
              <AnimatedCard key={skill} delay={index * 0.05}>
                <motion.div
                  className="group relative p-5 bg-[#1a1c1e] border border-white/5 rounded-xl overflow-hidden hover:border-green-500/30 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skillColors[activeCategory]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Skill Name */}
                  <div className="relative z-10 flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillColors[activeCategory]}`} />
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`absolute top-2 right-2 w-3 h-3 border-t border-r border-green-400/50`} />
                  </div>
                </motion.div>
              </AnimatedCard>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Terminal-style decoration */}
        <motion.div
          className="mt-16 p-6 bg-[#0a0a0b] border border-white/5 rounded-xl font-mono text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-gray-500">skills.js</span>
          </div>
          <div className="text-gray-400 space-y-1">
            <div className="text-gray-600">// Full-stack developer with passion for clean code</div>
            <span className="text-purple-400">const</span>{' '}
            <span className="text-blue-400">developer</span>{' '}
            <span className="text-white">=</span>{' '}
            <span className="text-gray-300">{'{'}</span>
            <br />
            <span className="ml-4 text-green-400">mindset</span>:{' '}
            <span className="text-orange-400">'Problem solver & lifelong learner'</span>,
            <br />
            <span className="ml-4 text-green-400">approach</span>:{' '}
            <span className="text-orange-400">'User-first, scalable solutions'</span>,
            <br />
            <span className="ml-4 text-green-400">strengths</span>:{' '}
            <span className="text-cyan-400">['Full-stack', 'Performance', 'UX']</span>,
            <br />
            <span className="ml-4 text-green-400">passion</span>:{' '}
            <span className="text-orange-400">'Building impactful products'</span>,
            <br />
            <span className="ml-4 text-green-400">learning</span>:{' '}
            <span className="text-orange-400">'Never stops'</span>,
            <br />
            <span className="ml-4 text-green-400">collaboration</span>:{' '}
            <span className="text-orange-400">'Team player & mentor'</span>,
            <br />
            <span className="ml-4 text-green-400">cupsOfCoffeeDrunk</span>:{' '}
            <span className="text-cyan-400">Infinity</span>,
            <br />
            <span className="ml-4 text-green-400">debugging</span>:{' '}
            <span className="text-orange-400">'Sherlock Holmes mode'</span>,
            <br />
            <span className="ml-4 text-green-400">ready</span>:{' '}
            <span className="text-yellow-400">{`() => hadCoffeeToday`}</span>
            <br />
            <span className="text-gray-300">{'}'};</span>
            <br />
            <br />
            <div className="text-gray-600">// Always ready for the next challenge</div>
            <span className="text-blue-400">developer</span>.<span className="text-yellow-400">ready</span>()
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
