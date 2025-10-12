import React from "react";
import profile from "../assets/waseem.jpeg";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  User,
  Download,
} from "lucide-react";

function Header() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "#";
    link.download = "Waseem_Adil_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const ProfileImage = () => (
    <div className="relative flex-shrink-0">
      <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 overflow-hidden rounded-full">
        <img
          src={profile}
          alt="Waseem Adil - MERN Stack Developer"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div
          className="w-full h-full bg-gray-800 flex items-center justify-center"
          style={{ display: "none" }}
        >
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <User size={20} className="text-gray-400" />
            </div>
            <p className="text-gray-500 text-xs font-light hidden sm:block">Profile Photo</p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-5 sm:w-6 h-5 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-green-500 rounded-full"></div>
      </div>
    </div>
  );

  const ContactInfo = ({ isDesktop = false }) => (
    <div className={isDesktop ? "text-right space-y-4" : "space-y-3"}>
      <div className={`flex items-center gap-3 text-gray-300 text-xs sm:text-sm font-light ${isDesktop ? "justify-end" : ""}`}>
        <Mail size={16} className="flex-shrink-0" />
        <span>waseemadicode@gmail.com</span>
      </div>
      <div className={`flex items-center gap-3 text-gray-300 text-xs sm:text-sm font-light ${isDesktop ? "justify-end" : ""}`}>
        <Phone size={16} className="flex-shrink-0" />
        <span>+92 305 6609787</span>
      </div>
      <div className={`flex items-center gap-3 text-gray-300 text-xs sm:text-sm font-light ${isDesktop ? "justify-end" : ""}`}>
        <MapPin size={16} className="flex-shrink-0" />
        <span>Islamabad, Pakistan</span>
      </div>
      <div className={`flex items-center gap-3 text-gray-300 text-xs sm:text-sm font-light ${isDesktop ? "justify-end" : ""}`}>
        <ExternalLink size={16} className="flex-shrink-0" />
        <span>waseemadil.dev</span>
      </div>
    </div>
  );

  const SocialLinks = ({ isDesktop = false }) => (
    <div className={`flex gap-5 ${isDesktop ? "justify-end mt-6" : "justify-center gap-6"}`}>
      <Github size={20} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer" />
      <Linkedin size={20} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer" />
    </div>
  );

  return (
    <header className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          {[...Array(96)].map((_, i) => (
            <div key={i} className="border-r border-b border-gray-800"></div>
          ))}
        </div>
        <div className="absolute top-20 left-20 w-2 h-2 bg-white opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-gray-400 opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-white opacity-15 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-gray-500 opacity-25 rounded-full animate-pulse"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent opacity-20"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-600 to-transparent opacity-15"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-20 text-white">
        {/* Mobile & Tablet Layout (below lg) */}
        <div className="lg:hidden">
          <div className="text-center mb-8">
            <div className="inline-block relative mb-6">
              <ProfileImage />
            </div>

            <h1 className="text-3xl sm:text-4xl font-thin mb-2 tracking-tight">
              Waseem{" "}
              <span className="font-light border-b border-gray-500 pb-1">
                Adil
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-4 font-extralight tracking-wide flex items-center justify-center gap-2">
              <Code size={18} />
              MERN Stack Developer
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light max-w-md mx-auto mb-6">
              Passionate full-stack developer crafting scalable web applications
              with modern technologies
            </p>

            <button
              onClick={handleDownloadCV}
              className="relative group flex items-center justify-center gap-3 text-sm sm:text-base font-medium tracking-wide border border-white/80 text-white hover:bg-white hover:text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-white/20 mx-auto"
            >
              <Download size={18} className="group-hover:text-black transition-colors duration-300" />
              <span className="whitespace-nowrap">Download CV</span>
              <span className="absolute inset-0 rounded-md bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
            </button>
          </div>

          <ContactInfo />
          <SocialLinks />
        </div>

        {/* Desktop Layout (lg and up) */}
        <div className="hidden lg:flex lg:items-start lg:justify-between lg:gap-12">
          <div className="flex-1">
            <h1 className="text-5xl xl:text-6xl font-thin mb-3 tracking-tight">
              Waseem{" "}
              <span className="font-light border-b border-gray-500 pb-1">
                Adil
              </span>
            </h1>
            <p className="text-xl xl:text-2xl text-gray-300 mb-8 font-extralight tracking-wide flex items-center gap-3">
              <Code size={24} />
              MERN Stack Developer
            </p>
            <p className="text-gray-400 max-w-xl text-lg leading-relaxed font-light mb-8">
              Passionate full-stack developer crafting scalable web applications
              with modern technologies
            </p>

            <button
              onClick={handleDownloadCV}
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-sm transition-all duration-300 font-medium tracking-wide flex items-center gap-3 w-fit group"
            >
              <Download size={18} className="group-hover:text-black transition-colors duration-300" />
              Download CV
            </button>
          </div>

          <ProfileImage />

          <div>
            <ContactInfo isDesktop={true} />
            <SocialLinks isDesktop={true} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;