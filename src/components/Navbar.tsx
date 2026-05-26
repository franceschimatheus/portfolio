import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ReadCvLogo } from '@phosphor-icons/react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm dark:bg-black/80' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tighter">
          MF<span className="text-neutral-400">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/portfolio/matheus-franceschi.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-semibold border border-neutral-300 dark:border-neutral-700 rounded-full hover:border-black dark:hover:border-white hover:scale-105 transition-all"
          >
            <ReadCvLogo className="w-3.5 h-3.5" weight="bold" />
            Resume
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
