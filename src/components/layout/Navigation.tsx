import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Machinery', path: '/machinery' },
    { label: 'Why Choose Us', path: '/why-choose-us' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-apple border-b ${
        isScrolled
          ? 'bg-gray-900/70 backdrop-blur-2xl shadow-2xl border-white/10'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-white liquid-transition hover:opacity-80"
          >
            <motion.img
              whileHover={{ scale: 1.06, rotate: 2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              src="/Images/LOGO.png"
              alt="Samson Hume pipes logo"
              className="w-12 h-12 object-contain"
            />
            <span className="inline text-base sm:text-2xl font-bold whitespace-nowrap">Samson Hume pipes</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-sm font-medium text-white hover:text-accent-yellow transition-all duration-500 ease-apple group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-500 ease-apple group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              href="https://wa.me/94123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-accent-yellow text-white text-sm font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-500 ease-apple hover:shadow-xl"
            >
              WhatsApp
            </motion.a>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white liquid-transition"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden bg-gradient-to-b from-gray-800 to-gray-900 backdrop-blur-xl border-t border-gray-700 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={link.path}
                      className="block text-sm font-medium text-white hover:text-accent-yellow transition-all duration-500 ease-apple"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  href="https://wa.me/94123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-2 bg-accent-yellow text-white text-sm font-semibold rounded-lg text-center hover:bg-yellow-500 transition-all duration-500 ease-apple"
                >
                  WhatsApp
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
