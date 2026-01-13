import React from 'react';
import { personalInfo, skills, experiences, projects, education } from '../../data/mock';

const PrintableResume = () => {
const isMac = navigator.userAgentData?.platform === 'macOS';
const command = isMac ? 'Cmd + P' : 'Ctrl + P';
  return (
    <div className="print-container bg-white text-black min-h-screen p-8">
      {/* Print Styles */}
      <style jsx>{`
        @media print {
          body {
            margin: 0;
            padding: 0;
            background: white !important;
            -webkit-print-color-adjust: exact;
          }
          .print-container {
            box-shadow: none !important;
            margin: 0 !important;
            padding: 20px !important;
            background: white !important;
            color: black !important;
          }
          .page-break {
            page-break-before: always;
          }
          .no-print {
            display: none !important;
          }
          .green-accent {
            color: #22c55e !important;
          }
          .green-border {
            border-color: #22c55e !important;
          }
          .green-bg {
            background-color: #22c55e !important;
            color: white !important;
          }
          @page {
            margin: 0.5in;
            size: A4;
          }
        }
        
        @media screen {
          .print-container {
            max-width: 8.5in;
            margin: 0 auto;
            background: white;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
            min-height: 11in;
          }
          .green-accent {
            color: #22c55e;
          }
          .green-border {
            border-color: #22c55e;
          }
          .green-bg {
            background-color: #22c55e;
            color: white;
          }
        }
      `}</style>

      {/* Header Section */}
      <header className="flex items-start gap-6 mb-8 border-b-2 green-border pb-6">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img 
            src={personalInfo.avatar} 
            alt={personalInfo.name}
            className="w-24 h-24 rounded-full object-cover border-3 border-gray-300"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        
        {/* Header Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{personalInfo.name}</h1>
          <h2 className="text-xl green-accent mb-4 font-semibold">{personalInfo.title}</h2>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
            <span className="flex items-center gap-1">
              <span className="green-accent">📍</span> {personalInfo.location}
            </span>
            <span className="flex items-center gap-1">
              <span className="green-accent">📧</span> {personalInfo.email}
            </span>
            <span className="flex items-center gap-1">
              <span className="green-accent">🔗</span> github.com/sudpmishra
            </span>
            <span className="flex items-center gap-1">
              <span className="green-accent">💼</span> linkedin.com/in/sudpmishra
            </span>
          </div>
          <p className="text-gray-800 italic">{personalInfo.tagline}</p>
        </div>
      </header>

      {/* About Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold green-accent mb-4 border-b green-border pb-2">Professional Summary</h3>
        <p className="text-gray-800 leading-relaxed">{personalInfo.about}</p>
      </section>

      {/* Skills Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold green-accent mb-4 border-b green-border pb-2">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="mb-4">
              <h4 className="font-semibold green-accent mb-2 capitalize text-sm">{category.toUpperCase()}:</h4>
              <p className="text-gray-700 text-sm">{skillList.join(' • ')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold green-accent mb-4 border-b green-border pb-2">Professional Experience</h3>
        {experiences.map((exp, index) => (
          <div key={exp.id} className="mb-6">
            <div className="mb-4">
              <h4 className="text-lg font-bold text-gray-900">{exp.company}</h4>
              <p className="text-sm green-accent mb-3 font-medium">{exp.url}</p>
              
              {exp.positions.map((pos, posIndex) => (
                <div key={posIndex} className="ml-4 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-gray-800">{pos.title}</h5>
                    <span className="text-sm green-accent font-semibold">{pos.period}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{pos.description}</p>
                </div>
              ))}
            </div>
            {index < experiences.length - 1 && <hr className="border-gray-300" />}
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold green-accent mb-4 border-b green-border pb-2">Key Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="mb-4 p-4 border green-border rounded">
              <h4 className="font-bold text-gray-900 mb-2">{project.title}</h4>
              <p className="text-gray-700 text-sm mb-2">{project.description}</p>
              <div className="text-xs green-accent font-semibold">
                <strong>Tech:</strong> {project.tech.join(' • ')}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold green-accent mb-4 border-b green-border pb-2">Education</h3>
        {education.map((edu) => (
          <div key={edu.id} className="mb-3">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                <p className="text-gray-700 text-sm">{edu.institution}</p>
              </div>
              <span className="text-sm green-accent font-semibold">{edu.period}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t green-border text-center text-sm text-gray-600">
        <p>Generated from portfolio data • {new Date().toLocaleDateString()}</p>
        <div className="no-print mt-4">
          <button 
            onClick={() => window.print()} 
            className="green-bg px-6 py-2 rounded hover:bg-green-600 transition-colors font-semibold"
          >
            Print Resume ({command})
          </button>
        </div>
      </footer>
    </div>
  );
};

export default PrintableResume;