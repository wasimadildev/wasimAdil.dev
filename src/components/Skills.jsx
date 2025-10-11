import React from "react";
import { Code, Database, Globe, Award, Layers, CheckCircle, Calendar } from "lucide-react";

import { skills } from "../data";

export function Skills() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <Code className="text-white" size={28} />
        <h2 className="text-2xl lg:text-3xl font-thin text-white tracking-wide">
          Technical Skills
        </h2>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="font-light text-gray-300 mb-4 flex items-center gap-3 tracking-wide">
            <Code size={18} />
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.languages.map((skill) => (
              <span
                key={skill.name}
                className="relative border border-gray-800 bg-gray-900/20 px-4 py-2 rounded-sm text-sm font-light flex items-center gap-2 text-white
                hover:bg-emerald-500/5 hover:border-emerald-400/60 
                hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] 
                hover:scale-[1.03] hover:skew-y-1 hover:-translate-y-1
                transition-all duration-500 ease-out cursor-pointer
                overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">{skill.icon}</span>
                <span className="relative">{skill.name}</span>
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-light text-gray-300 mb-4 flex items-center gap-3 tracking-wide">
            <Globe size={18} />
            Frameworks & Libraries
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.frameworks.map((skill) => (
              <span
                key={skill.name}
                className="relative border border-gray-800 bg-gray-900/20 px-4 py-2 rounded-sm text-sm font-light flex items-center gap-2 text-white
                hover:bg-emerald-500/5 hover:border-emerald-400/60 
                hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] 
                hover:scale-[1.03] hover:skew-y-1 hover:-translate-y-1
                transition-all duration-500 ease-out cursor-pointer
                overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">{skill.icon}</span>
                <span className="relative">{skill.name}</span>
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-light text-gray-300 mb-4 flex items-center gap-3 tracking-wide">
            <Database size={18} />
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((skill) => (
              <span
                key={skill.name}
                className="relative border border-gray-800 bg-gray-900/20 px-4 py-2 rounded-sm text-sm font-light flex items-center gap-2 text-white
                hover:bg-emerald-500/5 hover:border-emerald-400/60 
                hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] 
                hover:scale-[1.03] hover:skew-y-1 hover:-translate-y-1
                transition-all duration-500 ease-out cursor-pointer
                overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">{skill.icon}</span>
                <span className="relative">{skill.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}