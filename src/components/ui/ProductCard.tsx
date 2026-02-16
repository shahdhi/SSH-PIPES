import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef, MouseEvent } from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  specs?: string[];
  ctaText?: string;
  ctaLink?: string;
}

export default function ProductCard({
  title,
  description,
  image,
  specs,
  ctaText = 'Learn More',
  ctaLink = '#',
}: ProductCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-600 ease-apple">
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          ></motion.div>
        </div>

        <div className="p-6" style={{ transform: "translateZ(50px)" }}>
          <motion.h3 
            className="text-xl font-bold text-concrete-900 mb-2"
            initial={{ y: 0 }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>

          {specs && specs.length > 0 && (
            <div className="mb-4 space-y-1">
              {specs.map((spec, idx) => (
                <motion.p 
                  key={idx} 
                  className="text-sm text-gray-500"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  • {spec}
                </motion.p>
              ))}
            </div>
          )}

          <motion.a
            href={ctaLink}
            className="inline-flex items-center gap-2 text-accent-yellow font-semibold group/link"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {ctaText}
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </motion.a>
        </div>

        <motion.div 
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold via-accent-yellow to-accent-gold"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
        ></motion.div>
      </div>
    </motion.div>
  );
}
