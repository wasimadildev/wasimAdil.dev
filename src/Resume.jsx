import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code, 
  Database, 
  Globe, 
  Award, 
  GraduationCap, 
  Calendar,
  User,
  Briefcase,
  Target,
  Layers,
  Server,
  Monitor,
  Smartphone,
  Download,
  Star,
  CheckCircle,
  ArrowRight,
  FileCode,
  Settings,
  Zap,
  Box,
  Palette,
  Shield,
  GitBranch,
  Container,
  Send,
  Flame,
  Cloud,
  Image
} from 'lucide-react';
import profile from './assets/waseem.jpeg';
const Resume = () => {
  const skills = {
    languages: [
      { name: 'JavaScript', icon: <FileCode size={16} className="text-yellow-400" /> },
      { name: 'Java', icon: <Code size={16} className="text-red-500" /> },
      { name: 'Python', icon: <Code size={16} className="text-blue-400" /> },
      { name: 'C++', icon: <Settings size={16} className="text-blue-600" /> },
      { name: 'HTML', icon: <Globe size={16} className="text-orange-500" /> },
      { name: 'CSS', icon: <Palette size={16} className="text-blue-500" /> },
      { name: 'SQL', icon: <Database size={16} className="text-green-500" /> }
    ],
    frameworks: [
      { name: 'React.js', icon: <Zap size={16} className="text-cyan-400" /> },
      { name: 'Next.js', icon: <Box size={16} className="text-gray-300" /> },
      { name: 'Node.js', icon: <Server size={16} className="text-green-600" /> },
      { name: 'Express.js', icon: <Globe size={16} className="text-gray-400" /> },
      { name: 'MongoDB', icon: <Database size={16} className="text-green-500" /> },
      { name: 'MySQL', icon: <Database size={16} className="text-blue-500" /> }
    ],
    tools: [
      { name: 'Git', icon: <GitBranch size={16} className="text-orange-600" /> },
      { name: 'Docker', icon: <Container size={16} className="text-blue-400" /> },
      { name: 'Postman', icon: <Send size={16} className="text-orange-500" /> },
      { name: 'Firebase', icon: <Flame size={16} className="text-yellow-500" /> },
      { name: 'Appwrite', icon: <Cloud size={16} className="text-pink-500" /> },
      { name: 'Cloudinary', icon: <Image size={16} className="text-blue-400" /> }
    ],
    concepts: ['Full-Stack Development', 'RESTful APIs', 'Authentication', 'Database Design']
  };

  const projects = [
    {
      title: 'Real-Time Chat & Media App',
      tech: ['Node.js', 'React', 'MongoDB', 'WebSockets', 'Redux'],
      description: 'Full-stack messaging app with JWT authentication and WebSocket communication',
      highlights: ['Real-time messaging', 'Audio/video communication', 'Cross-device compatibility'],
      icon: <Globe size={18} />
    },
    {
      title: 'Netflix-GPT',
      tech: ['React', 'Firebase', 'GPT API'],
      description: 'AI-powered movie recommendation platform with dynamic search functionality',
      highlights: ['AI recommendations', 'Firebase authentication', 'Responsive design'],
      icon: <Monitor size={18} />
    },
    {
      title: 'Blog API with Authentication',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      description: 'Secure REST API with comprehensive authentication and CRUD operations',
      highlights: ['JWT authentication', 'Email OTP verification', 'Security best practices'],
      icon: <Server size={18} />
    },
    {
      title: 'Q&A Platform',
      tech: ['Next.js', 'Appwrite', 'Tailwind CSS'],
      description: 'Interactive platform with real-time voting and user interactions',
      highlights: ['Real-time updates', 'User voting system', 'Modern UI/UX'],
      icon: <Target size={18} />
    }
  ];

  const experience = {
    role: 'Full-Stack Web Developer (Freelance)',
    period: 'Feb 2024 - Present',
    achievements: [
      'Developed full-featured web application for graphic designer with document editing services',
      'Built responsive data collection platform with OCR scanning and WhatsApp integration',
      'Created Task & Project Management System using Django with role-based access control'
    ]
  };

  const certifications = [
    {
      title: 'Complete Web Development Course',
      issuer: 'Udemy - Hitesh Choudhary',
      date: 'July 2025',
      icon: <Code size={14} />
    },
    {
      title: 'DSA in Java',
      issuer: 'Apna College',
      date: 'October 2024',
      icon: <Database size={14} />
    },
    {
      title: 'Fundamentals of Backend Engineering',
      issuer: 'Udemy - Hussein Nasser',
      date: 'January 2025',
      icon: <Server size={14} />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="max-w-6xl mx-auto bg-black">
        {/* Header - Unique Design with Black Background */}
        <header className="relative overflow-hidden bg-black">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
                {[...Array(96)].map((_, i) => (
                  <div key={i} className="border-r border-b border-gray-800"></div>
                ))}
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-white opacity-20 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-32 w-1 h-1 bg-gray-400 opacity-30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-white opacity-15 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-1 h-1 bg-gray-500 opacity-25 rounded-full animate-pulse"></div>
            
            {/* Subtle Glow Effects */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent opacity-20"></div>
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-600 to-transparent opacity-15"></div>
          </div>
          
          <div className="relative z-10 px-4 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-20 text-white">
            {/* Mobile Layout (up to md) */}
            <div className="block lg:hidden">
              {/* Profile Section */}
              <div className="text-center mb-8">
                <div className="inline-block relative mb-6">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-900/30 overflow-hidden mx-auto">
                    <img 
                        src={profile} 
                      alt="Waseem Adil - MERN Stack Developer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                          <User size={20} className="text-gray-400" />
                        </div>
                        <p className="text-gray-500 text-xs font-light">Profile Photo</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-thin mb-2 tracking-tight">
                  Waseem <span className="font-light border-b border-gray-500 pb-1">Adil</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 mb-4 font-extralight tracking-wide flex items-center justify-center gap-2">
                  <Code size={18} />
                  MERN Stack Developer
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light max-w-md mx-auto mb-6">
                  Passionate full-stack developer crafting scalable web applications with modern technologies
                </p>
                
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/path-to-your-resume.pdf';
                    link.download = 'Waseem_Adil_Resume.pdf';
                    link.click();
                  }}
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-6 py-2.5 rounded-sm transition-all duration-300 font-medium tracking-wide flex items-center gap-2 mx-auto mb-8 group"
                >
                  <Download size={16} className="group-hover:text-black transition-colors duration-300" />
                  Download CV
                </button>
              </div>
              
              {/* Contact Info Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300 justify-center sm:justify-start">
                  <Mail size={16} />
                  <span className="text-xs sm:text-sm font-light">waseemadicode@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 justify-center sm:justify-start">
                  <Phone size={16} />
                  <span className="text-xs sm:text-sm font-light">+92 305 6609787</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 justify-center sm:justify-start">
                  <MapPin size={16} />
                  <span className="text-xs sm:text-sm font-light">Islamabad, Pakistan</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 justify-center sm:justify-start">
                  <ExternalLink size={16} />
                  <span className="text-xs sm:text-sm font-light">waseemadil.dev</span>
                </div>
              </div>
              
              <div className="flex justify-center gap-6">
                <Github size={20} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer" />
                <Linkedin size={20} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer" />
              </div>
            </div>

            {/* Desktop Layout (lg and up) */}
            <div className="hidden lg:block">
              <div className="flex items-start justify-between gap-12">
                <div className="flex-1">
                  <h1 className="text-5xl xl:text-6xl font-thin mb-3 tracking-tight">
                    Waseem <span className="font-light border-b border-gray-500 pb-1">Adil</span>
                  </h1>
                  <p className="text-xl xl:text-2xl text-gray-300 mb-8 font-extralight tracking-wide flex items-center gap-3">
                    <Code size={24} />
                    MERN Stack Developer
                  </p>
                  <p className="text-gray-400 max-w-xl text-lg leading-relaxed font-light mb-8">
                    Passionate full-stack developer crafting scalable web applications with modern technologies
                  </p>
                  
                  <button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/path-to-your-resume.pdf';
                      link.download = 'Waseem_Adil_Resume.pdf';
                      link.click();
                    }}
                    className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-sm transition-all duration-300 font-medium tracking-wide flex items-center gap-3 w-fit group"
                  >
                    <Download size={18} className="group-hover:text-black transition-colors duration-300" />
                    Download CV
                  </button>
                </div>
                
                {/* Profile Image Desktop */} 
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-48 h-48 overflow-hidden">
                      <img 
                      src={profile} 
                        alt="Waseem Adil - MERN Stack Developer"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center" style={{display: 'none'}}>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                            <User size={24} className="text-gray-400" />
                          </div>
                          {/* <p className="text-gray-500 text-xs font-light">Profile Photo</p> */}
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Contact Info Desktop */}
                <div className="text-right space-y-4">
                  <div className="flex items-center justify-end gap-3 text-gray-300">
                    <Mail size={16} />
                    <span className="text-sm font-light">waseemadicode@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-end gap-3 text-gray-300">
                    <Phone size={16} />
                    <span className="text-sm font-light">+92 305 6609787</span>
                  </div>
                  <div className="flex items-center justify-end gap-3 text-gray-300">
                    <MapPin size={16} />
                    <span className="text-sm font-light">Islamabad, Pakistan</span>
                  </div>
                  <div className="flex items-center justify-end gap-3 text-gray-300">
                    <ExternalLink size={16} />
                    <span className="text-sm font-light">waseemadil.dev</span>
                  </div>
                  <div className="flex justify-end gap-5 mt-6">
                    <Github size={20} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer" />
                    <Linkedin size={20} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="px-4 sm:px-8 lg:px-12 py-8">
          {/* Education & Core Expertise */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="border border-gray-800 p-6 lg:p-8 rounded-sm bg-gray-900/20 
hover:bg-violet-500/10 hover:border-violet-400 
hover:shadow-[inset_0_0_50px_rgba(139,92,246,0.2),0_0_50px_rgba(139,92,246,0.3)]
hover:scale-125 hover:-translate-y-4 hover:rotate-3
transition-all duration-600 ease-out cursor-pointer
hover:backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="text-white" size={24} />
                  <h3 className="text-xl font-light text-white tracking-wide">Education</h3>
                </div>
                <p className="text-lg font-medium text-white mb-2">Bachelor's in Computer Science</p>
                <p className="text-gray-400 font-light">Shifa Tameer-E-Millat University</p>
                <div className="flex items-center gap-2 mt-3">
                  <Star size={14} className="text-yellow-500" />
                  <p className="text-gray-500 text-sm font-light">CGPA: 3.57</p>
                </div>
              </div>
              
              <div className="border border-gray-800 p-6 lg:p-8 rounded-sm bg-gray-900/20">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="text-white" size={24} />
                  <h3 className="text-xl font-light text-white tracking-wide">Core Expertise</h3>
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

          {/* Experience */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-white" size={28} />
              <h2 className="text-2xl lg:text-3xl font-thin text-white tracking-wide">
                Professional Experience
              </h2>
            </div>
            
            <div className="border border-gray-800 rounded-sm p-6 lg:p-8 bg-gray-900/20">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-4">
                <div>
                  <h3 className="text-xl font-light text-white mb-2">{experience.role}</h3>
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
                  <div key={index} className="flex items-start gap-4 text-gray-300 font-light">
                    <ArrowRight size={16} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Layers className="text-white" size={28} />
              <h2 className="text-2xl lg:text-3xl font-thin text-white tracking-wide">
                Featured Projects
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {projects.map((project, index) => (
                <div key={index} className="border border-gray-800 rounded-sm p-6 lg:p-8 bg-gray-900/20 hover:bg-gray-900/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    {project.icon}
                    <h3 className="text-lg font-light text-white tracking-wide">{project.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 font-light leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="border border-gray-700 text-gray-300 px-3 py-1 rounded-sm text-xs font-light">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs text-gray-400 font-light">
                        <CheckCircle size={12} className="text-green-500" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills & Certifications */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Technical Skills */}
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
                      <span key={skill.name} className="bg-white text-black px-4 py-2 rounded-sm text-sm font-light flex items-center gap-2">
                        {skill.icon}
                        {skill.name}
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
                      <span key={skill.name} className="border border-gray-600 text-gray-300 px-4 py-2 rounded-sm text-sm font-light flex items-center gap-2">
                        {skill.icon}
                        {skill.name}
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
                      <span key={skill.name} className="border border-gray-600 text-gray-300 px-4 py-2 rounded-sm text-sm font-light flex items-center gap-2">
                        {skill.icon}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Award className="text-white" size={28} />
                <h2 className="text-2xl lg:text-3xl font-thin text-white tracking-wide">
                  Certifications
                </h2>
              </div>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="border border-gray-800 p-6 rounded-sm bg-gray-900/20">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {cert.icon}
                          <h3 className="font-light text-white text-sm tracking-wide">{cert.title}</h3>
                        </div>
                        <p className="text-gray-400 text-xs mb-1 font-light">{cert.issuer}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-xs font-light ml-4">
                        <Calendar size={12} />
                        {cert.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-800 px-4 sm:px-8 lg:px-12 py-8">
          <div className="text-center text-gray-500 text-xs sm:text-sm font-light">
            <p>© 2025 Waseem Adil • Available for full-time opportunities and freelance projects</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Resume;