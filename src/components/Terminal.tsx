import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TerminalWindow, X } from '@phosphor-icons/react';

type Command = {
  input: string;
  output: React.ReactNode;
};

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([
    { input: '', output: 'Welcome to MF-OS v1.0.0. Type "help" to see available commands.' }
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
          <ul className="pl-4">
            <li><span className="text-blue-400">help</span>   - Show this message</li>
            <li><span className="text-blue-400">whoami</span> - Display current user info</li>
            <li><span className="text-blue-400">skills</span> - List core technologies</li>
            <li><span className="text-blue-400">coffee</span> - Brew a digital cup</li>
            <li><span className="text-blue-400">clear</span>  - Clear the terminal</li>
          </ul>
        );
        break;
      case 'whoami':
        output = 'Matheus Franceschi - Senior Software Analyst. Builder of seamless user experiences.';
        break;
      case 'skills':
        output = 'React, React Native, Node.js, PostgreSQL, Python, Golang, CI/CD, StackOverflow Copy-Pasting';
        break;
      case 'coffee':
        output = (
          <pre className="text-amber-500 font-mono text-xs">
{`
      ( (
       ) )
    ........
    |      | ]
    \\      / 
     \`----'
Brewing... 100%
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
        output = `Command not found: ${cmd}. Type "help" for available commands.`;
    }

    setHistory((prev) => [...prev, { input: cmd, output }]);
    setInput('');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 p-4 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
        title="Open Terminal"
      >
        <TerminalWindow weight="bold" className="w-6 h-6" />
        <span className="absolute left-16 bg-neutral-900 dark:bg-white text-white dark:text-black px-3 py-1.5 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Open Terminal
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-50 w-[400px] max-w-[calc(100vw-48px)] bg-neutral-900/95 backdrop-blur-xl border border-neutral-700 rounded-xl shadow-2xl overflow-hidden font-mono text-sm text-neutral-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-950/50 border-b border-neutral-700">
              <div className="flex items-center gap-2">
                <TerminalWindow className="w-4 h-4 text-neutral-400" />
                <span className="font-semibold text-neutral-400">mf-os ~ /portfolio</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-neutral-800 rounded transition-colors text-neutral-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-700">
              {history.map((cmd, i) => (
                <div key={i} className="mb-3">
                  {cmd.input !== '' && (
                    <div className="flex gap-2 text-neutral-400">
                      <span className="text-green-400">visitor@mf</span>:<span className="text-blue-400">~</span>$ {cmd.input}
                    </div>
                  )}
                  {cmd.output && <div className="mt-1 text-neutral-200">{cmd.output}</div>}
                </div>
              ))}
              
              <form onSubmit={handleCommand} className="flex gap-2 mt-2">
                <span className="text-green-400">visitor@mf</span>:<span className="text-blue-400">~</span>$
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-white placeholder-neutral-600"
                  spellCheck={false}
                  autoComplete="off"
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
