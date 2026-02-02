import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white scroll-mt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-slate-600">
            Delivering impact in Investment Banking and Institutional Sales.
          </p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {EXPERIENCE_DATA.map((job, index) => (
            <div key={job.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Timeline Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-blue-600">
                <Briefcase size={18} />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">{job.role}</h3>
                    <h4 className="text-blue-600 font-medium">{job.company}</h4>
                  </div>
                  <div className="mt-2 sm:mt-0 text-xs text-slate-500 flex flex-col items-start sm:items-end">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {job.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-slate-600 text-sm leading-relaxed">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                      {achievement}
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

export default Experience;