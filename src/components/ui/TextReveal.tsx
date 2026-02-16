import { motion, type Variants } from 'framer-motion';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface TextRevealProps {
  children: string;
  delay?: number;
  className?: string;
}

export default function TextReveal({
  children,
  delay = 0,
  className = '',
}: TextRevealProps) {
  const words = children.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.08, 
        delayChildren: delay * i * 0.1,
        ease: EASE
      },
    }),
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.6,
        ease: EASE
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {words.map((word, idx) => (
        <motion.span 
          key={idx} 
          variants={child} 
          className="inline-block mr-2"
          whileHover={{ 
            scale: 1.05, 
            color: '#fbbf24',
            transition: { duration: 0.3 }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
