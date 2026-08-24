"use client";

import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Star,
} from "lucide-react";
import {
  personalInfo,
  skills,
  experiences,
  projects,
  education,
} from "../../data/mock";

const PrintableResume = () => {
  const isMac =
    typeof navigator !== "undefined" &&
    navigator.userAgentData?.platform === "macOS";
  const command = isMac ? "Cmd + P" : "Ctrl + P";

  return (
    <div className="print-page min-h-screen flex items-start justify-center p-6">
      <style jsx>{`
        @media print {
          body {
            margin: 0;
            padding: 0;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print-page {
            padding: 0 !important;
            background: white !important;
          }
          .print-container {
            box-shadow: none !important;
            margin: 0 !important;
            min-height: 0 !important;
            display: grid !important;
            grid-template-columns: 1fr 320px !important;
          }
          .no-print {
            display: none !important;
          }
          @page {
            margin: 0.4in;
            size: A4;
          }
        }
      `}</style>

      <div className="print-container w-full max-w-[8.5in] bg-white shadow-2xl grid grid-cols-[1fr_320px]">
        {/* Main column */}
        <div className="p-10">
          {/* Header */}
          <header className="mb-10 pb-6 border-b-2 border-green-500/40">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
              {personalInfo.name}
            </h1>
            <h2 className="text-lg font-mono text-green-600 mt-2">
              {personalInfo.title}
            </h2>
            <p className="text-gray-600 italic mt-3">{personalInfo.tagline}</p>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600 mt-4">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-green-600" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail size={14} className="text-green-600" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone size={14} className="text-green-600" />
                {personalInfo.mobile}
              </span>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-green-600"
              >
                <Github size={14} className="text-green-600" />
                GitHub
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-green-600"
              >
                <Linkedin size={14} className="text-green-600" />
                LinkedIn
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-10">
            <h3 className="text-xs font-mono font-semibold tracking-widest text-green-600 uppercase mb-3">
              Summary
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {personalInfo.about}
            </p>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-xs font-mono font-semibold tracking-widest text-green-600 uppercase mb-4">
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  {exp.positions.map((pos, posIndex) => (
                    <div key={posIndex} className={posIndex > 0 ? "mt-3" : ""}>
                      <div className="flex justify-between items-baseline gap-4 flex-wrap">
                        <h4 className="font-semibold text-gray-900">
                          {pos.title}
                        </h4>
                        {pos.period && (
                          <span className="text-xs font-mono text-gray-500 whitespace-nowrap">
                            {pos.period}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-green-600 font-medium mb-1.5">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {pos.description}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="bg-[#0d0d0f] text-gray-300 p-8">
          {/* Projects */}
          <section className="mb-10">
            <h3 className="text-xs font-mono font-semibold tracking-widest text-green-400 uppercase mb-4 pb-2 border-b border-white/10">
              Projects
            </h3>
            <div className="space-y-4">
              {projects
                .filter((p) => p.featured)
                .map((project) => (
                  <div key={project.id}>
                    <h4 className="text-sm font-semibold text-white">
                      {project.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed mt-1">
                      {Array.isArray(project.description)
                        ? project.description.join(" ")
                        : project.description}
                    </p>
                    <p className="text-xs text-green-400/80 font-mono mt-1.5">
                      {project.tech.join(" · ")}
                    </p>
                  </div>
                ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-10">
            <h3 className="text-xs font-mono font-semibold tracking-widest text-green-400 uppercase mb-4 pb-2 border-b border-white/10">
              Skills
            </h3>
            <div className="space-y-3">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h4 className="text-[11px] font-mono text-green-400/80 uppercase mb-1">
                    {category}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {skillList.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-xs font-mono font-semibold tracking-widest text-green-400 uppercase mb-4 pb-2 border-b border-white/10">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="flex gap-2.5">
                  <Star
                    size={13}
                    className="text-green-400 mt-0.5 shrink-0"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-white leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-gray-400">{edu.institution}</p>
                    <p className="text-xs font-mono text-green-400/70 mt-0.5">
                      {edu.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <button
        onClick={() => window.print()}
        className="no-print fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-xl shadow-lg transition-colors"
      >
        Print Resume ({command})
      </button>
    </div>
  );
};

export default PrintableResume;
