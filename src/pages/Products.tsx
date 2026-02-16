import { motion } from 'framer-motion';
import HeroSection from '../components/ui/HeroSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import PageTransition from '../components/layout/PageTransition';
import { Link } from 'react-router-dom';

export default function Products() {
  const products = [
    {
      title: 'RCC Span Type Hume Pipes',
      description: 'Professional-grade reinforced concrete pipes for underground sewage, water supply, and drainage systems. Engineered for maximum durability and easy installation.',
      image: 'https://blsasphalt.com/wp-content/uploads/2021/03/road-construction-cement-culvert.jpg',
      specs: [
        'Sizes: 100mm to 600mm',
        'Pressure rated up to 10m head',
        'Quick jointing system',
        'Perfect for municipal projects',
        'Long service life (50+ years)',
      ],
    },
    {
      title: 'Septic Tanks',
      description: 'Modern wastewater treatment solutions for residential and commercial properties. Our septic tanks are designed for optimal filtration and minimal maintenance.',
      image: '/Images/Septic tank.png',
      specs: [
        'Capacity: 500L to 5000L',
        'Two-chamber design',
        'Access covers included',
        'Easy cleaning and maintenance',
        'Environmentally compliant',
      ],
    },
    {
      title: 'Well Rings',
      description: 'Premium concrete well rings for water well construction. Stacked together to form deep wells with excellent water retention and durability.',
      image: '/Images/well rings.png',
      specs: [
        'Internal diameter: 900mm to 1200mm',
        'Height: 500mm per ring',
        'Reinforced concrete construction',
        'Perfect interlocking design',
        'Weather-resistant finish',
      ],
    },
    {
      title: 'Block Stones',
      description: 'Concrete block stones for all construction needs - walls, boundaries, and structural elements. High compressive strength and uniform sizing.',
      image: '/Images/Block stones.jpg',
      specs: [
        'Standard: 400x200x200mm',
        'Compressive strength: 6-8 N/mm²',
        'Uniform finish',
        'Easy to lay and level',
        'Cost-effective building solution',
      ],
    },
    {
      title: 'Interlock Pavers',
      description: 'Decorative interlocking concrete pavers for driveways, pathways, and public spaces. Available in multiple designs and colors.',
      image: '/Images/interlock.jpg',
      specs: [
        'Multiple design patterns',
        'Various color options',
        'Anti-slip finish',
        'Easy installation and replacement',
        'Eco-friendly material',
      ],
    },
    {
      title: 'Road Curbs',
      description: 'Professional road curbs and edge stones for highway and urban infrastructure projects. Durable, weather-resistant, and perfectly aligned.',
      image: '/Images/Road-Curb.jpg',
      specs: [
        'Length: 500mm to 1000mm',
        'Height: 200mm to 300mm',
        'Reinforced design',
        'Load-bearing capability',
        'Precision engineered edges',
      ],
    },
  ];

  return (
    <PageTransition>
    <div>
      <HeroSection
        title="Premium RCC Products"
        subtitle="Excellence in Every Product"
        backgroundImage="/Images/1745322784_7987.jpg"
      />

      {products.map((product, idx) => (
        <section
          key={idx}
          className={`py-12 md:py-20 px-4 ${
            idx % 2 === 0 ? 'bg-white' : 'bg-concrete-50'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <SectionWrapper>
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="rounded-2xl shadow-2xl"
                    whileHover={{ scale: 1.02, rotate: idx % 2 === 0 ? 1 : -1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </motion.div>
              </SectionWrapper>

              <SectionWrapper>
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.div 
                    className="mb-4"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "left" }}
                  >
                    <div className="w-12 h-1 bg-gradient-to-r from-accent-gold to-accent-yellow mb-6"></div>
                  </motion.div>
                  <motion.h2 
                    className="text-4xl md:text-5xl font-bold text-concrete-900 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                  >
                    {product.title}
                  </motion.h2>
                  <motion.p 
                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                  >
                    {product.description}
                  </motion.p>

                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-semibold text-concrete-900 mb-4">
                      Specifications & Features
                    </h3>
                    <ul className="space-y-3">
                      {product.specs.map((spec, specIdx) => (
                        <motion.li
                          key={specIdx}
                          className="flex items-start gap-3 text-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + specIdx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          viewport={{ once: true }}
                        >
                          <motion.span 
                            className="inline-block w-2 h-2 bg-accent-yellow rounded-full mt-2 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                          ></motion.span>
                          <span>{spec}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href="https://wa.me/94123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-accent-yellow text-concrete-900 font-semibold rounded-xl hover:bg-yellow-400 transition-all duration-600 ease-apple hover:shadow-2xl text-center"
                    >
                      Inquire Now
                    </motion.a>
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-8 py-4 border-2 border-concrete-900 text-concrete-900 font-semibold rounded-xl hover:bg-concrete-50 transition-all duration-600 ease-apple text-center"
                      >
                        Get Quote
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              </SectionWrapper>
            </div>
          </div>
        </section>
      ))}

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
            Need Custom Solutions?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-concrete-800 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            Contact our team to discuss your specific requirements
          </motion.p>
          <motion.div
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
              className="inline-block px-10 py-4 bg-concrete-900 text-white font-semibold rounded-xl hover:bg-concrete-800 transition-all duration-600 ease-apple hover:shadow-2xl"
            >
              Start a Conversation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
}
