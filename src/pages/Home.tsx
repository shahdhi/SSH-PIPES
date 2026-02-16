import { motion } from 'framer-motion';
import HeroSection from '../components/ui/HeroSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import ProductCard from '../components/ui/ProductCard';
import FeatureBlock from '../components/ui/FeatureBlock';
import StatsCounter from '../components/ui/StatsCounter';
import TextReveal from '../components/ui/TextReveal';
import PageTransition from '../components/layout/PageTransition';
import { Link } from 'react-router-dom';
import { Truck, Zap, Shield, Award } from 'lucide-react';

export default function Home() {
  const products = [
    {
      title: 'RCC Hume Pipes',
      description: 'Premium reinforced concrete pipes for all infrastructure needs',
      image: 'https://blsasphalt.com/wp-content/uploads/2021/03/road-construction-cement-culvert.jpg',
      specs: ['Various sizes available', 'High durability', 'Quick installation'],
    },
    {
      title: 'Septic Tanks',
      description: 'Advanced wastewater management solutions',
      image: '/Images/Septic tank.png',
      specs: ['Easy maintenance', 'Long lifespan', 'Eco-friendly'],
    },
    {
      title: 'Well Rings',
      description: 'Durable concrete rings for water well construction',
      image: '/Images/well rings.png',
      specs: ['Standard sizes', 'Premium quality', 'Quick delivery'],
    },
  ];

  const features = [
    {
      icon: <Truck size={28} />,
      title: 'Island-Wide Delivery',
      description: 'Rapid delivery to all corners of Sri Lanka',
    },
    {
      icon: <Zap size={28} />,
      title: 'Loading & Unloading',
      description: 'Complete service from factory to site',
    },
    {
      icon: <Shield size={28} />,
      title: 'Quality Assured',
      description: 'Premium manufacturing standards',
    },
    {
      icon: <Award size={28} />,
      title: 'Expert Team',
      description: 'Experienced operators and technical support',
    },
  ];

  return (
    <PageTransition>
    <div>
      <HeroSection
        title="Building Sri Lanka's Future"
        subtitle="Premium RCC Products & Machinery Services"
        backgroundImage="https://img.freepik.com/premium-photo/preparing-site-underground-pipe-installation_1280275-389909.jpg"
        ctaText="Explore Products"
        ctaLink="/products"
      />

      <SectionWrapper className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.img
                src="https://jcrunderground.com/wp-content/uploads/2021/01/jcr-slide4.jpg"
                alt="About"
                className="rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-concrete-900 mb-6">
                <TextReveal>About Samson Hume pipes</TextReveal>
              </h2>
              <motion.p 
                className="text-lg text-gray-600 mb-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                With decades of expertise in RCC concrete products manufacturing, Samson Hume pipes has become Sri Lanka's leading provider of premium construction materials.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Our commitment to quality, innovation, and customer service has earned us the trust of thousands of projects across the island.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to="/why-choose-us">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-accent-yellow text-concrete-900 font-semibold rounded-xl hover:bg-yellow-400 transition-all duration-600 ease-apple hover:shadow-2xl"
                  >
                    Learn More About Us
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <section className="bg-concrete-50 py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionWrapper>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-concrete-900 mb-4">
              Featured Products
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Discover our range of premium RCC concrete products designed for durability and excellence
            </p>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {products.map((product, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.1}>
                <ProductCard
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  specs={product.specs}
                  ctaLink="/products"
                />
              </SectionWrapper>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-accent-yellow text-concrete-900 font-semibold rounded-xl hover:bg-yellow-400 transition-all duration-600 ease-apple hover:shadow-2xl"
              >
                View All Products
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionWrapper>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-concrete-900 mb-16">
              Why Choose Samson Hume pipes
            </h2>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.1}>
                <FeatureBlock
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={idx * 0.1}
                />
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-concrete-900 text-white py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <SectionWrapper>
              <StatsCounter end={25} label="Years of Experience" suffix="+" delay={0} />
            </SectionWrapper>
            <SectionWrapper>
              <StatsCounter end={5000} label="Projects Completed" suffix="+" delay={0.2} />
            </SectionWrapper>
            <SectionWrapper>
              <StatsCounter end={10000} label="Happy Clients" suffix="+" delay={0.4} />
            </SectionWrapper>
            <SectionWrapper>
              <StatsCounter end={100} label="Island Coverage" suffix="%" delay={0.6} />
            </SectionWrapper>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-concrete-900 mb-6">
                <TextReveal>Heavy Machinery Hiring</TextReveal>
              </h2>
              <motion.p 
                className="text-lg text-gray-600 mb-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Need powerful earth-moving equipment? Our fleet of JCBs, excavators, and skilled operators are ready to accelerate your projects.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                From small renovations to large-scale infrastructure projects, we provide reliable machinery and experienced operators.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to="/machinery">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-accent-yellow text-concrete-900 font-semibold rounded-xl hover:bg-yellow-400 transition-all duration-600 ease-apple hover:shadow-2xl"
                  >
                    Hire Machinery Now
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.img
                src="/Images/JCB.jpg"
                alt="Machinery"
                className="rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
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
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-concrete-800 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            Contact us today for premium RCC products and machinery hiring services
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-concrete-900 text-white font-semibold rounded-xl hover:bg-concrete-800 transition-all duration-600 ease-apple hover:shadow-2xl"
              >
                Get in Touch
              </motion.button>
            </Link>
            <motion.a
              href="https://wa.me/94123456789"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-600 ease-apple hover:shadow-2xl inline-block"
            >
              WhatsApp Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
}
