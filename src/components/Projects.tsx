import { motion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900/50 relative overflow-hidden">
      <div className="absolute top-10 right-[-5%] md:right-10 text-[250px] md:text-[400px] font-black text-neutral-200/50 dark:text-neutral-950/50 select-none pointer-events-none leading-none -z-10">
        02
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12">Entrepreneurial & Leadership</h2>
          
          <div className="flex flex-col gap-8">
            {/* Featured Project: Momentz */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative bg-white dark:bg-neutral-800 p-1 rounded-2xl shadow-sm hover:shadow-xl transition-all"
            >
              {/* Subtle animated gradient border for emphasis */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-sm" />
              
              <div className="relative bg-white dark:bg-neutral-800 p-8 md:p-10 rounded-xl h-full border border-neutral-100 dark:border-neutral-700">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="text-sm font-semibold text-indigo-500 mb-2 tracking-wide uppercase">Featured Project • 2024 - Present</div>
                    <h3 className="text-3xl font-bold mb-2">Momentz</h3>
                    <div className="text-neutral-600 dark:text-neutral-400 font-medium text-lg">
                      Founder & Lead Developer
                    </div>
                  </div>
                  <a 
                    href="https://momentz.app" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:scale-105 transition-transform"
                  >
                    Visit momentz.app
                    <ArrowUpRight className="w-4 h-4" weight="bold" />
                  </a>
                </div>
                
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    'Own the full product lifecycle from user research and ideation to deployment and iteration on mobile platforms.',
                    'Architected and built a scalable infrastructure using React Native, Golang, and PostgreSQL, prioritizing self-managed task execution.',
                    'Developed real-time engagement features and event-based systems.',
                    'Implemented user verification and community-driven features focused on retention and trust.',
                    'Continuously iterate based on user feedback to improve engagement and usability.'
                  ].map((item, i) => (
                    <li key={i} className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed relative pl-5">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Secondary Project: e-Con Bike */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700 transition-all hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">e-Con Bike</h3>
                  <div className="text-neutral-600 dark:text-neutral-400 font-medium">
                    CTO & Co-Founder
                  </div>
                </div>
                <div className="text-sm font-medium text-neutral-500">2020 - 2022</div>
              </div>
              <ul className="space-y-3 mt-4">
                {[
                  'Led technical development of a hardware/software product integrating ESP32 microcontrollers.',
                  'Built interfaces connecting embedded systems to user-facing applications.',
                  'Achieved 1st place in the national INOVA innovation competition (2022).'
                ].map((item, i) => (
                  <li key={i} className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed relative pl-4">
                    <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
