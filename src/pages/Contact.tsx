import { motion } from 'framer-motion';
import { useState } from 'react';
import HeroSection from '../components/ui/HeroSection';
import SectionWrapper from '../components/ui/SectionWrapper';
import PageTransition from '../components/layout/PageTransition';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'products',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'products',
        message: '',
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 800);
  };

  return (
    <PageTransition>
      <div>
        <HeroSection
          title="Get in Touch"
          subtitle="Have a question or ready to start your project? We'd love to hear from you."
          backgroundImage="/Images/BeyondTheGates.jpg"
          showScroll={false}
        />

        <section className="py-20 md:py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <SectionWrapper delay={0}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-600 ease-apple border-t-4 border-accent-yellow text-center"
              >
                <div className="flex justify-center mb-4">
                  <Phone className="text-accent-yellow" size={32} />
                </div>
                <h3 className="text-lg font-bold text-concrete-900 mb-2">
                  Phone
                </h3>
                <p className="text-gray-600">
                  <a
                    href="tel:+94123456789"
                    className="hover:text-accent-yellow transition-colors"
                  >
                    +94 (0) 123 456 789
                  </a>
                </p>
              </motion.div>
            </SectionWrapper>

            <SectionWrapper delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-600 ease-apple border-t-4 border-accent-yellow text-center"
              >
                <div className="flex justify-center mb-4">
                  <Mail className="text-accent-yellow" size={32} />
                </div>
                <h3 className="text-lg font-bold text-concrete-900 mb-2">
                  Email
                </h3>
                <p className="text-gray-600">
                  <a
                    href="mailto:info@samsonshume.lk"
                    className="hover:text-accent-yellow transition-colors"
                  >
                    info@samsonshume.lk
                  </a>
                </p>
              </motion.div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-600 ease-apple border-t-4 border-accent-yellow text-center"
              >
                <div className="flex justify-center mb-4">
                  <MapPin className="text-accent-yellow" size={32} />
                </div>
                <h3 className="text-lg font-bold text-concrete-900 mb-2">
                  Address
                </h3>
                <p className="text-gray-600">
                  Colombo, Sri Lanka
                </p>
              </motion.div>
            </SectionWrapper>

            <SectionWrapper delay={0.3}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-600 ease-apple border-t-4 border-accent-yellow text-center"
              >
                <div className="flex justify-center mb-4">
                  <MessageSquare className="text-accent-yellow" size={32} />
                </div>
                <h3 className="text-lg font-bold text-concrete-900 mb-2">
                  WhatsApp
                </h3>
                <p className="text-gray-600">
                  <a
                    href="https://wa.me/94123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-yellow transition-colors"
                  >
                    Chat Now
                  </a>
                </p>
              </motion.div>
            </SectionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <SectionWrapper>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white rounded-2xl p-8 shadow-2xl"
              >
                <h2 className="text-3xl font-bold text-concrete-900 mb-6">
                  Send us a Message
                </h2>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <p className="text-green-700 font-semibold">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/20 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/20 transition-all duration-300"
                        placeholder="+94..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/20 transition-all duration-300"
                    >
                      <option value="products">RCC Products</option>
                      <option value="machinery">Machinery Hiring</option>
                      <option value="both">Both Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-accent-yellow text-concrete-900 font-semibold rounded-xl hover:bg-yellow-400 transition-all duration-600 ease-apple hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </motion.div>
            </SectionWrapper>

            <SectionWrapper delay={0.1}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-3xl font-bold text-concrete-900 mb-6">
                  Business Hours
                </h2>

                <div className="space-y-6 mb-8">
                  <motion.div 
                    className="bg-concrete-50 rounded-xl p-6"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-bold text-concrete-900 mb-2">
                      Monday - Friday
                    </h3>
                    <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                  </motion.div>

                  <motion.div 
                    className="bg-concrete-50 rounded-xl p-6"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-bold text-concrete-900 mb-2">
                      Saturday
                    </h3>
                    <p className="text-gray-600">9:00 AM - 2:00 PM</p>
                  </motion.div>

                  <motion.div 
                    className="bg-concrete-50 rounded-xl p-6"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-bold text-concrete-900 mb-2">
                      Sunday
                    </h3>
                    <p className="text-gray-600">Closed</p>
                  </motion.div>

                  <motion.div 
                    className="bg-accent-yellow/10 border border-accent-yellow rounded-xl p-6"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-bold text-concrete-900 mb-2">
                      Emergency Support
                    </h3>
                    <p className="text-gray-600 mb-3">
                      24/7 support for machinery emergencies
                    </p>
                    <a
                      href="https://wa.me/94123456789"
                      className="text-accent-yellow font-semibold hover:text-yellow-500 transition-colors"
                    >
                      WhatsApp: +94 (0) 123 456 789
                    </a>
                  </motion.div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-concrete-900 mb-4">
                    Follow Us
                  </h2>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-concrete-100 hover:bg-accent-yellow hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      f
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-concrete-100 hover:bg-accent-yellow hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      in
                    </a>
                  </div>
                </div>
              </motion.div>
            </SectionWrapper>
          </div>
          </div>
        </section>

        <section className="bg-concrete-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionWrapper>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-concrete-900 mb-8">
              Find Us on Google Maps
            </h2>
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5841476309706!2d79.8612!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae258d8ffffb5f9%3A0x10229e7e1e1e1e1e!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </div>
    </PageTransition>
  );
}
