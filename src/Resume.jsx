
import Header from './components/Header';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import {Skills} from './components/Skills.jsx';
import Certifications from './components/Certifications.jsx';
import Footer from './components/Footer.jsx';
import Blog from './components/Blog.jsx';
const Resume = () => {





  return (
    <div className="min-h-screen text-white font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header - Unique Design with Black Background */}
        <Header/>

        <div className="px-4 sm:px-8 lg:px-12 py-8">
          {/* Education & Core Expertise */}
         <Education/>
        <Experience/>
        

          {/* Projects */}
          <Projects/>
          
          {/* Skills & Certifications */}
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Technical Skills */}
            
            <Skills/>

            {/* Certifications */}
            <Certifications/>

          
           
          </div>
            <Blog/>
        </div>

        {/* Footer */}
      <Footer/>
      </div>
    </div>
  );
};

export default Resume;