import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, EyeClosed, Folder, Star } from "lucide-react";
import AnimatedCard from "../animations/AnimatedCard";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { projects } from "../../data/mock";

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-32 bg-[#111113]">
      {/* Background Decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-gradient-to-l from-green-500/5 to-transparent rounded-l-full filter blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-green-400 font-mono text-lg">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Things I've Built
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent max-w-xs" />
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <AnimatedCard
              key={project.id}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 0 ? "" : "md:text-right"
                }`}
              >
                {/* Project Image/Preview */}
                <motion.div
                  className={`md:col-span-7 relative group ${
                    index % 2 === 0 ? "" : "md:order-2"
                  }`}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-white/5">
                    {/* Placeholder with code pattern */}
                    <div className="absolute inset-0 opacity-30 p-6 font-mono text-xs text-green-400/50 overflow-hidden">
                      {`// ${project.title}
const project = {
  name: '${project.title}',
  tech: ${JSON.stringify(project.tech)},
  status: 'shipped'
};

export default project;`}
                    </div>
                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-green-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={false}
                    >
                      {project.live ? (
                        <div className="flex gap-4">
                          <motion.a
                            href={project.live}
                            className="w-12 h-12 rounded-full bg-[#1a1c1e] flex items-center justify-center text-white hover:text-green-400 transition-colors"
                            whileHover={{ scale: 1.1 }}
                          >
                            <ExternalLink size={20} />
                          </motion.a>
                        </div>
                      ) : (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <motion.span className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-xs font-mono cursor-pointer">
                                <EyeClosed
                                  size={14}
                                  className="inline-block mr-1 text-red-400"
                                />
                                ACCESS DENIED
                              </motion.span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <span className="px-3 py-1 text-red-400 text-xs font-mono cursor-default">
                                Private repo
                              </span>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Project Info */}
                <div
                  className={`md:col-span-5 relative z-10 ${
                    index % 2 === 0 ? "md:-ml-12" : "md:-mr-12 md:order-1"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Star size={14} className="text-green-400" />
                    <span className="text-green-400 font-mono text-sm">
                      Featured Project
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <div className="bg-[#1a1c1e] border border-white/5 rounded-xl p-6 mb-4">
                    {Array.isArray(project.description) ? (
                      <ul
                        className={`space-y-2 text-gray-400 text-sm ${
                          index % 2 === 0 ? "" : "md:text-right"
                        }`}
                      >
                        {project.description.map((bullet, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <span className="text-green-400 mt-1 shrink-0">
                              ▹
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400">{project.description}</p>
                    )}
                  </div>
                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "" : "md:justify-end"
                    }`}
                  >
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              className="text-center text-2xl font-semibold text-white mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Other Noteworthy Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project, index) => (
                <AnimatedCard key={project.id} delay={index * 0.1}>
                  <motion.div
                    className="h-full p-6 bg-[#1a1c1e] border border-white/5 rounded-xl hover:border-green-500/30 transition-all duration-300 group"
                    whileHover={{ y: -8 }}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <Folder className="w-10 h-10 text-green-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-gray-500 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatedCard>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
