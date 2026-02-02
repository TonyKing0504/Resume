import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Github } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Ready to generate insights?</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
            <Mail size={18} />
            <span>{CONTACT_INFO.email}</span>
          </a>
          <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
            <Phone size={18} />
            <span>{CONTACT_INFO.phone}</span>
          </a>
        </div>

        <div className="flex justify-center gap-8 mb-8 text-slate-500">
           <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{CONTACT_INFO.location}</span>
           </div>
           <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={24} /></a>
           <a href="#" className="hover:text-blue-600 transition-colors"><Github size={24} /></a>
        </div>

        <div className="text-sm text-slate-400 border-t border-slate-100 pt-8">
          <p>© {new Date().getFullYear()} Tao (Tony) Jin. Built with React, Tailwind, & GEO Optimization.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;