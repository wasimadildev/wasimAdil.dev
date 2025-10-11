import React, { useEffect, useState } from "react";

export default function ProgrammerPortfolioBg() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (window.innerWidth < 768) return null;

  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none bg-slate-950">
      {/* Grid Background */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(30, 144, 255, 0.3)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Hex Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]">
        <defs>
          <pattern id="hexgrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <polygon points="30,0 60,15 60,45 30,60 0,45 0,15" fill="none" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexgrid)" />
      </svg>

      {/* Cursor following glow - Blue gradient */}
      <div
        className="absolute w-[500px] h-[500px] bg-gradient-radial from-blue-500/25 via-blue-400/5 to-transparent blur-3xl rounded-full transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`,
          boxShadow: "0 0 200px rgba(59, 130, 246, 0.15)",
        }}
      ></div>

      {/* Secondary accent glow - Purple */}
      <div
        className="absolute w-[350px] h-[350px] bg-gradient-radial from-purple-500/15 via-purple-400/5 to-transparent blur-3xl rounded-full transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${pos.x - 175}px, ${pos.y - 175}px) scale(0.8)`,
          filter: "blur(40px)",
        }}
      ></div>

      {/* Dot Matrix Pattern */}
      <div className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(59, 130, 246, 0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Code Block Lines - Subtle */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
        <defs>
          <pattern id="code-lines" x="0" y="0" width="120" height="24" patternUnits="userSpaceOnUse">
            <line x1="0" y1="8" x2="100" y2="8" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="0.5"/>
            <line x1="0" y1="16" x2="95" y2="16" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#code-lines)" />
      </svg>

      {/* Diagonal Lines - Tech feel */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        <defs>
          <pattern id="diagonal" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
            <line x1="0" y1="0" x2="0" y2="80" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal)" />
      </svg>

      {/* Radial circles at intervals */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]">
        <defs>
          <pattern id="circles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circles)" />
      </svg>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-blue-500/20 rounded-br-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 border-purple-500/20 rounded-tl-3xl opacity-50"></div>
      <div className="absolute top-1/2 right-0 w-32 h-32 border-l-2 border-blue-500/10 opacity-30"></div>

      {/* Scanline effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)",
          backgroundSize: "100% 4px",
        }}
      ></div>
    </div>
  );
}