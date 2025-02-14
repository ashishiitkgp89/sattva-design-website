import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu, X, ChevronRight, Instagram, Twitter, Facebook } from 'lucide-react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-2xl font-serif">Sattva Design</a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/projects" className="text-gray-900 hover:text-gray-600 transition-colors">Projects</a>
              <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">About</a>
              <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">Contact</a>
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
              <a href="/projects" className="block px-3 py-2 text-gray-900 hover:text-gray-600 transition-colors">Projects</a>
              <a href="#" className="block px-3 py-2 text-gray-900 hover:text-gray-600 transition-colors">About</a>
              <a href="#" className="block px-3 py-2 text-gray-900 hover:text-gray-600 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>

      {/* Contact Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-8">Let's Create Together</h2>
            <p className="text-gray-600 mb-12">
              We're always interested in new projects and collaborations.
              Reach out to discuss your vision.
            </p>
            <button className="border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors">
              Contact Us <ChevronRight className="inline-block ml-2" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <span className="text-xl font-serif">Sattva Design</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            © 2024 Sattva Design. All rights reserved.
          </div>
        </div>
      </footer>
      </div>
    </Router>
  );
}

export default App;
