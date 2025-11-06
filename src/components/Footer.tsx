import { motion } from 'framer-motion';
import { Instagram, Linkedin, Github, Globe, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/ai_club_iist', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/groups/15780087', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Globe, href: 'https://indoreinstitute.com/', label: 'College Website' },
  ];

  return (
    <footer className="py-12 border-t border-border bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent"
          >
            AI Essentials Week
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all hover:shadow-glow group"
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-primary transition-colors"
            >
              Schedule
            </button>
            <button
              onClick={() => document.getElementById('speakers')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-primary transition-colors"
            >
              Speakers
            </button>
            <button
              onClick={() => document.getElementById('venue')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-primary transition-colors"
            >
              Venue
            </button>
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center space-y-2"
          >
            <p className="text-sm text-muted-foreground">
              © 2025 AI Essentials Week. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Designed with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by AI Essentials Team
            </p>
            <p className="text-xs text-muted-foreground">
              Indore Institute of Science and Technology, Indore (M.P.)
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
