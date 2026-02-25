import React, { useState, useEffect } from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = ["Business Intelligence", "Data Storytelling", "Strategic Optimization", "Financial Modeling"];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[textIndex];
      
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        if (displayText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const resumeHref = `${import.meta.env.BASE_URL}Tao_Jin_Resume.pdf`;

  return (
    <section className="relative h-screen bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background Decor - z-0 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[100px]"></div>
      </div>

      {/* Content - z-20 to ensure it's above background */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-blue-400 font-medium tracking-widest text-sm md:text-base mb-4 uppercase">
          Systems Engineering M.Eng @ Cornell
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Hi, I'm Tao (Tony) Jin.
          <br />
          I translate data into <br />
          <span className="gradient-text h-20 inline-block min-h-[1.2em]">
            {displayText}
            <span className="animate-pulse text-white">|</span>
          </span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Bridging the gap between raw data and executive decision-making. 
          Specializing in Python automation, SQL architecture, and actionable market insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToProjects}
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25 cursor-pointer relative z-30"
          >
            View Projects
          </button>
          
          <a 
            href={resumeHref}
            download="Tao_Jin_Resume.pdf"
            className="px-8 py-3 bg-transparent border border-slate-600 text-slate-300 rounded-full font-semibold hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer relative z-30"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 z-20">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
