import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-concrete-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/Images/LOGO.png"
                alt="Samson Hume pipes logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-bold">Samson Hume pipes</span>
            </div>
            <p className="text-gray-300 text-sm">
              Premium RCC concrete products and earth moving machinery services across Sri Lanka.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-accent-yellow transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-accent-yellow transition-colors">Products</Link></li>
              <li><Link to="/machinery" className="text-gray-300 hover:text-accent-yellow transition-colors">Machinery</Link></li>
              <li><Link to="/why-choose-us" className="text-gray-300 hover:text-accent-yellow transition-colors">Why Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent-yellow transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>RCC Hume Pipes</li>
              <li>Septic Tanks</li>
              <li>Well Rings</li>
              <li>Block Stones</li>
              <li>Interlock Pavers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <Phone size={18} className="text-accent-yellow mt-0.5" />
                <span>+94 (0) 123 456 789</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={18} className="text-accent-yellow mt-0.5" />
                <span>info@samsonshume.lk</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-accent-yellow mt-0.5" />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-concrete-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; 2024 Samson Hume pipes. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-accent-yellow transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-accent-yellow transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
