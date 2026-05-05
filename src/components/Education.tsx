import { motion } from 'framer-motion';
import { GraduationCap } from '@phosphor-icons/react';

const education = [
  {
    institution: 'PUC Minas',
    degree: 'Postgraduate Degree in Artificial Intelligence and Machine Learning',
    period: '2025',
    location: 'Remote'
  },
  {
    institution: 'UniSENAI',
    degree: 'Bachelor in Control and Automation Engineering',
    period: '2018 - 2022',
    location: 'Jaraguá do Sul, SC, Brazil'
  },
  {
    institution: 'SENAI-CentroWEG',
    degree: 'Technical Degree in Electronics',
    period: '2018 - 2020',
    location: 'Jaraguá do Sul, SC, Brazil'
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-10 right-[-5%] md:right-10 text-[250px] md:text-[400px] font-black text-neutral-100 dark:text-neutral-900 opacity-50 select-none pointer-events-none leading-none -z-10">
        03
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <GraduationCap weight="duotone" className="w-8 h-8 text-neutral-800 dark:text-neutral-200" />
          Education
        </h2>
        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col md:flex-row justify-between md:items-center p-6 bg-white dark:bg-neutral-800/50 rounded-xl border border-neutral-100 dark:border-neutral-800"
            >
              <div>
                <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                <div className="text-neutral-600 dark:text-neutral-400 font-medium">
                  {item.institution} <span className="text-neutral-300 dark:text-neutral-600 mx-2">•</span> {item.location}
                </div>
              </div>
              <div className="mt-4 md:mt-0 font-medium text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full text-sm self-start md:self-auto whitespace-nowrap">
                {item.period}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
    </section>
  );
}
