import { Mail, MapPin, Phone } from 'lucide-react';
import type { Profile, SocialLink } from '../types/database';
import { SocialIcons } from './SocialIcons';

interface HeroProps {
  profile: Profile | null;
  socialLinks: SocialLink[];
}

export function Hero({ profile, socialLinks }: HeroProps) {
  if (!profile) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <div className="glass-card rounded-3xl p-8 md:p-12 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-emerald-400/30 shadow-2xl">
                <img
                  src={profile.avatar_url || ''}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                {profile.name}
              </h1>
              <p className="text-xl md:text-2xl text-emerald-300 mb-6 font-light">
                {profile.title}
              </p>
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8">
                {profile.bio}
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6 text-white/80">
                {profile.email && (
                  <div className="flex items-center gap-2">
                    <Mail size={18} className="text-emerald-400" />
                    <span className="text-sm">{profile.email}</span>
                  </div>
                )}
                {profile.phone && (
                  <div className="flex items-center gap-2">
                    <Phone size={18} className="text-emerald-400" />
                    <span className="text-sm">{profile.phone}</span>
                  </div>
                )}
                {profile.location && (
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-emerald-400" />
                    <span className="text-sm">{profile.location}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {socialLinks.map((link) => (
                  <SocialIcons key={link.id} link={link} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
