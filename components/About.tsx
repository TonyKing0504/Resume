import React from 'react';
import { Target, TrendingUp, Brain } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Not just an Analyst. <br />
              <span className="text-blue-600">A Strategic Partner.</span>
            </h2>
            <div className="prose text-slate-600 text-lg leading-relaxed">
              <p className="mb-4">
                <strong>Bottom Line Up Front:</strong> I don't just query databases; I answer business questions. 
                With a background in Systems Engineering (Cornell) and Mathematics (UBC), I combine rigorous statistical methods with practical business logic.
              </p>
              <p className="mb-4">
                My professional track record includes reducing financial selloffs by <strong>9%</strong> during market downturns and engineering automation tools that boosted operational efficiency by <strong>8%</strong>.
              </p>
              <p>
                I am actively seeking Business Analyst or Data Analyst roles where I can leverage my full-stack data proficiency—from SQL database design to executive-level tableau dashboards—to drive tangible ROI.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Technical Precision</h3>
              <p className="text-slate-600">
                Expert in Python, R, and SQL. I build robust pipelines that ensure data integrity and reproducibility.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Commercial Awareness</h3>
              <p className="text-slate-600">
                Experience in Investment Banking & Sales. I understand KPIs, margins, and the "So What?" behind the numbers.
              </p>
            </div>

             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Systems Thinking</h3>
              <p className="text-slate-600">
                M.Eng training allows me to view businesses as interconnected systems, optimizing for global rather than local maximums.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;