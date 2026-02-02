import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { SKILL_DATA } from '../constants';

const SkillsChart: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            The Hybrid Profile
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Modern problems require a blend of hard technical skills and soft business strategy. 
            Here is how I balance my competencies.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* The Visual */}
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILL_DATA}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 12, fontWeight: 600 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Proficiency"
                    dataKey="A"
                    stroke="#2563eb"
                    strokeWidth={3}
                    fill="#3b82f6"
                    fillOpacity={0.4}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* The Details */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Tool Stack</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-slate-700">Data Engineering & Analysis</span>
                    <span className="text-blue-600 text-sm font-bold">Python, R, SQL</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div>
                   <div className="flex justify-between mb-2">
                    <span className="font-semibold text-slate-700">Visualization & BI</span>
                    <span className="text-blue-600 text-sm font-bold">Tableau, D3, Recharts</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div>
                   <div className="flex justify-between mb-2">
                    <span className="font-semibold text-slate-700">Mathematical & Systems</span>
                    <span className="text-blue-600 text-sm font-bold">Stochastic Calculus, Optimization</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="font-bold text-slate-900 mb-2">Languages</h4>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm">Chinese (Native)</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm">English (Professional)</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm">Japanese (Basic)</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsChart;