import { GraduationCap, Calendar, Award } from 'lucide-react';
import type { Education } from '../types/database';

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  if (education.length === 0) return null;

  return (
    <section className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <GraduationCap className="text-emerald-400" size={40} />
            Education
          </h2>
          <p className="text-white/70 text-lg">Academic background and qualifications</p>
        </div>

        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="glass-card rounded-2xl p-6 md:p-8 backdrop-blur-xl bg-white/10 border border-white/20 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-emerald-300 text-lg font-medium mb-1">{edu.institution}</p>
                  <p className="text-white/80">{edu.field}</p>
                </div>
                <div className="flex flex-col gap-2 text-white/70">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-emerald-400" />
                    <span className="text-sm">
                      {edu.start_date} - {edu.end_date || 'Present'}
                    </span>
                  </div>
                  {edu.grade && (
                    <div className="flex items-center gap-2">
                      <Award size={16} className="text-emerald-400" />
                      <span className="text-sm">{edu.grade}</span>
                    </div>
                  )}
                </div>
              </div>
              {edu.description && (
                <p className="text-white/80 leading-relaxed">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
