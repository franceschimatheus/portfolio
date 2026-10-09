import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkle, Lightning } from '@phosphor-icons/react';

const experiences = [
  {
    company: 'Grupo Malwee',
    role: 'Senior Software Engineer',
    period: 'July 2024 - Present',
    location: 'Hybrid',
    tag: 'Enterprise Full-Stack',
    keyMetrics: ['200+ Sales Reps', 'Saved $2.5k+/mo on GCP', 'Build time: 15m → 7m', '3 Systems Unified'],
    technologies: ['React', 'Next.js', 'PostgreSQL', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'GitHub Actions'],
    description: [
      'Architected and developed a full-stack sales planning platform using React, Next.js, PostgreSQL, and GCP, supporting 200+ sales representatives and consolidating workflows from 3 legacy systems.',
      'Reduced cloud infrastructure costs by over $2.5k/month through GCP resource optimization and infrastructure right-sizing while maintaining platform reliability.',
      'Designed frontend and backend architecture, database schemas, authentication systems, and CI/CD pipelines using Docker, Kubernetes, and GitHub Actions.',
      'Served as a senior technical leader, mentoring engineers, leading architecture discussions, conducting code reviews, and establishing development standards across the team.',
      'Optimized CI/CD pipelines, reducing build times from 15 to 7 minutes and Docker image sizes from 1GB+ to ~500MB.',
    ],
  },
  {
    company: 'WEG',
    role: 'Full-Stack Developer',
    period: 'August 2022 - July 2024',
    location: 'Jaraguá do Sul, SC, Brazil',
    tag: 'IoT & Industrial SaaS',
    keyMetrics: ['30+ Industrial Clients', '80% System Startup Reduction', 'Adopted as Enterprise Base'],
    technologies: ['Node.js', 'React', 'TypeScript', 'MongoDB', 'WebSockets', 'Vite', 'Zod'],
    description: [
      'Architected a multi-tenant configurable monitoring platform adopted by 30+ industrial clients, replacing custom-built legacy implementations.',
      'Developed a low-code backend parametrization system using Node.js and MongoDB, reducing system startup times and onboarding friction by 80%.',
      'Developed real-time monitoring interfaces and data visualization systems for industrial telemetry workflows using React, WebSockets, and TypeScript.',
      'Optimized backend queries and API performance for high-volume industrial monitoring and telemetry workflows.',
      'Collaborated on reusable technical standards and platform architecture later adopted by additional enterprise solutions within WEG.',
    ],
  },
  {
    company: 'WEG',
    role: 'Quality Assurance Technician',
    period: 'February 2020 - August 2022',
    location: 'Jaraguá do Sul, SC, Brazil',
    tag: 'Hardware & Systems QA',
    keyMetrics: ['20% Turnaround Time Improvement', 'IoT Panel Connectivity Testing'],
    technologies: ['IoT Systems', 'Automation Scripts', 'Telemetry Testing', 'International Validation'],
    description: [
      'Collaborated with WEG Digital teams on IoT monitoring solutions, validating integrations between industrial equipment, telemetry systems, and software platforms.',
      'Developed process automation tools and testing procedures that reduced operational turnaround time by 20% and improved inspection efficiency.',
      'Supported international customer audits, compliance validation, and cross-functional initiatives involving hardware, firmware, and software teams.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
            <Sparkle weight="fill" className="w-3 h-3" />
            02 // CAREER TIMELINE
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Professional Experience</h2>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-10 border-l-2 border-indigo-500/20 dark:border-indigo-500/30 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-6 w-5 h-5 rounded-full bg-white dark:bg-neutral-900 border-4 border-indigo-500 shadow-md group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="p-8 rounded-3xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm hover:shadow-xl hover:border-indigo-500/40 transition-all">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold text-xs border border-indigo-200/60 dark:border-indigo-800/60">
                        {exp.tag}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-mono font-medium text-neutral-600 dark:text-neutral-300 self-start md:self-center">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    {exp.period}
                  </div>
                </div>

                {/* Key Metrics Chips */}
                {exp.keyMetrics && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.keyMetrics.map((metric, mIdx) => (
                      <span
                        key={mIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200/60 dark:border-emerald-800/60"
                      >
                        <Lightning weight="fill" className="w-3 h-3 text-emerald-500" />
                        {metric}
                      </span>
                    ))}
                  </div>
                )}

                {/* Description bullet points */}
                <ul className="space-y-2.5 mb-6">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed relative pl-5"
                    >
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mr-1">
                    Tech Stack:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 text-xs font-medium border border-neutral-200/50 dark:border-neutral-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
