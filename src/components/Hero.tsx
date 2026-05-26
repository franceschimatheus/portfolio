import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowDown, GithubLogo, LinkedinLogo, ReadCvLogo } from '@phosphor-icons/react';
import confetti from 'canvas-confetti';

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Center the coordinate system on the screen
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-white dark:bg-[#0a0a0a]">
      {/* Interactive Background Gradient Orb */}
      <motion.div
          style={{ x: smoothX, y: smoothY }}
          className="pointer-events-none absolute left-1/2 top-1/2 w-[600px] h-[600px] -ml-[300px] -mt-[300px] rounded-full opacity-30 dark:opacity-20 blur-[100px] mix-blend-multiply dark:mix-blend-screen"
        >
          {/* We use a complex animated gradient to make it look like a fluid blob */}
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-400 via-indigo-500 to-purple-500 animate-[spin_10s_linear_infinite]" />
        </motion.div>
      
      {/* Noise texture overlay for premium feel */}
      <div className="absolute inset-0 z-0 opacity-[0.015] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <div className="max-w-7xl mx-auto w-full z-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Column: Text */}
        <div className="text-left flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Hi, I'm <br className="hidden md:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-500 dark:from-neutral-200 dark:to-neutral-500">Matheus</span><span 
              className="text-neutral-500 dark:text-neutral-400 cursor-crosshair hover:text-indigo-500 transition-colors inline-block hover:scale-125"
              onClick={() => {
                confetti({
                  particleCount: 100,
                  spread: 70,
                  origin: { y: 0.6 },
                  colors: ['#61DAFB', '#339933', '#4169E1', '#3776AB', '#aa3bff']
                });
              }}
              title="Click me for a surprise!"
            >.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-lg leading-relaxed"
          >
            Senior Full-Stack & Mobile Engineer specializing in React, React Native, and Node.js.
            I build enterprise platforms and scalable systems that deliver measurable business value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-3.5 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:scale-105 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              Get in touch
            </a>
            <a
              href="/portfolio/matheus-franceschi.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-neutral-300 dark:border-neutral-700 font-semibold rounded-full hover:scale-105 hover:border-black dark:hover:border-white transition-all"
            >
              <ReadCvLogo className="w-4 h-4" weight="bold" />
              Resume
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/franceschimatheus"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 rounded-full hover:scale-110 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all group"
              >
                <GithubLogo weight="fill" className="w-5 h-5 group-hover:text-black dark:group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/matheus-franceschi-88ab841a1"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 rounded-full hover:scale-110 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all group"
              >
                <LinkedinLogo weight="fill" className="w-5 h-5 group-hover:text-[#0A66C2] dark:group-hover:text-[#0A66C2]" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Code Window */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          className="hidden lg:block relative"
        >
          {/* Decorative blur behind code window */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 dark:opacity-40 animate-pulse" />
          
          <div className="relative bg-[#1e1e1e] rounded-2xl border border-neutral-700/50 shadow-2xl overflow-hidden font-mono text-sm leading-relaxed select-text">
            {/* Window Header */}
            <div className="flex items-center px-4 py-3 bg-[#2d2d2d] border-b border-neutral-700/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="mx-auto text-neutral-400 text-xs font-medium">developer.ts</div>
            </div>
            
            {/* Code Content */}
            <div className="p-6 overflow-x-auto text-neutral-300">
              <pre className="!m-0 text-[13px] sm:text-sm">
                <span className="text-[#c678dd]">const</span> <span className="text-[#e5c07b]">developer</span> <span className="text-[#56b6c2]">=</span> {'{\n'}
                {'  '}name: <span className="text-[#98c379]">'Matheus Franceschi'</span>,{'\n'}
                {'  '}role: <span className="text-[#98c379]">'Senior Software Analyst'</span>,{'\n'}
                {'  '}focus: [{'\n'}
                {'    '}<span className="text-[#98c379]">'Mobile Apps'</span>,{'\n'}
                {'    '}<span className="text-[#98c379]">'Web Platforms'</span>,{'\n'}
                {'    '}<span className="text-[#98c379]">'APIs'</span>{'\n'}
                {'  '}],{'\n'}
                {'  '}location: <span className="text-[#98c379]">'Brazil (GMT-3)'</span>,{'\n'}
                {'  '}passions: [{'\n'}
                {'    '}<span className="text-[#98c379]">'Clean Architecture'</span>,{'\n'}
                {'    '}<span className="text-[#98c379]">'Seamless UX'</span>{'\n'}
                {'  '}],{'\n'}
                {'  '}availableForHire: <span className="text-[#d19a66]">true</span>{'\n'}
                {'};'}
              </pre>
            </div>
          </div>
          
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-6 -bottom-6 bg-white dark:bg-neutral-900 p-4 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 flex items-center gap-4 z-20"
          >
            <div className="w-12 h-12 bg-[#3178C6]/10 rounded-full flex items-center justify-center text-[#3178C6] font-bold text-xl">
              TS
            </div>
            <div>
              <div className="font-bold text-sm">TypeScript</div>
              <div className="text-xs text-neutral-500">Main Language</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-neutral-400" />
      </motion.div>
    </section>
  );
}
