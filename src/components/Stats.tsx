import { motion } from 'framer-motion';

const stats = [
  { value: '4+', label: 'Years of Experience' },
  { value: '200+', label: 'Active Users on Platforms' },
  { value: '3', label: 'Legacy Systems Replaced' },
  { value: '1st', label: 'Place INOVA Innovation 2022' },
];

export function Stats() {
  return (
    <section className="py-12 bg-white dark:bg-[#0a0a0a] border-y border-neutral-100 dark:border-neutral-800 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center justify-center text-center py-8 px-4 border-neutral-200 dark:border-neutral-800
                ${index === 1 ? 'border-l' : ''}
                ${index === 2 ? 'border-t md:border-t-0 md:border-l' : ''}
                ${index === 3 ? 'border-t border-l md:border-t-0 md:border-l' : ''}
              `}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-neutral-800 to-neutral-400 dark:from-white dark:to-neutral-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
