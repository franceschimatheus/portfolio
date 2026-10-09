import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ReadCvLogo, Sun, Moon, List, X } from '@phosphor-icons/react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 origin-left z-50 pointer-events-none"
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-xl border-b border-neutral-200/60 dark:border-neutral-800/60 shadow-sm shadow-neutral-900/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-1.5 font-bold text-xl tracking-tighter"
          >
            <span className="bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent group-hover:from-indigo-500 group-hover:to-purple-500 transition-all">
              Franceschi
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block animate-pulse" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors relative py-1 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}

            {/* Resume Button */}
            <a
              href="/portfolio/matheus-franceschi.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-semibold rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 bg-neutral-100/50 dark:bg-neutral-800/50 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all hover:scale-105"
            >
              <ReadCvLogo className="w-3.5 h-3.5" weight="bold" />
              Resume
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full border border-neutral-300/80 dark:border-neutral-700/80 bg-neutral-100/60 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:scale-110 active:scale-95 transition-all"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-4 h-4 text-amber-400" weight="bold" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-4 h-4 text-indigo-500" weight="bold" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full border border-neutral-300/80 dark:border-neutral-700/80 bg-neutral-100/60 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" weight="bold" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-500" weight="bold" />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" weight="bold" />
              ) : (
                <List className="w-6 h-6" weight="bold" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-2xl px-6 py-6 overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors py-2 border-b border-neutral-100 dark:border-neutral-800/50"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="/portfolio/matheus-franceschi.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 mt-2 text-sm font-semibold rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-black"
                >
                  <ReadCvLogo className="w-4 h-4" weight="bold" />
                  View Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
