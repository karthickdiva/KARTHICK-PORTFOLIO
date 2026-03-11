import { Github, Linkedin, Twitter, Youtube, Mail, Globe } from 'lucide-react';
import type { SocialLink } from '../types/database';

interface SocialIconsProps {
  link: SocialLink;
}

const iconMap: Record<string, typeof Github> = {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  Globe,
};

export function SocialIcons({ link }: SocialIconsProps) {
  const Icon = iconMap[link.icon] || Globe;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-button p-3 rounded-xl bg-white/10 hover:bg-emerald-500/30 border border-white/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-110"
      aria-label={link.platform}
    >
      <Icon size={20} className="text-white" />
    </a>
  );
}
