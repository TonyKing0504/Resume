import React from 'react';
import { ExternalLink, Code, Database, TrendingUp } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900 text-white scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Projects</h2>
            <p className="text-slate-400">Technical implementation meets business use-case.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div key={project.id} className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-750 transition-colors border border-slate-700 hover:border-blue-500 group">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-blue-900/30 p-3 rounded-lg text-blue-400">
                  {project.id === 'food-delivery' ? <Database size={24} /> : <TrendingUp size={24} />}
                </div>
                {/* <ExternalLink className="text-slate-500 hover:text-white cursor-pointer" size={20} /> */}
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{project.role}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-slate-700 rounded-full text-xs font-medium text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Results (STAR)</h4>
                <ul className="space-y-2">
                  {project.metrics.map((metric, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-200">
                       <span className="mr-2 mt-1 text-green-400">✓</span>
                       {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;