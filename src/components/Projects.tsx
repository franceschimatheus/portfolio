import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkle, Trophy, DeviceMobile, Rocket, UsersThree, CurrencyDollar } from '@phosphor-icons/react';
import { SiReact, SiGo, SiPostgresql, SiExpo } from 'react-icons/si';

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
            <Sparkle weight="fill" className="w-3 h-3" />
            03 // VENTURES & LEADERSHIP
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Featured Projects</h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400 mt-2 max-w-xl">
            Real products built from the ground up — taking systems from initial architecture to active end-users.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Hero Card: Momentz (12 cols or 8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-12 group relative rounded-3xl p-[1px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-xl overflow-hidden"
          >
            <div className="relative p-8 md:p-12 rounded-[23px] bg-white dark:bg-neutral-900/95 backdrop-blur-2xl flex flex-col justify-between h-full">
              {/* Top metadata row */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold text-xs border border-indigo-200/60 dark:border-indigo-800/60 uppercase tracking-wider">
                      <Rocket weight="bold" className="w-3.5 h-3.5" />
                      Featured Startup
                    </span>
                    <span className="text-xs font-mono text-neutral-500">2024 - Present</span>
                    <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Live in Production
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-2 text-neutral-900 dark:text-neutral-100">
                    Momentz
                  </h3>
                  <div className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                    Founder & Lead Systems Architect
                  </div>
                </div>

                <a
                  href="https://momentz.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-bold text-sm hover:scale-105 transition-transform shadow-md self-start group/btn"
                >
                  Visit momentz.app
                  <ArrowUpRight weight="bold" className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Pitch */}
              <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mb-8 leading-relaxed">
                A hyper-local social platform engineered with <strong className="text-neutral-900 dark:text-white">React Native (Expo)</strong> and a high-performance <strong className="text-neutral-900 dark:text-white">Golang</strong> backend. Connects users in real-time through geolocation discovery, instant messaging, and community-driven interactions.
              </p>

              {/* Traction & Highlights Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60">
                  <div className="flex items-center gap-2 text-indigo-500 mb-1">
                    <UsersThree weight="bold" className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">User Traction</span>
                  </div>
                  <div className="text-2xl font-black text-neutral-900 dark:text-neutral-100">300+ MAU</div>
                  <div className="text-xs text-neutral-500">Achieved during initial release</div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60">
                  <div className="flex items-center gap-2 text-emerald-500 mb-1">
                    <CurrencyDollar weight="bold" className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Fintech Integration</span>
                  </div>
                  <div className="text-2xl font-black text-neutral-900 dark:text-neutral-100">PIX Split</div>
                  <div className="text-xs text-neutral-500">Automated payouts for creators</div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60">
                  <div className="flex items-center gap-2 text-purple-500 mb-1">
                    <DeviceMobile weight="bold" className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Cross-Platform</span>
                  </div>
                  <div className="text-2xl font-black text-neutral-900 dark:text-neutral-100">iOS & Android</div>
                  <div className="text-xs text-neutral-500">Built with Expo & WebSockets</div>
                </div>
              </div>

              {/* Detailed Responsibilities */}
              <div className="grid md:grid-cols-2 gap-4 mb-8 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <span>Solo technical leadership: designed end-to-end cloud infrastructure on Oracle Cloud with Docker.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <span>Real-time communication architecture using WebSockets for sub-100ms message delivery.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <span>Authentication integrated via Clerk and product telemetry powered by PostHog.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <span>PostgreSQL schema optimized for geo-queries (PostGIS) and fast spatial discovery.</span>
                </div>
              </div>

              {/* Technologies row */}
              <div className="pt-6 border-t border-neutral-200/70 dark:border-neutral-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 mr-2">Stack:</span>
                {[
                  { name: 'React Native', icon: SiReact, color: 'text-[#61DAFB]' },
                  { name: 'Expo', icon: SiExpo, color: 'text-neutral-800 dark:text-white' },
                  { name: 'Golang', icon: SiGo, color: 'text-[#00ADD8]' },
                  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#4169E1]' },
                  { name: 'WebSockets', icon: null, color: '' },
                  { name: 'Oracle Cloud', icon: null, color: '' },
                  { name: 'Clerk Auth', icon: null, color: '' },
                  { name: 'PostHog Analytics', icon: null, color: '' },
                ].map((t) => (
                  <span
                    key={t.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60"
                  >
                    {t.icon && <t.icon className={`w-3.5 h-3.5 ${t.color}`} />}
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Secondary Card: e-Con Bike (12 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-12 p-8 md:p-10 rounded-3xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm hover:shadow-lg transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs border border-amber-500/20">
                    <Trophy weight="fill" className="w-3.5 h-3.5 text-amber-500" />
                    1st Place National INOVA (2022)
                  </span>
                  <span className="text-xs font-mono text-neutral-500">2020 - 2022</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                  e-Con Bike
                </h3>
                <div className="text-neutral-600 dark:text-neutral-400 font-medium">
                  CTO & Co-Founder
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {['ESP32 Microcontroller', 'IoT Telemetry', 'Mobile Application', 'Embedded Systems'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl mb-6">
              Directed engineering of a connected mobility hardware/software solution integrating ESP32 microcontrollers with cloud telemetry and mobile client applications. Won 1st place in the national INOVA innovation competition for technical execution and market viability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
