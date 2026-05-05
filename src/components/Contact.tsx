import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { EnvelopeSimple, MapPin, Phone, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

const contactSchema = z.object({
  name: z.string().min(2, 'Even AI has a name. What is yours?'),
  message: z.string().min(10, 'Come on, you can say more than just "hi"! (give me at least 10 characters)'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    // Format the message for WhatsApp
    const text = `Hi Matheus! My name is ${data.name}.\n\n${data.message}`;
    const encodedText = encodeURIComponent(text);
    
    // Brazilian phone number: +55 (47) 99259-8001 -> 5547992598001
    const whatsappUrl = `https://wa.me/5547992598001?text=${encodedText}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's talk about your next project.</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                I'm currently available for new opportunities. Whether you have a question or just want to say hi, 
                I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <a href="mailto:franceschimatheus@gmail.com" className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-neutral-800 rounded-full shadow-sm">
                    <EnvelopeSimple className="w-6 h-6" />
                  </div>
                  <span className="font-medium">franceschimatheus@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
                  <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-neutral-800 rounded-full shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="font-medium">+55 (47) 99259-8001</span>
                </div>
                <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
                  <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-neutral-800 rounded-full shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="font-medium">Corupá, SC, Brazil (GMT-3)</span>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                <a href="https://github.com/franceschimatheus" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  <GithubLogo weight="fill" className="w-8 h-8" />
                </a>
                <a href="https://www.linkedin.com/in/matheus-franceschi-88ab841a1" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                  <LinkedinLogo weight="fill" className="w-8 h-8" />
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    {...register('name')}
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                


                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all resize-none"
                    placeholder="How can I help you?"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#128C7E] transition-colors shadow-sm"
                >
                  Send via WhatsApp
                </button>

                {isSuccess && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-500 text-sm text-center font-medium"
                  >
                    Thanks for reaching out! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
