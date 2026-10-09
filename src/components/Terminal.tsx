import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TerminalWindow, X } from '@phosphor-icons/react';
import { useTheme } from '../context/ThemeContext';

type Command = {
  input: string;
  output: React.ReactNode;
};

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { theme, toggleTheme } = useTheme();
  const [history, setHistory] = useState<Command[]>([
    {
      input: '',
      output: (
        <div>
          <p className="text-indigo-400 font-semibold mb-1">Welcome to Franceschi-OS v2.0</p>
          <p className="text-neutral-400 text-xs">Type <span className="text-cyan-400 font-bold">help</span> to explore available commands or <span className="text-cyan-400 font-bold">theme</span> to toggle light/dark mode.</p>
        </div>
      ),
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    let output: React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-neutral-400 mb-1">Available system commands:</p>
            <div><span className="text-cyan-400 w-20 inline-block font-bold">whoami</span> - Display developer profile</div>
            <div><span className="text-cyan-400 w-20 inline-block font-bold">skills</span> - List core technical stack</div>
            <div><span className="text-cyan-400 w-20 inline-block font-bold">projects</span> - View flagship ventures</div>
            <div><span className="text-cyan-400 w-20 inline-block font-bold">theme</span> - Toggle between Dark / Light theme</div>
            <div><span className="text-cyan-400 w-20 inline-block font-bold">contact</span> - Reach out via email or phone</div>
            <div><span className="text-cyan-400 w-20 inline-block font-bold">coffee</span> - Brew digital coffee</div>
            <div><span className="text-cyan-400 w-20 inline-block font-bold">clear</span> - Clear terminal history</div>
          </div>
        );
        break;
      case 'whoami':
        output = 'Matheus Franceschi — Senior Full-Stack Engineer & Systems Architect. Specializing in React, React Native, Node.js, Golang & Scalable Systems.';
        break;
      case 'skills':
        output = 'Frontend & Mobile: React, React Native (Expo), TypeScript, Tailwind CSS\nBackend & Cloud: Node.js, Golang, PostgreSQL, GCP, Docker, Kubernetes\nArchitecture: Microservices, Low-Code Systems, WebSockets, CI/CD';
        break;
      case 'projects':
        output = '1. Momentz (momentz.app) — Founder & Architect. Mobile social platform (Expo + Go + Postgres + PIX).\n2. e-Con Bike — 1st place INOVA 2022 (IoT + ESP32 + Mobile).';
        break;
      case 'theme':
        toggleTheme();
        output = `Theme switched to: ${theme === 'dark' ? 'light' : 'dark'}`;
        break;
      case 'contact':
        output = 'Email: franceschimatheus@gmail.com | Phone: +55 (47) 99259-8001 | GitHub: franceschimatheus';
        break;
      case 'coffee':
        output = (
          <pre className="text-amber-400 font-mono text-[11px] leading-tight">
{`
      ( (
       ) )
    ........
    |      | ]
    \\      / 
     \`----'
Fresh code fuel delivered! ☕
`}
          </pre>
        );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case '':
        output = '';
        break;
      default:
        output = `Command not recognized: "${cmd}". Type "help" to see available commands.`;
    }

    setHistory((prev) => [...prev, { input: cmd, output }]);
    setInput('');
  };

  return (
    <>
      {/* Floating launcher trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 p-3.5 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        title="Open interactive terminal"
        aria-label="Open terminal"
      >
        <TerminalWindow weight="bold" className="w-5 h-5" />
        <span className="absolute left-14 bg-neutral-900 dark:bg-white text-white dark:text-black px-3 py-1.5 rounded-xl text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-neutral-700 pointer-events-none">
          Franceschi-OS Terminal
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-50 w-[440px] max-w-[calc(100vw-48px)] bg-[#121217]/95 backdrop-blur-2xl border border-neutral-700/80 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs text-neutral-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#181820] border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="text-[11px] font-semibold text-neutral-400 ml-2">visitor@franceschi:~</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-neutral-800 rounded text-neutral-400 hover:text-white transition-colors"
                aria-label="Close terminal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Window Content */}
            <div className="p-4 h-[320px] overflow-y-auto space-y-3">
              {history.map((cmd, i) => (
                <div key={i} className="space-y-1">
                  {cmd.input !== '' && (
                    <div className="flex items-center gap-1.5 text-neutral-400 text-xs">
                      <span className="text-emerald-400">visitor@franceschi</span>
                      <span className="text-indigo-400">:~</span>
                      <span className="text-neutral-500">$</span>
                      <span className="text-white font-medium">{cmd.input}</span>
                    </div>
                  )}
                  {cmd.output && (
                    <div className="text-neutral-200 whitespace-pre-wrap pl-2 border-l border-neutral-800">
                      {cmd.output}
                    </div>
                  )}
                </div>
              ))}

              <form onSubmit={handleCommand} className="flex items-center gap-1.5 pt-1">
                <span className="text-emerald-400 text-xs">visitor@franceschi</span>
                <span className="text-indigo-400">:~</span>
                <span className="text-neutral-500">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-white placeholder-neutral-600 text-xs"
                  spellCheck={false}
                  autoComplete="off"
                  placeholder="type help..."
                />
              </form>
              <div ref={endRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
