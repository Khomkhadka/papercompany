
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Card } from '@/components/ui/card';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-paper-800 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Premium Paper Products for Every Purpose
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Sustainable, high-quality paper crafted with care for your business and creative needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-transparent hover:bg-white/10 text-white font-semibold py-2 px-4 border border-white rounded transition-colors duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Crafting Excellence Since 2078</h2>
              <p className="text-paper-700 mb-6">
                At Rapti Handmade Paper, we combine traditional craftsmanship with modern technology to create nepali paper products that exceed expectations. Our dedication to quality and sustainability has made us a trusted partner for businesses and professionals.
              </p>
              <p className="text-paper-700 mb-6">
                Every sheet of paper we produce undergoes rigorous quality checks to ensure consistency, durability, and superior printing performance.
              </p>
              <Link to="/about" className="text-paper-800 font-medium hover:text-paper-600 inline-flex items-center">
                Learn more about our story
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1603484477859-abe6a73f9366?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Paper manufacturing" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Premium Paper manufacture as</h2>
            <p className="text-paper-600 max-w-3xl mx-auto">
              Discover our range of high-quality paper products designed for various applications, from premium stationery to specialized printing paper.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <Card className="paper-card hover:scale-105 transition-transform duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="photo/organic.jpeg" 
                  alt="Premium Writing Paper" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium text-paper-800 mb-2">Sustainable and Eco-Friendly</h3>
                <p className="text-paper-600 mb-4">
                Made from natural fibers, organic paper is biodegradable, recyclable, and helps reduce deforestation.
                </p>
              
              </div>
            </Card>
            
            {/* Product Card 2 */}
            <Card className="paper-card hover:scale-105 transition-transform duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="photo/techanical.jpeg" 
                  alt="Artisan Craft Paper" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium text-paper-800 mb-2">Green Organic Technology</h3>
                <p className="text-paper-600 mb-4">
                Organic technology integrates natural materials with innovation to minimize environmental impact and support sustainability.
                </p>
               
              </div>
            </Card>
            
            {/* Product Card 3 */}
            <Card className="paper-card hover:scale-105 transition-transform duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="photo/papers.jpeg" 
                  alt="Commercial Print Paper" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium text-paper-800 mb-2">Quality Control</h3>
                <p className="text-paper-600 mb-4">Each batch of paper undergoes rigorous testing to ensure it meets our exacting standards for consistency, durability, and performance.
                </p>
                
              </div>
            </Card>
          </div>
          
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">What Our Clients Say</h2>
            <p className="text-paper-600 max-w-3xl mx-auto">
              We take pride in our paper quality and the satisfaction of our customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-paper-50 p-6 rounded-lg border border-paper-100 shadow-sm">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">
                  {'★'.repeat(5)}
                </span>
              </div>
              <p className="text-paper-700 italic mb-6">
                "Paper Palace's premium writing paper has elevated our corporate communications. The quality is consistently excellent, and our clients notice the difference."
              </p>
              <div>
                <p className="font-medium text-paper-800">Khemraj Thapa</p>
                <p className="text-paper-600 text-sm">Marketing Director, Elevation Inc.</p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-paper-50 p-6 rounded-lg border border-paper-100 shadow-sm">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">
                  {'★'.repeat(5)}
                </span>
              </div>
              <p className="text-paper-700 italic mb-6">
                "As an artist, finding the right paper is crucial. Paper Palace's Artisan series provides the perfect texture and durability for my watercolor work."
              </p>
              <div>
                <p className="font-medium text-paper-800">Michael Chen</p>
                <p className="text-paper-600 text-sm">Professional Artist</p>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-paper-50 p-6 rounded-lg border border-paper-100 shadow-sm">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500">
                  {'★'.repeat(5)}
                </span>
              </div>
              <p className="text-paper-700 italic mb-6">
                "We've been using Paper Palace for our printing needs for over a decade. Their commitment to sustainability aligns with our values, and the quality never disappoints."
              </p>
              <div>
                <p className="font-medium text-paper-800">Emma Rodriguez</p>
                <p className="text-paper-600 text-sm">CEO, Green Print Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-paper-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Ready to Experience Premium Paper?</h2>
          <p className="text-paper-100 max-w-3xl mx-auto mb-8 text-lg">
            Contact us today to discuss your paper needs or request a sample of our premium collections.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-paper-800 hover:bg-paper-100 font-semibold py-2 px-6 rounded transition-colors duration-300">
              Contact Us
            </Link>
            {/* <Link to="/products" className="bg-transparent hover:bg-white/10 text-white font-semibold py-2 px-6 border border-white rounded transition-colors duration-300">
              Browse Products
            </Link> */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
