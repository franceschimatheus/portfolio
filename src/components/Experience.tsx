import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Grupo Malwee',
    role: 'Senior Software Analyst',
    period: 'July 2024 - Present',
    location: 'Hybrid',
    description: [
      'Architected and delivered a full-stack sales planning platform from scratch in collaboration with BI, now used by 200+ sales representatives.',
      'Replaced 3 legacy systems by centralizing workflows, significantly improving sales target visibility and operational efficiency.',
      'Led technical decisions and system design, prioritizing autonomous execution and clear documentation across a hybrid, distributed team.',
      'Mentored junior developers, reducing onboarding time by 30% and lowering post-release bug rates through structured asynchronous code reviews.',
    ],
  },
  {
    company: 'WEG',
    role: 'Full-stack Developer',
    period: 'August 2022 - July 2024',
    location: 'Jaraguá do Sul, SC, Brazil',
    description: [
      'Collaborated with cross-functional stakeholders to develop and maintain end-to-end applications using React and Node.js, focusing on data-driven monitoring interfaces.',
      'Built and optimized RESTful APIs for high-concurrency environments, improving responsiveness and reliability.',
      'Implemented automated testing suites, reducing production issues by 20%.',
    ],
  },
  {
    company: 'WEG',
    role: 'Quality Assurance Technician',
    period: 'February 2020 - August 2022',
    location: 'Jaraguá do Sul, SC, Brazil',
    description: [
      'Performed quality assurance testing on industrial electric panels, ensuring compliance with international standards.',
      'Conducted network and connectivity testing for complex industrial systems.',
      'Supported international client inspections, leveraging English proficiency for technical alignment.',
      'Developed internal testing procedures and automation tools, reducing turnaround time by 20%.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-10 right-[-5%] md:right-10 text-[250px] md:text-[400px] font-black text-neutral-100 dark:text-neutral-900 opacity-50 select-none pointer-events-none leading-none -z-10">
        01
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
                <div className="md:col-span-1 mb-2 md:mb-0 text-neutral-500 font-medium text-sm">
                  {exp.period}
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <div className="text-neutral-600 dark:text-neutral-400 font-medium mb-4">
                    {exp.company} • {exp.location}
                  </div>
                  <ul className="space-y-2 list-none">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-neutral-600 dark:text-neutral-400 relative pl-4 text-base leading-relaxed">
                        <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        </motion.div>
      </div>
    </section>
  );
}
