import { BookOpen, Clock, TrendingUp } from 'lucide-react';
import type { Course } from '../types/database';

interface CoursesProps {
  courses: Course[];
}

export function Courses({ courses }: CoursesProps) {
  if (courses.length === 0) return null;

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <BookOpen className="text-emerald-400" size={40} />
            Featured Courses
          </h2>
          <p className="text-white/70 text-lg">Comprehensive learning experiences designed for your success</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="glass-card rounded-2xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 group"
            >
              {course.thumbnail_url && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={course.thumbnail_url}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-white flex-1">{course.title}</h3>
                  {course.level && (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-400/30">
                      {course.level}
                    </span>
                  )}
                </div>

                <p className="text-white/80 leading-relaxed mb-4">{course.description}</p>

                {course.duration && (
                  <div className="flex items-center gap-2 text-white/70 mb-4">
                    <Clock size={16} className="text-emerald-400" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                )}

                {course.topics && course.topics.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 text-white/70 mb-3">
                      <TrendingUp size={16} className="text-emerald-400" />
                      <span className="text-sm font-medium">Topics Covered:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-lg bg-white/5 text-white/80 text-sm border border-white/10"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
