import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowDown, GithubLogo, LinkedinLogo, ReadCvLogo, Check, Copy, Sparkle } from '@phosphor-icons/react';
import confetti from 'canvas-confetti';

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [copied, setCopied] = useState(false);

  const springConfig = { damping: 40, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleCopyCode = () => {
    const code = `const developer = {
  name: 'Matheus Franceschi',
  role: 'Senior Full-Stack Engineer',
  specialties: ['React Native', 'React', 'Node.js', 'Golang'],
  status: 'Ready to build scalable, high-impact systems'
};`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Interactive Background Fluid Gradient Orb */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="pointer-events-none absolute left-1/2 top-1/2 w-[650px] h-[650px] -ml-[325px] -mt-[325px] rounded-full opacity-25 dark:opacity-20 blur-[120px] mix-blend-multiply dark:mix-blend-screen"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 animate-[spin_12s_linear_infinite]" />
      </motion.div>

      {/* Grid mask overlay for texture */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto w-full z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text (7 cols) */}
        <div className="lg:col-span-7 text-left flex flex-col items-start">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-100/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-800 text-xs sm:text-sm font-medium mb-8 shadow-sm group hover:border-indigo-500/50 transition-colors"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-neutral-700 dark:text-neutral-300">Available for new opportunities</span>
            <Sparkle weight="fill" className="w-3.5 h-3.5 text-indigo-500 opacity-80" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.08]"
          >
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500 dark:from-white dark:via-neutral-200 dark:to-neutral-500">
              Matheus
            </span>
            <span
              className="text-indigo-500 cursor-pointer inline-block hover:scale-125 transition-transform ml-1 select-none"
              onClick={() => {
                confetti({
                  particleCount: 80,
                  spread: 60,
                  origin: { y: 0.6 },
                  colors: ['#6366f1', '#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'],
                });
              }}
              title="Click for celebratory confetti!"
            >
              .
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl leading-relaxed"
          >
            <span className="font-semibold text-neutral-900 dark:text-neutral-200">
              Senior Full-Stack & Mobile Engineer
            </span>{' '}
            specializing in <span className="text-indigo-600 dark:text-indigo-400 font-medium">React</span>,{' '}
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">React Native</span>, and{' '}
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">Node.js</span>. I architect high-scale
            enterprise platforms and mobile apps that deliver measurable business results.
          </motion.p>

          {/* CTA & Social Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="px-7 py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold rounded-full hover:scale-105 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-md shadow-neutral-900/10 dark:shadow-white/10"
            >
              Get in touch
            </a>

            <a
              href="/portfolio/matheus-franceschi.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-neutral-300 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm font-semibold rounded-full hover:scale-105 hover:border-neutral-900 dark:hover:border-neutral-200 transition-all shadow-sm"
            >
              <ReadCvLogo className="w-4 h-4" weight="bold" />
              Resume
            </a>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/franceschimatheus"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-3.5 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-full hover:scale-110 hover:border-black dark:hover:border-white transition-all shadow-sm group"
              >
                <GithubLogo weight="fill" className="w-5 h-5 text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/franceschi-matheus"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3.5 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-full hover:scale-110 hover:border-[#0A66C2] transition-all shadow-sm group"
              >
                <LinkedinLogo weight="fill" className="w-5 h-5 text-neutral-700 dark:text-neutral-300 group-hover:text-[#0A66C2]" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Code Window / Bento Showcase (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 1 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
          className="lg:col-span-5 relative"
        >
          {/* Ambient Glow behind code editor */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500/20 via-indigo-500/30 to-purple-500/20 rounded-3xl blur-xl opacity-70 pointer-events-none" />

          {/* IDE Container */}
          <div className="relative bg-[#16161e] text-neutral-200 rounded-2xl border border-neutral-700/60 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#121217] border-b border-neutral-800/80">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
              </div>

              <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-neutral-900/80 text-neutral-400 text-xs border border-neutral-800">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                developer.ts
              </div>

              {/* Copy Code Button */}
              <button
                onClick={handleCopyCode}
                className="p-1 rounded text-neutral-400 hover:text-white transition-colors"
                title="Copy snippet"
                aria-label="Copy snippet"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Code Body with Line Numbers */}
            <div className="p-5 overflow-x-auto text-left leading-relaxed">
              <div className="grid grid-cols-[auto_1fr] gap-4">
                {/* Line Numbers */}
                <div className="text-neutral-600 select-none text-right font-mono text-xs sm:text-sm flex flex-col space-y-0.5">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                  <span>11</span>
                  <span>12</span>
                </div>

                {/* Code syntax */}
                <pre className="!m-0 text-xs sm:text-[13px] font-mono">
                  <code>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-amber-300">developer</span>{' '}
                    <span className="text-cyan-400">=</span> {'{\n'}
                    {'  '}name: <span className="text-emerald-400">'Matheus Franceschi'</span>,{'\n'}
                    {'  '}role: <span className="text-emerald-400">'Senior Full-Stack Engineer'</span>,{'\n'}
                    {'  '}experience: <span className="text-amber-400">'4+ years'</span>,{'\n'}
                    {'  '}coreStack: [{'\n'}
                    {'    '}<span className="text-emerald-400">'React Native'</span>,{' '}
                    <span className="text-emerald-400">'React'</span>,{'\n'}
                    {'    '}<span className="text-emerald-400">'Node.js'</span>,{' '}
                    <span className="text-emerald-400">'Golang'</span>,{' '}
                    <span className="text-emerald-400">'Postgres'</span>{'\n'}
                    {'  '}],{'\n'}
                    {'  '}openToRoles: <span className="text-amber-400">true</span>,{'\n'}
                    {'  '}buildQuality: <span className="text-emerald-400">'Production-grade'</span>{'\n'}
                    {'};'}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Floating Badge 1: TypeScript Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute -right-4 -bottom-5 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl p-3.5 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 bg-[#3178C6]/15 rounded-xl flex items-center justify-center text-[#3178C6] font-bold text-base">
              TS
            </div>
            <div>
              <div className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-neutral-100">TypeScript</div>
              <div className="text-[11px] text-neutral-500">Core Ecosystem</div>
            </div>
          </motion.div>

          {/* Floating Badge 2: React Native / Mobile */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute -left-4 -top-5 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl px-3.5 py-2.5 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 hidden sm:flex items-center gap-2.5 z-20"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <div className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
              Mobile & Web Specialist
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
      >
        <a href="#stats" aria-label="Scroll down" className="animate-bounce p-2">
          <ArrowDown className="w-5 h-5 text-neutral-400 hover:text-indigo-500 transition-colors" />
        </a>
      </motion.div>
    </section>
  );
}
