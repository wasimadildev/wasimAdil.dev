import React from "react";
import { Layers, CheckCircle } from "lucide-react";

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
            transiti`on-all duration-500 ease-out cursor-pointer
            overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex items-center gap-3 mb-3">
              {project.icon}
              <h3 className="text-lg font-light text-white tracking-wide">
                {project.title}
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-4 font-light leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="border border-gray-700 text-gray-300 px-3 py-1 rounded-sm text-xs font-light"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-2">
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
