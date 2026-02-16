import { motion } from 'framer-motion';
import HeroSection from '../components/ui/HeroSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import FeatureBlock from '../components/ui/FeatureBlock';
import PageTransition from '../components/layout/PageTransition';
import { Link } from 'react-router-dom';
import { Award, Truck, Zap, Users, Shield, Leaf } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Award size={28} />,
      title: '25+ Years Experience',
      description: 'Two and a half decades of expertise in RCC manufacturing and construction materials',
    },
    {
      icon: <Truck size={28} />,
      title: 'Island-Wide Delivery',
      description: 'Rapid delivery to all corners of Sri Lanka with complete loading and unloading service',
    },
    {
      icon: <Zap size={28} />,
      title: 'Premium Quality',
      description: 'Strict quality control and adherence to international manufacturing standards',
    },
    {
      icon: <Users size={28} />,
      title: 'Expert Team',
      description: 'Skilled operators and technical support available 24/7 for your projects',
    },
    {
      icon: <Shield size={28} />,
      title: 'Reliability',
      description: 'Trusted by thousands of projects from small renovations to major infrastructure',
    },
    {
      icon: <Leaf size={28} />,
      title: 'Eco-Friendly',
      description: 'Environmentally responsible manufacturing and sustainable business practices',
    },
  ];

  const values = [
    {
      title: 'Quality Excellence',
      description: 'Every product meets or exceeds international standards. We use premium materials and rigorous testing protocols.',
      image: '/Images/1745322784_7987.jpg',
    },
    {
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We provide comprehensive support from inquiry to delivery and beyond.',
      image: '/Images/the-construction-team-leader-is-going-to-shake-hands-with-the-leader-engineer-start-the-construction-site-improvement-project-cooperation-and-contractor-free-photo.jpg',
    },
    {
      title: 'Reliability',
      description: 'On-time delivery, consistent quality, and dependable service make us the trusted choice for builders.',
      image: '/Images/OIP (2).webp',
    },
  ];

  return (
    <PageTransition>
    <div>
      <HeroSection
        title="Why Choose Samson Hume pipes"
        subtitle="Building Trust, One Project at a Time"
        backgroundImage="/Images/OIP (1).webp"
      />

      <section className="py-20 md:py-32 px-4 bg-concrete-50">
        <div className="max-w-7xl mx-auto">
          <SectionWrapper>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-concrete-900 mb-16">
              Why We're the Best Choice
            </h2>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.1}>
                <FeatureBlock
                  icon={reason.icon}
                  title={reason.title}
                  description={reason.description}
                />
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionWrapper>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-concrete-900 mb-16">
              Our Core Values
            </h2>
          </SectionWrapper>

          {values.map((value, idx) => (
            <SectionWrapper key={idx} className="mb-16" delay={idx * 0.1}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
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
                    src={value.image}
                    alt={value.title}
                    className="rounded-2xl shadow-2xl"
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
                  <h3 className="text-3xl md:text-4xl font-bold text-concrete-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </section>

      <section className="bg-concrete-900 text-white py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionWrapper>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Our Manufacturing Process
            </h2>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Raw Materials', desc: 'Premium quality cement, aggregate, and reinforcing steel' },
              { step: '02', title: 'Mixing', desc: 'Precise proportions mixed in state-of-the-art equipment' },
              { step: '03', title: 'Molding', desc: 'Cast in precision molds for uniform dimensions' },
              { step: '04', title: 'Curing', desc: 'Controlled curing for maximum strength and durability' },
            ].map((phase, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-accent-yellow mb-4">
                    {phase.step}
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{phase.title}</h4>
                  <p className="text-gray-300 text-sm">{phase.desc}</p>
                </motion.div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4 bg-concrete-50">
        <div className="max-w-7xl mx-auto">
          <SectionWrapper>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-concrete-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Thousands of satisfied clients across Sri Lanka trust us for their construction needs
            </p>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Perera',
                company: 'Prime Construction Ltd',
                text: 'Excellent quality and delivery. Their RCC pipes exceeded our expectations.',
              },
              {
                name: 'Anjana Silva',
                company: 'Metro Infrastructure',
                text: 'Outstanding service from inquiry to completion. Highly recommend for any project.',
              },
              {
                name: 'Harsha Fernando',
                company: 'Build Masters',
                text: 'Best products in the market with the most competitive pricing. Great support team!',
              },
            ].map((testimonial, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-600 ease-apple border-l-4 border-accent-yellow"
                >
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-concrete-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                  <div className="flex gap-1 mt-4 text-accent-yellow">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </motion.div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <SectionWrapper>
            <h2 className="text-4xl md:text-5xl font-bold text-concrete-900 mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's build something great together. Contact us today for your construction needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-accent-yellow text-concrete-900 font-semibold rounded-xl hover:bg-yellow-400 transition-all duration-600 ease-apple hover:shadow-2xl"
                >
                  Get in Touch
                </motion.button>
              </Link>
              <motion.a
                href="https://wa.me/94123456789"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border-2 border-accent-yellow text-accent-yellow font-semibold rounded-xl hover:bg-accent-yellow hover:text-concrete-900 transition-all duration-600 ease-apple"
              >
                WhatsApp Us
              </motion.a>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </div>
    </PageTransition>
  );
}
