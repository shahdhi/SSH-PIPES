import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface StatsCounterProps {
  end: number;
  label: string;
  suffix?: string;
  delay?: number;
}

export default function StatsCounter({
  end,
  label,
  suffix = '',
  delay = 0,
}: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    const timer = setTimeout(() => {
      let current = 0;
      const increment = end / 50;
      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, 20);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [inView, end, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-accent-yellow mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-gray-600 font-semibold">{label}</p>
    </motion.div>
  );
}
