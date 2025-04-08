
import React from 'react';
import Layout from '../components/Layout';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-paper-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              About Rapti Handmade Paper
            </h1>
            <p className="text-xl text-paper-100">
              Learn about our story, our mission, and the people behind our premium paper products.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Paper Palace founder" 
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="section-heading">Our Story</h2>
              <p className="text-paper-700 mb-6">
              Rapti Handmade Paper was founded in 2078 by Damar Bahadur Gc, a paper enthusiast with a background in traditional papermaking and a vision to create premium quality paper products that combine old-world craftsmanship with modern technology and sustainable practices.
              </p>
              <p className="text-paper-700 mb-6">
                What began as a small workshop with a few dedicated artisans has grown into a respected paper company serving clients. Throughout our growth, we've maintained our commitment to quality, sustainability, and innovation.
              </p>
              <p className="text-paper-700">
                Today,Rapti Handmade Paper continues to be a family-owned business, with second-generation leadership carrying forward the founding principles while embracing new technologies and environmental practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Core Values</h2>
            <p className="text-paper-600 max-w-3xl mx-auto">
              These principles guide everything we do, from sourcing raw materials to delivering the final product.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-paper-100 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-paper-100 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-paper-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-paper-800 mb-4">Quality</h3>
              <p className="text-paper-600">
                We're committed to excellence in every sheet of paper we produce. Our rigorous quality control ensures consistency, durability, and superior performance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-paper-100 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-paper-100 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-paper-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-paper-800 mb-4">Sustainability</h3>
              <p className="text-paper-600">
                Environmental responsibility is at the heart of our operations. We use sustainable forestry practices, minimize waste, and continuously work to reduce our ecological footprint.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-paper-100 shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-paper-100 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-paper-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-paper-800 mb-4">Innovation</h3>
              <p className="text-paper-600">
                While respecting traditional papermaking techniques, we continually explore new technologies and methods to improve our products and processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Owner */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-16">Meet Our Founder & CEO</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
              <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="photo/founder.jpg" 
                  alt="Damar Bahadur Gc" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-serif font-bold text-paper-800 mb-2">Damar Bahadur Gc</h3>
                <p className="text-paper-600 font-medium mb-4">Founder</p>
                <p className="text-paper-700 mb-4">
                Damar Bahadur Gc founded Rapti Handmade Paper in 2078 after a 15-year career in traditional papermaking. With  craftsmanship, Damar combined technical expertise with artisanal techniques to create paper products of exceptional quality.
                </p>
                <p className="text-paper-700">
                  Under his leadership, Rapti Handmade Paper has grown from a small workshop to a paper manufacturer, while maintaining the core values of quality, sustainability, and innovation that have been with the company since day one.
                </p>
              </div>
            </div>
            
            <Separator className="my-8 bg-paper-200" />
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="photo/ceo.jpg" 
                  alt="Lal Bahadur Gc" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-serif font-bold text-paper-800 mb-2">Lal Bahadur GC</h3>
                <p className="text-paper-600 font-medium mb-4">Chief Operating Officer</p>
                <p className="text-paper-700 mb-4">
                Lal Bahadur Gc joined Rapti Handmade Paper in 2078. As Damar's son, he brings a fresh perspective while honoring the company's traditions.
                </p>
                <p className="text-paper-700">
                Lal Bahadur has spearheaded the company's sustainability initiatives and digital transformation, helping Paper Palace balance traditional craftsmanship with modern efficiency and environmental responsibility.
                </p>
              </div>
            </div>
            <Separator className="my-8 bg-paper-200" />
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="photo/manager.jpg" 
                  alt="Kajol Karki" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-serif font-bold text-paper-800 mb-2">Kajol Karki</h3>
                <p className="text-paper-600 font-medium mb-4">Production Manager</p>
                <p className="text-paper-700 mb-4">
                Kajol oversees the production process, ensuring quality and efficiency in every batch of paper.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Facility */}
      <section className="py-16 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Production Facility</h2>
            <p className="text-paper-600 max-w-3xl mx-auto">
              Tour our state-of-the-art paper manufacturing facility where tradition meets innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="paper-card">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Paper manufacturing equipment" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium text-paper-800 mb-2">Modern Technology</h3>
                <p className="text-paper-600">
                  Our facility combines state-of-the-art equipment with traditional techniques to create paper of exceptional quality and consistency.
                </p>
              </div>
            </div>
            
            <div className="paper-card">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-7931eb8b10a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Quality control" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium text-paper-800 mb-2">Quality Control</h3>
                <p className="text-paper-600">
                  Each batch of paper undergoes rigorous testing to ensure it meets our exacting standards for consistency, durability, and performance.
                </p>
              </div>
            </div>
            
            <div className="paper-card">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1530982011887-3cc11cc85693?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Sustainable practices" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium text-paper-800 mb-2">Sustainable Operations</h3>
                <p className="text-paper-600">
                  Our facility incorporates renewable energy sources, water conservation systems, and waste reduction measures to minimize our environmental impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-paper-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Experience the Rapti Handmade Paper Difference</h2>
          <p className="text-paper-100 max-w-3xl mx-auto mb-8 text-lg">
            Ready to discover our premium paper products? Get in touch with our team or browse our collections.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-white text-paper-800 hover:bg-paper-100 font-semibold py-2 px-6 rounded transition-colors duration-300">
              Contact Us
            </a>
            <a href="/products" className="bg-transparent hover:bg-white/10 text-white font-semibold py-2 px-6 border border-white rounded transition-colors duration-300">
              View Products
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
