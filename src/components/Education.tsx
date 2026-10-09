import { motion } from 'framer-motion';
import { GraduationCap, Brain, Gear, Cpu, Sparkle } from '@phosphor-icons/react';

const education = [
  {
    institution: 'PUC Minas',
    degree: 'Postgraduate Degree in Artificial Intelligence and Machine Learning',
    period: '2025',
    location: 'Remote',
    icon: Brain,
    type: 'Specialization',
    highlight: 'Advanced Deep Learning, Neural Architectures & NLP',
  },
  {
    institution: 'UniSENAI',
    degree: 'Bachelor in Control and Automation Engineering',
    period: '2018 - 2022',
    location: 'Jaraguá do Sul, SC, Brazil',
    icon: Gear,
    type: 'Bachelor Degree',
    highlight: 'Systems Control, Industrial Software, Embedded Computing & Mathematics',
  },
  {
    institution: 'SENAI-CentroWEG',
    degree: 'Technical Degree in Electronics',
    period: '2018 - 2020',
    location: 'Jaraguá do Sul, SC, Brazil',
    icon: Cpu,
    type: 'Technical Diploma',
    highlight: 'Microcontrollers, Circuit Design & Industrial Instrumentation',
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
            <Sparkle weight="fill" className="w-3 h-3" />
            04 // ACADEMIC BACKGROUND
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight flex items-center gap-3">
            <GraduationCap weight="duotone" className="w-9 h-9 text-indigo-500" />
            Education & Degrees
          </h2>
        </div>

        <div className="grid gap-6">
          {education.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="p-8 rounded-3xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm hover:shadow-lg hover:border-indigo-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 border border-indigo-100 dark:border-indigo-900/40">
                    <Icon className="w-6 h-6" weight="duotone" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200/50 dark:border-neutral-700/50">
                        {item.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                      {item.degree}
                    </h3>

                    <div className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                      <strong className="text-neutral-800 dark:text-neutral-200">{item.institution}</strong>
                      <span className="mx-2 text-neutral-400">•</span>
                      <span>{item.location}</span>
                    </div>

                    <div className="text-xs text-neutral-500 dark:text-neutral-500">
                      {item.highlight}
                    </div>
                  </div>
                </div>

                <div className="self-start md:self-center shrink-0">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 font-mono text-xs font-bold text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60">
                    {item.period}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
