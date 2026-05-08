import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
  cn?: string;
}

export const PageHeader = ({ eyebrow, title, intro, cn: chineseChar }: Props) => (
  <section className="relative pt-16 md:pt-24 pb-12 md:pb-20 overflow-hidden">
    {chineseChar && (
      <span
        aria-hidden
        className="absolute right-0 top-8 md:top-0 font-cn text-[18rem] md:text-[28rem] leading-none text-accent/[0.06] select-none pointer-events-none -translate-y-12"
      >
        {chineseChar}
      </span>
    )}
    <div className="container-wide relative">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.4em] text-accent mb-6"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-5xl md:text-7xl leading-[1.05] max-w-4xl"
      >
        {title}
      </motion.h1>
      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          {intro}
        </motion.p>
      )}
    </div>
  </section>
);
