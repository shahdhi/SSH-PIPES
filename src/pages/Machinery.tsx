import { motion } from 'framer-motion';
import HeroSection from '../components/ui/HeroSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import FeatureBlock from '../components/ui/FeatureBlock';
import PageTransition from '../components/layout/PageTransition';
import { Link } from 'react-router-dom';
import { Cog, Users, TrendingUp, Zap } from 'lucide-react';

export default function Machinery() {
  const machinery = [
    {
      name: 'JCB Excavator',
      category: 'Heavy Excavation',
      description: 'High-performance excavator for heavy-duty excavation, trenching, and major construction projects.',
      image: '/Images/jcb.jpg',
      specs: [
        'Operating weight: 32 tons',
        'Bucket capacity: 1.2 cubic meters',
        'Maximum digging depth: 6.5 meters',
        'Precision hydraulics',
        'Low fuel consumption',
      ],
      pricing: 'Rs. 20,000 per day',
    },
  ];

  const services = [
    {
      icon: <Cog size={28} />,
      title: 'Equipment Only',
      description: 'Rent machinery without operators for experienced teams',
    },
    {
      icon: <Users size={28} />,
      title: 'With Skilled Operators',
      description: 'Professional operators included with every rental',
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Project Support',
      description: 'Long-term contracts with flexible terms',
    },
    {
      icon: <Zap size={28} />,
      title: 'Maintenance Included',
      description: 'Regular servicing and maintenance included',
    },
  ];

  return (
    <PageTransition>
    <div>
      <HeroSection
        title="Heavy Machinery Hiring"
        subtitle="Professional Equipment & Skilled Operators"
        backgroundImage="/Images/OIP.webp"
      />

      <section className="py-20 md:py-32 px-4 bg-concrete-50">
        <div className="max-w-7xl mx-auto">
          <SectionWrapper>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-concrete-900 mb-4">
              Our Fleet
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Modern, well-maintained equipment ready for your projects
            </p>
          </SectionWrapper>

          {machinery.map((item, idx) => (
            <SectionWrapper key={idx} className="mb-12" delay={idx * 0.1}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12 ${
                  idx % 2 === 1 ? 'md:auto-cols-max md:grid-flow-col-dense' : ''
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={idx % 2 === 1 ? 'md:order-2' : ''}
                >
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="rounded-2xl shadow-2xl w-full"
                    whileHover={{ scale: 1.02, rotate: idx % 2 === 0 ? 1 : -1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={idx % 2 === 1 ? 'md:order-1' : ''}
                >
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-accent-yellow text-concrete-900 text-sm font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-concrete-900 mb-4">
                    {item.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">{item.description}</p>

                  <div className="mb-8">
                    <h4 className="font-semibold text-concrete-900 mb-4">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {item.specs.map((spec, specIdx) => (
                        <li
                          key={specIdx}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <span className="text-accent-yellow">✓</span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-concrete-100 rounded-lg p-4 mb-6 border-l-4 border-accent-yellow">
                    <p className="text-lg font-bold text-concrete-900">
                      {item.pricing}
                    </p>
                  </div>

                  <motion.a
                    href="https://wa.me/94123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-8 py-4 bg-accent-yellow text-concrete-900 font-semibold rounded-xl hover:bg-yellow-400 transition-all duration-600 ease-apple hover:shadow-2xl"
                  >
                    Rent Now
                  </motion.a>
                </motion.div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionWrapper>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-concrete-900 mb-16">
              Rental Options
            </h2>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.1}>
                <FeatureBlock
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-concrete-900 text-white py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <SectionWrapper>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Expert Operators Available
                </h2>
                <p className="text-lg text-gray-300 mb-4">
                  Our team of skilled and certified operators brings years of experience to every project. Safety, efficiency, and professionalism are our priorities.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="inline-block w-2 h-2 bg-accent-yellow rounded-full"></span>
                    Certified operators with licenses
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-block w-2 h-2 bg-accent-yellow rounded-full"></span>
                    Years of on-site experience
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-block w-2 h-2 bg-accent-yellow rounded-full"></span>
                    Safety-first approach
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-block w-2 h-2 bg-accent-yellow rounded-full"></span>
                    On-time project completion
                  </li>
                </ul>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-accent-yellow text-concrete-900 font-semibold rounded-xl hover:bg-yellow-400 transition-all duration-600 ease-apple hover:shadow-2xl"
                  >
                    Request Quotation
                  </motion.button>
                </Link>
              </motion.div>
            </SectionWrapper>
            <SectionWrapper>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.img
                  src="/Images/BeyondTheGates.jpg"
                  alt="Operators"
                  className="rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-accent-yellow to-yellow-400 py-20 md:py-32 px-4 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'reverse',
            ease: 'linear'
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-concrete-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            Get Your Equipment Today
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-concrete-800 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            Fast delivery, professional service, competitive pricing
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://wa.me/94123456789"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-concrete-900 text-white font-semibold rounded-xl hover:bg-concrete-800 transition-all duration-600 ease-apple hover:shadow-2xl"
            >
              WhatsApp Now
            </motion.a>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border-2 border-concrete-900 text-concrete-900 font-semibold rounded-xl hover:bg-white transition-all duration-600 ease-apple"
              >
                Contact Form
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
}
