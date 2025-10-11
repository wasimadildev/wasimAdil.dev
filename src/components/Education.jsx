import React from "react";
import {
  GraduationCap,
  Target,
  Star,
  CheckCircle,
  
} from "lucide-react";

function Education() {
  return (
    <section className="mb-16">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div
          className="relative border border-gray-800 p-6 lg:p-8 rounded-sm bg-gray-900/20 
            hover:bg-emerald-500/5 hover:border-emerald-400/60 
            hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] 
            hover:scale-[1.03] hover:skew-y-1 hover:-translate-y-1
            transiti`on-all duration-500 ease-out cursor-pointer
            overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-white" size={24} />
            <h3 className="text-xl font-light text-white tracking-wide">
              Education
            </h3>
          </div>
          <p className="text-lg font-medium text-white mb-2">
            Bachelor's in Computer Science
          </p>
          <p className="text-gray-400 font-light">
            Shifa Tameer-E-Millat University
          </p>
          <div className="flex items-center gap-2 mt-3">
            <Star size={14} className="text-yellow-500" />
            <p className="text-gray-500 text-sm font-light">CGPA: 3.61</p>
          </div>
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

          <div className="flex items-center gap-3 mb-6">
            <Target className="text-white" size={24} />
            <h3 className="text-xl font-light text-white tracking-wide">
              Core Expertise
            </h3>
          </div>
          <ul className="text-gray-300 space-y-3 font-light">
            <li className="flex items-center gap-3">
              <CheckCircle size={16} className="text-green-500" />
              Full-Stack Development
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle size={16} className="text-green-500" />
              RESTful API Design
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle size={16} className="text-green-500" />
              Database Architecture
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle size={16} className="text-green-500" />
              Modern UI/UX
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
