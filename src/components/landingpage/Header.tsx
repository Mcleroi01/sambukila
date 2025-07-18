import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="text-2xl font-serif font-bold text-gray-800">Sambukila</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-rose-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-rose-600 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-rose-600 transition-colors">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-rose-600 transition-colors">Contact</a>
            <button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-2 rounded-full hover:from-rose-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-rose-100">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-rose-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-rose-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-rose-600 transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-rose-600 transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-2 rounded-full hover:from-rose-600 hover:to-pink-700 transition-all duration-300 shadow-lg w-fit">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;