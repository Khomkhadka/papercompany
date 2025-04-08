
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-paper-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
            <img className="w-8 h-9" src="src/components/photo/companylogo.png" alt="logo"/>
              <span className="text-paper-800 font-serif text-2xl font-bold"> Rapti Handmade</span>
            </Link>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-paper-700 hover:text-paper-900 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/products" className="text-paper-700 hover:text-paper-900 px-3 py-2 text-sm font-medium">
              Products
            </Link>
            <Link to="/about" className="text-paper-700 hover:text-paper-900 px-3 py-2 text-sm font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-paper-700 hover:text-paper-900 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-paper-700 hover:text-paper-900 hover:bg-paper-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-paper-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-paper-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-paper-700 hover:text-paper-900 hover:bg-paper-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block px-3 py-2 rounded-md text-base font-medium text-paper-700 hover:text-paper-900 hover:bg-paper-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-paper-700 hover:text-paper-900 hover:bg-paper-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-paper-700 hover:text-paper-900 hover:bg-paper-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
