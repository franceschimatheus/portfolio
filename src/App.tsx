import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Terminal } from './components/Terminal';
import { GithubLogo, LinkedinLogo, Heart } from '@phosphor-icons/react';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 selection:bg-indigo-500 selection:text-white">
        {/* Subtle Ambient Background Mesh */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-[40%] right-10 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <Navbar />
        <Terminal />
        
        <main className="relative z-10">
          <Hero />
          <Stats />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>

        <footer className="relative z-10 py-12 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight text-neutral-900 dark:text-neutral-100">Franceschi<span className="text-indigo-500">.</span></span>
              <span>© {new Date().getFullYear()} Matheus Franceschi. Built with passion & precision.</span>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <span className="inline-flex items-center gap-1 text-neutral-400 dark:text-neutral-500">
                Crafted with <Heart weight="fill" className="w-3.5 h-3.5 text-rose-500 inline animate-pulse" /> & TypeScript
              </span>
              <div className="flex items-center gap-3 ml-2">
                <a
                  href="https://github.com/franceschimatheus"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <GithubLogo weight="bold" className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/franceschi-matheus"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#0A66C2] transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogo weight="bold" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
