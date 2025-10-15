import React from "react";
import { Award, Calendar, ExternalLink, Code, Database, Server } from "lucide-react";
import { certifications } from "../data";

function Certifications() {
  return (
    <section>
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <Award className="text-white" size={28} />
        <h2 className="text-2xl lg:text-3xl font-thin text-white tracking-wide">
          Certifications
        </h2>
      </div>

      {/* Certification Cards */}
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="relative border border-gray-800 p-6 lg:p-8 rounded-sm bg-gray-900/20 
            hover:bg-emerald-500/5 hover:border-emerald-400/60 
            hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] 
            hover:scale-[1.03] hover:skew-y-1 hover:-translate-y-1
            transition-all duration-500 ease-out overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>


            <div className="flex items-start justify-between relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {cert.icon}
                  <h3 className="font-light text-white text-sm tracking-wide">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-xs mb-1 font-light">
                  {cert.issuer}
                </p>
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-xs font-light ml-4">
                <Calendar size={12} />
                {cert.date}
              </div>
            </div>

            {/* View Certificate link */}
            {cert.link && (
              <div className="mt-3 flex items-center gap-2">
               <a
  href={cert.link}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-xs font-light transition-colors duration-300 relative z-10"
>
  <ExternalLink size={12} />
  View Certificate
</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
