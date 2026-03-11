import { Code2 } from 'lucide-react';
import type { Skill } from '../types/database';

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  if (skills.length === 0) return null;

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Code2 className="text-emerald-400" size={40} />
            Technical Skills
          </h2>
          <p className="text-white/70 text-lg">Expertise across modern technologies</p>
        </div>

        <div className="space-y-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div
              key={category}
              className="glass-card rounded-2xl p-6 md:p-8 backdrop-blur-xl bg-white/10 border border-white/20"
            >
              <h3 className="text-xl font-bold text-emerald-300 mb-6">{category}</h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-emerald-300 text-sm">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
