
import React from 'react';
import Layout from '../components/Layout';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Products = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-paper-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Paper Products
            </h1>
            <p className="text-xl text-paper-100">
              Discover our range of premium paper products, each crafted with care and attention to detail for exceptional quality and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Custom Paper Solutions */}
      <section className="py-16 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Custom Paper Solutions</h2>
            <p className="text-paper-600 max-w-3xl mx-auto">
              Need something specific for your business or creative project? We offer custom paper solutions tailored to your exact requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-paper-100 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-paper-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-paper-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-serif font-medium text-paper-800 mb-2">Custom Sizes</h3>
              <p className="text-paper-600">
                Need non-standard dimensions? We can produce paper in custom sizes to fit your specific requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-paper-100 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-paper-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-paper-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-serif font-medium text-paper-800 mb-2">Custom Colors</h3>
              <p className="text-paper-600">
                Match your brand with custom-colored paper, available in various shades and finishes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-paper-100 shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-paper-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-paper-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-serif font-medium text-paper-800 mb-2">Specialized Finishes</h3>
              <p className="text-paper-600">
                Choose from embossed, metallic, textured, or other specialty finishes for your unique paper needs.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/contact" className="btn-primary">
              Request Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* Sustainable Practices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Our Commitment to Sustainability</h2>
              <p className="text-paper-700 mb-4">
                At Rapti Handmade Paper, we're dedicated to environmentally responsible paper production. Our manufacturing processes minimize waste and energy consumption, while our recycling programs help reduce our ecological footprint.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-paper-700">Certified sustainable forestry practices</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-paper-700">Energy-efficient manufacturing facilities</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-paper-700">Recycled paper options with post-consumer waste content</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-paper-700">Water conservation and treatment programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
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
            {/* <a href="/products" className="bg-transparent hover:bg-white/10 text-white font-semibold py-2 px-6 border border-white rounded transition-colors duration-300">
              View Products
            </a> */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
