import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://res.cloudinary.com/dhakknfrx/image/upload/v1740713460/Sattva_Logo_zzviza.png"
                alt="Sattva Design Logo"
                className="h-8 w-auto"
              />
              <span className="text-lg font-serif">Sattva Design</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/projects" className="text-gray-900 hover:text-gray-600 transition-colors">Projects</Link>
            <Link to="/about" className="text-gray-900 hover:text-gray-600 transition-colors">About</Link>
            <Link to="/contact" className="text-gray-900 hover:text-gray-600 transition-colors">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-gray-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/projects" className="block px-3 py-2 text-gray-900 hover:text-gray-600 transition-colors">Projects</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-900 hover:text-gray-600 transition-colors">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-900 hover:text-gray-600 transition-colors">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
} 