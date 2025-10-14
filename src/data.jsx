import { 
 
  Code, 
  Database, 
  Globe, 
  
  Target,
  
  Server,
  Monitor,
  
  FileCode,
  Settings,
  Zap,
  Box,
  Palette,

  GitBranch,
  Container,
  Send,
  Flame,
  Cloud,
  Image
} from 'lucide-react';

export const skills = {
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

  
export const projects = [
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



 export   const experience = {
      role: 'Full-Stack Web Developer (Freelance)',
      period: 'Feb 2024 - Present',
      achievements: [
        'Developed full-featured web application for graphic designer with document editing services',
        'Built responsive data collection platform with OCR scanning and WhatsApp integration',
        'Created Task & Project Management System using Django with role-based access control'
      ]
    };



 export const certifications = [
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