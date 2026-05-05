import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Terminal } from './components/Terminal';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Terminal />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-neutral-500 border-t border-neutral-100 dark:border-neutral-800 flex flex-col gap-2">
        <p>© {new Date().getFullYear()} Matheus Franceschi. All rights reserved.</p>
        <p className="text-xs text-neutral-400 dark:text-neutral-600 opacity-50 hover:opacity-100 transition-opacity">(No bugs were harmed in the making of this site)</p>
      </footer>
    </div>
  );
}

export default App;
