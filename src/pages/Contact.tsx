
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useToast } from '@/components/ui/use-toast';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Map from "@/components/ui/Map";
const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
    });
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-paper-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-paper-100">
              Have questions about our products or services? Get in touch with our team and we'll be happy to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-heading">Get In Touch</h2>
              <p className="text-paper-700 mb-8">
                Whether you have questions about our products, need a custom quote, or want to discuss a partnership, our team is here to help. Fill out the form, and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-paper-100 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-paper-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-paper-800 mb-1">Our Location</h3>
                    <address className="not-italic text-paper-600">
                      Deukhuri<br />
                      Dang,Nepal
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-paper-100 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-paper-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-paper-800 mb-1">Phone</h3>
                    <p className="text-paper-600">
                      Sales: 9840768211<br />
                      Customer Service: 9840768211<br />
                      Hours: Sunday-Friday, 9am-5pm PT
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-paper-100 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-paper-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-paper-800 mb-1">Email</h3>
                    <p className="text-paper-600">
                      General Inquiries: lbgc9005@gmail.com<br />
                      Sales: lbgc9005@gmail.com<br />
                      Support: lbgc9005@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-6 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Your name" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="Your email address" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      placeholder="Your company name (optional)" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      placeholder="Your phone number (optional)" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="How can we help you?" 
                    rows={6} 
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full bg-paper-700 hover:bg-paper-800 text-white">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Visit Our Location</h2>
            <p className="text-paper-600 max-w-3xl mx-auto">
              Our headquarters and showroom are located in Dang,Nepal.
            </p>
          </div>
          
          <div className="h-96 rounded-lg overflow-hidden shadow-md">
           <Map/>
            {/* Placeholder for map - in a real implementation, you would integrate Google Maps or another map provider */}
            <div className="w-full h-full bg-paper-200 flex items-center justify-center">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-paper-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-paper-700 text-lg font-medium">
                  Deukhuri,Dang,Nepal
                </p>
                <p className="text-paper-600 mt-2">
                  Interactive map would be displayed here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="text-paper-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our products and services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-paper-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-paper-800 mb-3">What payment methods do you accept?</h3>
              <p className="text-paper-600">
                We accept all major credit cards,E-sewa and bank transfers for business accounts. For large orders, we also offer discount for qualified businesses.
              </p>
            </div>
            
            <div className="bg-paper-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-paper-800 mb-3">What is your shipping policy?</h3>
              <p className="text-paper-600">
                We ship nationwide. Standard shipping takes 7-14 business days, while expedited options are available.
              </p>
            </div>
            
            <div className="bg-paper-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-paper-800 mb-3">Can I request samples before placing a large order?</h3>
              <p className="text-paper-600">
                Yes, we offer sample packs for businesses considering bulk orders. Contact our sales team to request samples of specific paper types relevant to your needs.
              </p>
            </div>
            
            <div className="bg-paper-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-paper-800 mb-3">Do you offer custom paper solutions?</h3>
              <p className="text-paper-600">
                Absolutely. We specialize in custom paper products tailored to specific requirements. Contact us with your specifications, and our team will work with you to create the perfect solution.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-paper-600 mb-4">
              Don't see your question answered here?
            </p>
            <Button className="bg-paper-700 hover:bg-paper-800 text-white">
              Contact Our Support Team
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
