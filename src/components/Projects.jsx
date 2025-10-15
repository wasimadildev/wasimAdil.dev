import React from "react";
import { Layers, CheckCircle, Globe, Monitor, Server, Target, Github, ExternalLink } from "lucide-react";
import { projects } from "../data";

function Projects() {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <Layers className="text-white" size={28} />
        <h2 className="text-2xl lg:text-3xl font-thin text-white tracking-wide">
          Featured Projects
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative border border-gray-800 p-6 lg:p-8 rounded-sm bg-gray-900/20 
            hover:bg-emerald-500/5 hover:border-emerald-400/60 
            hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] 
            hover:scale-[1.03] hover:skew-y-1 hover:-translate-y-1
            transition-all duration-500 ease-out 
            overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Title + Icon */}
            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="flex items-center gap-3">
                {project.icon}
                <h3 className="text-lg font-light text-white tracking-wide">
                  {project.title}
                </h3>
              </div>

              {/* Repo & Live Links */}
              <div className="flex items-center gap-3 pointer-events-auto">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4 font-light leading-relaxed relative z-10">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4 relative z-10">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="border border-gray-700 text-gray-300 px-3 py-1 rounded-sm text-xs font-light"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-2 relative z-10">
              {project.highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-xs text-gray-400 font-light"
                >
                  <CheckCircle size={12} className="text-green-500" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
