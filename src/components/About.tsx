import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNodedotjs, 
  SiPostgresql, 
  SiPython, 
  SiGo, 
  SiGooglecloud, 
  SiDocker, 
  SiKubernetes, 
  SiTypescript, 
  SiTailwindcss,
  SiStackoverflow,
  SiNextdotjs,
  SiRedis,
  SiMongodb,
  SiTerraform,
  SiExpo
} from 'react-icons/si';
import { 
  FaServer, 
  FaCubes, 
  FaPlug, 
  FaUsersGear, 
  FaInfinity, 
  FaGlobe,
  FaCheck
} from 'react-icons/fa6';
import { Sparkle, Code, Database, Cpu, Cloud } from '@phosphor-icons/react';

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend & Mobile',
    icon: Code,
    skills: [
      { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
      { name: 'React Native', icon: SiReact, color: 'text-[#61DAFB]' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-neutral-900 dark:text-white' },
      { name: 'Expo', icon: SiExpo, color: 'text-neutral-900 dark:text-white' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
      { name: 'i18n', icon: FaGlobe, color: 'text-indigo-400' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    icon: Database,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
      { name: 'Golang', icon: SiGo, color: 'text-[#00ADD8]' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#4169E1]' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]' },
      { name: 'Redis', icon: SiRedis, color: 'text-[#FF4438]' },
      { name: 'Python', icon: SiPython, color: 'text-[#3776AB]' },
      { name: 'WebSockets', icon: FaPlug, color: 'text-amber-400' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'GCP', icon: SiGooglecloud, color: 'text-[#4285F4]' },
      { name: 'Docker', icon: SiDocker, color: 'text-[#2496ED]' },
      { name: 'Kubernetes', icon: SiKubernetes, color: 'text-[#326CE5]' },
      { name: 'Terraform', icon: SiTerraform, color: 'text-[#844FBA]' },
      { name: 'CI/CD Pipelines', icon: FaInfinity, color: 'text-emerald-400' },
    ],
  },
  {
    id: 'architecture',
    label: 'Architecture & Leadership',
    icon: Cpu,
    skills: [
      { name: 'Distributed Systems', icon: FaServer, color: 'text-purple-400' },
      { name: 'Microservices', icon: FaCubes, color: 'text-pink-400' },
      { name: 'Multi-tenant Systems', icon: FaServer, color: 'text-blue-400' },
      { name: 'Code Mentorship & Reviews', icon: FaUsersGear, color: 'text-cyan-400' },
      { name: 'StackOverflow Mastery', icon: SiStackoverflow, color: 'text-[#F58025]' },
    ],
  },
];

export function About() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter((c) => c.id === activeTab);

  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
            <Sparkle weight="fill" className="w-3 h-3" />
            01 // PROFILE & EXPERTISE
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Bio Card (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 p-8 rounded-3xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm"
          >
            <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
              Engineering with Architecture & Business Purpose
            </h3>

            <p className="text-base text-neutral-600 dark:text-neutral-400 mb-5 leading-relaxed">
              I am a <strong className="text-neutral-900 dark:text-neutral-200">Full-Stack and Mobile Engineer</strong> with over 4 years of experience architecting enterprise platforms, high-throughput APIs, and responsive mobile apps.
            </p>

            <p className="text-base text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              My core background ranges from industrial automation and IoT telemetry at <strong className="text-neutral-900 dark:text-neutral-200">WEG</strong> to unifying complex sales workflows and multi-system consolidations at <strong className="text-neutral-900 dark:text-neutral-200">Grupo Malwee</strong>, alongside founding and engineering the <strong className="text-neutral-900 dark:text-neutral-200">Momentz</strong> mobile ecosystem.
            </p>

            <div className="space-y-3 pt-4 border-t border-neutral-200/70 dark:border-neutral-800/70">
              <div className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                <span className="p-1 rounded-full bg-emerald-500/10 text-emerald-500 mt-0.5">
                  <FaCheck className="w-2.5 h-2.5" />
                </span>
                <span>Focus on clean, maintainable architecture & automated testing</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                <span className="p-1 rounded-full bg-emerald-500/10 text-emerald-500 mt-0.5">
                  <FaCheck className="w-2.5 h-2.5" />
                </span>
                <span>Bridging business requirements with developer ergonomics</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                <span className="p-1 rounded-full bg-emerald-500/10 text-emerald-500 mt-0.5">
                  <FaCheck className="w-2.5 h-2.5" />
                </span>
                <span>Passionate about seamless UI micro-interactions & DX</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Categorized Core Stack (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-200/60 dark:border-neutral-800/60">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                  activeTab === 'all'
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200'
                }`}
              >
                All Tech
              </button>
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                    activeTab === cat.id
                      ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                      : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Rendered Categories */}
            <div className="flex flex-col gap-5">
              {filteredCategories.map((category) => {
                const CatIcon = category.icon;
                return (
                  <div
                    key={category.id}
                    className="p-6 rounded-3xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      <CatIcon className="w-4 h-4 text-indigo-500" />
                      {category.label}
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200/60 dark:border-neutral-700/60 text-xs sm:text-sm font-medium hover:border-indigo-500/50 hover:scale-105 transition-all shadow-sm cursor-default group"
                        >
                          <skill.icon className={`w-4 h-4 ${skill.color} group-hover:scale-110 transition-transform`} />
                          <span className="text-neutral-700 dark:text-neutral-300 font-semibold">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
