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
  SiStackoverflow
} from 'react-icons/si';
import { 
  FaServer, 
  FaCubes, 
  FaPlug, 
  FaUsersGear, 
  FaInfinity, 
  FaGlobe 
} from 'react-icons/fa6';

const skills = [
  { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
  { name: 'React Native', icon: SiReact, color: 'text-[#61DAFB]' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#4169E1]' },
  { name: 'Python', icon: SiPython, color: 'text-[#3776AB]' },
  { name: 'Golang', icon: SiGo, color: 'text-[#00ADD8]' },
  { name: 'System Architecture', icon: FaServer, color: 'text-neutral-500' },
  { name: 'State Management', icon: FaCubes, color: 'text-neutral-500' },
  { name: 'API Design', icon: FaPlug, color: 'text-neutral-500' },
  { name: 'Agile/Scrum', icon: FaUsersGear, color: 'text-neutral-500' },
  { name: 'GCP', icon: SiGooglecloud, color: 'text-[#4285F4]' },
  { name: 'Docker', icon: SiDocker, color: 'text-[#2496ED]' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-[#326CE5]' },
  { name: 'CI/CD', icon: FaInfinity, color: 'text-neutral-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
  { name: 'i18n', icon: FaGlobe, color: 'text-neutral-500' },
  { name: 'StackOverflow Copy-Pasting', icon: SiStackoverflow, color: 'text-[#F58025]' },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                Product-focused Senior Software Analyst with 4+ years of experience delivering high-impact mobile and web applications. 
                Proven track record of thriving in distributed, asynchronous environments by balancing complex technical requirements with autonomous execution.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Adept at bridging technical gaps through clear documentation, transparent communication, and 
                centering <code className="text-sm bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">&lt;div&gt;</code>s on the first try. 
                Passionate about building seamless user experiences that deliver measurable business value.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-800 rounded-lg text-sm font-medium shadow-sm border border-neutral-200 dark:border-neutral-700 hover:border-black dark:hover:border-white transition-colors cursor-default"
                  >
                    <skill.icon className={`w-4 h-4 ${skill.color}`} />
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
