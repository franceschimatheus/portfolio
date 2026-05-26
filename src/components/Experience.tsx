import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Grupo Malwee',
    role: 'Senior Software Engineer',
    period: 'July 2024 - Present',
    location: 'Hybrid',
    description: [
      'Architected and developed a monolithic full-stack sales planning platform using React, Next.js, PostgreSQL, and GCP, supporting 200+ sales representatives.',
      'Centralized workflows from 3 legacy systems into a unified platform, improving sales target visibility and operational efficiency.',
      'Designed frontend architecture, backend services, database schemas, authentication flows, and CI/CD pipelines using GitHub Actions, Docker, and Kubernetes.',
      'Acted as a technical reference for the team, mentoring developers, supporting onboarding, and reviewing implementation and architectural decisions.',
      'Worked closely with product and business stakeholders to align technical implementation with operational requirements and platform scalability.',
      'Optimized CI/CD pipelines, reducing build times from 15 to 7 minutes and Docker image sizes from 1GB+ to ~500MB.',
      'Implemented automated testing, Husky-based developer tooling, and engineering workflow improvements, increasing release reliability and onboarding efficiency.',
    ],
  },
  {
    company: 'WEG',
    role: 'Full-Stack Developer',
    period: 'August 2022 - July 2024',
    location: 'Jaraguá do Sul, SC, Brazil',
    description: [
      'Architected a multi-tenant configurable monitoring platform used by 30+ industrial clients, replacing custom-built legacy implementations.',
      'Architected a low-code backend parametrization system using Node.js and MongoDB, achieving an 80% reduction in system startup times and onboarding friction.',
      'Built real-time monitoring interfaces using React, Vite, WebSockets, Zod, and React Hook Form.',
      'Optimized backend queries and API performance for data-intensive industrial monitoring workflows.',
      'Collaborated with cross-functional teams to define reusable technical standards and platform architecture.',
      'The platform architecture was later adopted as the foundation for additional enterprise solutions within WEG.',
    ],
  },
  {
    company: 'WEG',
    role: 'Quality Assurance Technician',
    period: 'February 2020 - August 2022',
    location: 'Jaraguá do Sul, SC, Brazil',
    description: [
      'Collaborated with WEG Digital teams on IoT-connected monitoring systems, contributing to integrations between industrial hardware and software platforms.',
      'Performed quality assurance and connectivity testing for industrial electric panel systems, ensuring compliance with international standards.',
      'Supported international client inspections and technical validation processes in English.',
      'Developed internal testing procedures and automation tools, reducing operational turnaround time by 20%.',
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
