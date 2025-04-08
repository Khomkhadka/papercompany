
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-paper-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Rapti Handmade Paper</h3>
            <p className="text-paper-200 mb-4">
              Crafting premium paper products since 2078. Our commitment to quality and sustainability makes us the preferred choice for businesses and creative professionals.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-paper-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-paper-200 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-paper-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-paper-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Contact Information</h3>
            <address className="not-italic text-paper-200">
              <p>Deukhari</p>
              <p>Dang,Nepal</p>
              <p className="mt-2">Phone: 9840768211</p>
              <p>Email: lbgc9005@gmail.com</p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-paper-700 text-paper-300 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Rapti Handmade Paper. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
