import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureBlockProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureBlock({
  icon,
  title,
  description,
  delay = 0,
}: FeatureBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="text-center p-8 liquid-transition"
    >
      <div className="flex justify-center mb-6">
        <motion.div 
          className="w-20 h-20 bg-gradient-to-br from-accent-yellow/20 to-accent-yellow/5 rounded-full flex items-center justify-center text-accent-yellow"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {icon}
        </motion.div>
      </div>
      <motion.h3 
        className="text-xl font-bold text-concrete-900 mb-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.6 }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-gray-600 text-sm leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.3, duration: 0.6 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
