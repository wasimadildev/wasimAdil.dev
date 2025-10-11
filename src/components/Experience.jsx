import React from "react";
import { Calendar, User, Briefcase, ArrowRight } from "lucide-react";
import { experience } from "../data";

function Experience() {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="text-white" size={28} />
        <h2 className="text-2xl lg:text-3xl font-thin text-white tracking-wide">
          Professional Experience
        </h2>
      </div>

      <div
        className="relative border border-gray-800 p-6 lg:p-8 rounded-sm bg-gray-900/20 
            hover:bg-emerald-500/5 hover:border-emerald-400/60 
            hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] 
            hover:scale-[1.03] hover:skew-y-1 hover:-translate-y-1
            transiti`on-all duration-500 ease-out cursor-pointer
            overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-4">
          <div>
            <h3 className="text-xl font-light text-white mb-2">
              {experience.role}
            </h3>
            <p className="text-gray-400 font-light flex items-center gap-2">
              <User size={16} />
              Freelance
            </p>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm font-light">
            <Calendar size={16} />
            {experience.period}
          </div>
        </div>

        <div className="space-y-4">
          {experience.achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-start gap-4 text-gray-300 font-light"
            >
              <ArrowRight
                size={16}
                className="text-green-500 mt-1 flex-shrink-0"
              />
              <span className="leading-relaxed">{achievement}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
