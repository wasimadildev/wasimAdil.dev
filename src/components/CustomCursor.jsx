import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const lastPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY };
      
      // Calculate velocity for trail effect
      setVelocity({
        x: newPos.x - lastPosRef.current.x,
        y: newPos.y - lastPosRef.current.y,
      });
      lastPosRef.current = newPos;
      
      setPos(newPos);
      setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const handleHoverTarget = (e) => {
      const hoverable = e.target.closest(
        "button, a, input, [role='button'], .interactive"
      );
      setHovered(!!hoverable);
    };

    // Smooth animation loop using requestAnimationFrame
    const animate = () => {
      setSmoothPos((prev) => {
        const dx = pos.x - prev.x;
        const dy = pos.y - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Adaptive lerp based on distance for spring-like effect
        const speed = distance > 50 ? 0.15 : 0.12;
        
        return {
          x: prev.x + dx * speed,
          y: prev.y + dy * speed,
        };
      });
      
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleHoverTarget);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleHoverTarget);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [pos]);

  if (!visible) return null;

  const speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
  const scale = hovered ? 1.8 : 1;
  const glowScale = hovered ? 2.2 : 1.5;
  const trailOpacity = Math.min(speed / 20, 0.6);

  return (
    <>
      {/* Global cursor hide */}
      <style>{`
        * {
          cursor: none !important;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Cursor Container */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          transform: `translate(calc(${smoothPos.x}px - 50%), calc(${smoothPos.y}px - 50%))`,
          transition: "opacity 0.2s ease-out",
        }}
      >
        {/* Glow Background - Large blur */}
        <div
          className="absolute rounded-full"
          style={{
            width: `${60 * glowScale}px`,
            height: `${60 * glowScale}px`,
            background: "radial-gradient(circle, rgba(0, 255, 153, 0.4) 0%, rgba(0, 204, 102, 0.15) 65%, transparent 100%)",
            filter: "blur(28px)",
            top: "-50%",
            left: "-50%",
            mixBlendMode: "screen",
            transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        ></div>

        {/* Outer ring - rotating */}
        <div
          className="absolute"
          style={{
            width: `${32 * scale}px`,
            height: `${32 * scale}px`,
            border: `2px solid rgba(0, 255, 153, 0.3)`,
            borderRadius: "50%",
            top: "-50%",
            left: "-50%",
            animation: "spin 4s linear infinite",
            transition: "all 0.3s ease-out",
            boxShadow: `inset 0 0 16px rgba(0, 255, 153, 0.2)`,
            "@keyframes spin": {
              from: { transform: "rotate(0deg)" },
              to: { transform: "rotate(360deg)" },
            },
          }}
        ></div>

        {/* Diffusion halo - difference blend */}
        <div
          className="absolute rounded-full"
          style={{
            width: `${28 * scale}px`,
            height: `${28 * scale}px`,
            background: "radial-gradient(circle, rgba(0, 255, 153, 0.25), transparent)",
            filter: "blur(12px)",
            top: "-50%",
            left: "-50%",
            mixBlendMode: "difference",
            transition: "all 0.3s ease-out",
          }}
        ></div>

        {/* Main cursor dot */}
        <div
          className="absolute rounded-full"
          style={{
            width: `${16 * scale}px`,
            height: `${16 * scale}px`,
            background: "radial-gradient(circle at 30% 30%, rgba(0, 255, 153, 0.9), rgba(0, 204, 102, 0.7))",
            top: "-50%",
            left: "-50%",
            transition: "all 0.2s ease-out",
            boxShadow: `0 0 20px rgba(0, 255, 153, 0.6), inset -2px -2px 8px rgba(0, 0, 0, 0.3)`,
            border: "1px solid rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(4px)",
          }}
        >
          {/* Highlight sparkle */}
          <div
            className="absolute rounded-full"
            style={{
              width: "4px",
              height: "4px",
              background: "rgba(255, 255, 255, 0.9)",
              top: "20%",
              left: "25%",
              filter: "blur(1px)",
              opacity: hovered ? 1 : 0.7,
            }}
          ></div>
        </div>

        {/* Trailing particles on fast movement */}
        {speed > 2 && (
          <>
            <div
              className="absolute rounded-full"
              style={{
                width: "3px",
                height: "3px",
                background: "rgba(0, 255, 153, 0.6)",
                top: `calc(-50% - ${velocity.y * 0.3}px)`,
                left: `calc(-50% - ${velocity.x * 0.3}px)`,
                filter: "blur(2px)",
                opacity: trailOpacity * 0.8,
                animation: "pulse 0.8s ease-out",
              }}
            ></div>
            <div
              className="absolute rounded-full"
              style={{
                width: "2px",
                height: "2px",
                background: "rgba(0, 204, 102, 0.5)",
                top: `calc(-50% - ${velocity.y * 0.6}px)`,
                left: `calc(-50% - ${velocity.x * 0.6}px)`,
                filter: "blur(1px)",
                opacity: trailOpacity * 0.5,
                animation: "pulse 1.2s ease-out 0.1s",
              }}
            ></div>
          </>
        )}
      </div>

      {/* Background with grid patterns */}
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

        {/* Cursor following glow - Green gradient */}
        <div
          className="absolute w-[500px] h-[500px] bg-gradient-radial from-emerald-500/25 via-emerald-400/5 to-transparent blur-3xl rounded-full transition-transform duration-200 ease-out pointer-events-none"
          style={{
            transform: `translate(${smoothPos.x - 250}px, ${smoothPos.y - 250}px)`,
            boxShadow: "0 0 200px rgba(0, 255, 153, 0.15)",
          }}
        ></div>

        {/* Secondary accent glow - Cyan */}
        <div
          className="absolute w-[350px] h-[350px] bg-gradient-radial from-cyan-500/15 via-cyan-400/5 to-transparent blur-3xl rounded-full transition-transform duration-300 ease-out pointer-events-none"
          style={{
            transform: `translate(${smoothPos.x - 175}px, ${smoothPos.y - 175}px) scale(0.8)`,
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
              <line x1="0" y1="8" x2="100" y2="8" stroke="rgba(0, 255, 153, 0.4)" strokeWidth="0.5"/>
              <line x1="0" y1="16" x2="95" y2="16" stroke="rgba(0, 204, 102, 0.3)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#code-lines)" />
        </svg>

        {/* Diagonal Lines - Tech feel */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
          <defs>
            <pattern id="diagonal" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
              <line x1="0" y1="0" x2="0" y2="80" stroke="rgba(0, 255, 153, 0.3)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal)" />
        </svg>

        {/* Radial circles at intervals */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]">
          <defs>
            <pattern id="circles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(0, 255, 153, 0.3)" strokeWidth="0.5"/>
              <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(0, 204, 102, 0.2)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-emerald-500/20 rounded-br-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 border-emerald-500/20 rounded-tl-3xl opacity-50"></div>
        <div className="absolute top-1/2 right-0 w-32 h-32 border-l-2 border-emerald-500/10 opacity-30"></div>

        {/* Scanline effect */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)",
            backgroundSize: "100% 4px",
          }}
        ></div>
      </div>


    </>
  );
}