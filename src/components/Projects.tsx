import { Briefcase, ExternalLink, Github } from 'lucide-react';
import type { Project } from '../types/database';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Briefcase className="text-emerald-400" size={40} />
            Featured Projects
          </h2>
          <p className="text-white/70 text-lg">Showcasing real-world applications and innovations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 group"
            >
              {project.image_url && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/80 leading-relaxed mb-4 text-sm">{project.description}</p>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs border border-emerald-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-3">
                  {project.project_url && (
                    <a
                      href={project.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-sm border border-emerald-400/30 transition-all duration-300"
                    >
                      <ExternalLink size={14} />
                      <span>View</span>
                    </a>
                  )}
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm border border-white/20 transition-all duration-300"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
