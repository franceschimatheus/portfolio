import { motion } from 'framer-motion';
import { Briefcase, UsersThree, GitMerge, Trophy } from '@phosphor-icons/react';

const stats = [
  {
    value: '4+',
    label: 'Years of Experience',
    sublabel: 'Full-Stack & Mobile Development',
    icon: Briefcase,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    value: '200+',
    label: 'Enterprise Users',
    sublabel: 'Active on daily sales platforms',
    icon: UsersThree,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    value: '3',
    label: 'Legacy Systems Replaced',
    sublabel: 'Consolidated into unified architecture',
    icon: GitMerge,
    color: 'from-purple-500 to-pink-500',
  },
  {
    value: '1st',
    label: 'Place INOVA Innovation',
    sublabel: 'National IoT & Embedded Award',
    icon: Trophy,
    color: 'from-amber-400 to-orange-500',
  },
];

export function Stats() {
  return (
    <section id="stats" className="py-12 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-2xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-lg transition-all"
              >
                {/* Glow hint on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-indigo-500 dark:text-indigo-400" weight="duotone" />
                  </div>
                  <span className="text-xs font-mono font-medium text-neutral-400 dark:text-neutral-500">
                    0{index + 1}
                  </span>
                </div>

                <div className={`text-4xl md:text-5xl font-black tracking-tight mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>

                <div className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm mb-1">
                  {stat.label}
                </div>

                <div className="text-xs text-neutral-500 dark:text-neutral-400 leading-snug">
                  {stat.sublabel}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
