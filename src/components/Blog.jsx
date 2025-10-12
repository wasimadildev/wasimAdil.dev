import React from "react";
import { BookOpen, ExternalLink } from "lucide-react";

function Blog() {
  const blog = {
    title:
      "Next.js + Tailwind CSS + Prisma + PostgreSQL – My Fullstack Setup Guide",
    link: "https://medium.com/@wasimadildev/next-js-tailwind-css-prisma-postgres-85e7f8ad3ff1",
  };

  return (
    <section className="mb-20">
      {/* Section Heading */}
      <div className="flex items-center gap-3 mb-10">
        <BookOpen className="text-emerald-400" size={28} />
        <h2 className="text-3xl font-thin text-white tracking-wide">My Blog</h2>
      </div>

      {/* Blog Card */}
      <div
        className="relative w-full border border-gray-800 bg-gray-900/40 
        backdrop-blur-sm rounded-xl p-8 text-white 
        transition-all duration-500 hover:border-emerald-400/60 
        hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] 
        hover:-translate-y-1 group"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <h3 className="text-xl sm:text-2xl font-light group-hover:text-emerald-400 transition-colors">
            {blog.title}
          </h3>

          <a
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-emerald-400 text-sm sm:text-base hover:underline"
          >
            Read on Medium
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Blog;
