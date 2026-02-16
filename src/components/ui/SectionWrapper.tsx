import { useEffect, useRef, useState } from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionWrapper({
  children,
  className = '',
  delay = 0,
}: SectionWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} transition-opacity duration-700 ${className}`}
    >
      {children}
    </div>
  );
}
