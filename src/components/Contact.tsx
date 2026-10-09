import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  EnvelopeSimple, 
  MapPin, 
  Phone, 
  GithubLogo, 
  LinkedinLogo, 
  Sparkle, 
  Copy, 
  Check, 
  PaperPlaneTilt,
  WhatsappLogo
} from '@phosphor-icons/react';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  message: z.string().min(10, 'Please write at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('franceschimatheus@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const onSubmit = (data: ContactFormValues) => {
    const text = `Hi Matheus! My name is ${data.name}.\n\n${data.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5547992598001?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
            <Sparkle weight="fill" className="w-3 h-3" />
            05 // GET IN TOUCH
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Let's Build Something Exceptional</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-3 max-w-xl text-base">
            Whether you have a strategic platform to build, a senior engineering role, or a project in mind — let's connect.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Socials (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                Contact Details
              </h3>

              {/* Email with copy button */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-700/60">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                    <EnvelopeSimple className="w-5 h-5" weight="duotone" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">Email</div>
                    <a
                      href="mailto:franceschimatheus@gmail.com"
                      className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-indigo-500 truncate block"
                    >
                      franceschimatheus@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl text-neutral-500 hover:text-indigo-600 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors ml-2 shrink-0"
                  title="Copy email"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <span className="flex items-center gap-1 text-xs text-emerald-500 font-semibold">
                      <Check className="w-4 h-4" /> Copied!
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <a
                href="https://wa.me/5547992598001"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-700/60 hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" weight="duotone" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">Phone / WhatsApp</div>
                  <div className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-emerald-500 transition-colors">
                    +55 (47) 99259-8001
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-700/60">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5" weight="duotone" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">Location</div>
                  <div className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                    Corupá, SC, Brazil (GMT-3)
                  </div>
                </div>
              </div>

              {/* Social badges */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://github.com/franceschimatheus"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-bold hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                >
                  <GithubLogo weight="fill" className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/franceschi-matheus"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-bold hover:bg-[#0A66C2] hover:text-white transition-all"
                >
                  <LinkedinLogo weight="fill" className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Sender Form (7 cols) */}
          <div className="md:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                Send a Quick Message
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                Fill the fields below to start a direct conversation on WhatsApp.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
                    Your Name
                  </label>
                  <input
                    {...register('name')}
                    id="name"
                    className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/70 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                    placeholder="e.g. Alex Rivera"
                  />
                  {errors.name && <p className="text-rose-500 text-xs mt-1.5">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
                    Message
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/70 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm resize-none"
                    placeholder="Hi Matheus, I'd like to discuss a project..."
                  />
                  {errors.message && <p className="text-rose-500 text-xs mt-1.5">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#1faa54] text-white font-bold rounded-xl transition-all shadow-md shadow-emerald-500/20 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 text-sm"
                >
                  <WhatsappLogo weight="fill" className="w-5 h-5" />
                  <span>Start WhatsApp Conversation</span>
                  <PaperPlaneTilt weight="bold" className="w-4 h-4 ml-1" />
                </button>

                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-medium text-center border border-emerald-200 dark:border-emerald-800"
                  >
                    Opening WhatsApp... Looking forward to talking with you!
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
