import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  showScroll?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
  showScroll = true,
}: HeroSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div 
        style={{ y, willChange: 'transform' }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={backgroundImage}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm"
            style={{ transform: 'translateZ(0)' }}
          />
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70"></div>

      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-100 mb-12 font-light tracking-wide"
            >
              {subtitle}
            </motion.p>
          )}
          {ctaText && ctaLink && (
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={ctaLink}
              className="inline-block px-10 py-5 bg-accent-yellow text-concrete-900 font-semibold rounded-xl hover:bg-yellow-400 transition-all duration-600 ease-apple hover:shadow-2xl"
            >
              {ctaText}
            </motion.a>
          )}
        </motion.div>
      </motion.div>

      {showScroll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 15, 0] }}
          transition={{ 
            opacity: { delay: 1.5, duration: 0.6 },
            y: { duration: 2.5, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm"
          >
            <ChevronDown size={32} className="text-white" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
