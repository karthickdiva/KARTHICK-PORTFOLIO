import { Heart } from 'lucide-react';
import type { Profile, SocialLink } from '../types/database';
import { SocialIcons } from './SocialIcons';

interface ContactProps {
  profile: Profile | null;
  socialLinks: SocialLink[];
}

export function Contact({ profile, socialLinks }: ContactProps) {
  return (
    <footer className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card rounded-2xl p-8 md:p-12 backdrop-blur-xl bg-white/10 border border-white/20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-white/70 text-lg mb-8">
            Interested in collaborating or learning more? Get in touch!
          </p>

          {profile?.email && (
            <a
              href={`mailto:${profile.email}`}
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 text-white font-semibold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 mb-8"
            >
              Send a Message
            </a>
          )}

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {socialLinks.map((link) => (
              <SocialIcons key={link.id} link={link} />
            ))}
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-white/60 flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-emerald-400 fill-emerald-400" /> by{' '}
              {profile?.name || 'Developer'}
            </p>
            <p className="text-white/40 text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
