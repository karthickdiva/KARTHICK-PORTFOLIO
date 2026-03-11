import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';
import type { Profile, Education, Course, Skill, Project, SocialLink } from './types/database';
import { Hero } from './components/Hero';
import { EducationSection } from './components/Education';
import { Courses } from './components/Courses';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Loading } from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [education, setEducation] = useState<Education[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [
          profileData,
          educationData,
          coursesData,
          skillsData,
          projectsData,
          socialData,
        ] = await Promise.all([
          supabase.from('profile').select('*').maybeSingle(),
          supabase.from('education').select('*').order('order_index'),
          supabase.from('courses').select('*').order('order_index'),
          supabase.from('skills').select('*').order('order_index'),
          supabase.from('projects').select('*').order('order_index'),
          supabase.from('social_links').select('*').order('order_index'),
        ]);

        if (profileData.data) setProfile(profileData.data);
        if (educationData.data) setEducation(educationData.data);
        if (coursesData.data) setCourses(coursesData.data);
        if (skillsData.data) setSkills(skillsData.data);
        if (projectsData.data) setProjects(projectsData.data);
        if (socialData.data) setSocialLinks(socialData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10">
        <Hero profile={profile} socialLinks={socialLinks} />
        <EducationSection education={education} />
        <Courses courses={courses} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact profile={profile} socialLinks={socialLinks} />
      </div>
    </div>
  );
}

export default App;
