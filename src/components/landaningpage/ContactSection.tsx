import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Heart } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Let's Talk About Your Wedding
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us to start your digital invitation journey today or explore partnership opportunities. 
            We're here to make your special day unforgettable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your wedding plans or partnership ideas..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 rounded-xl hover:from-rose-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                We're excited to hear from you! Whether you're planning your dream wedding or 
                interested in partnering with us, we're here to help make it happen.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600">hello@sambukila.ao</p>
                  <p className="text-gray-600">partnerships@sambukila.ao</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600">+244 900 000 000</p>
                  <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM WAT</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Visit Us</h4>
                  <p className="text-gray-600">Luanda, Angola</p>
                  <p className="text-sm text-gray-500">By appointment only</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="w-6 h-6 text-rose-600" />
                <h4 className="font-semibold text-gray-900">Partnership Opportunities</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Are you a wedding planner, photographer, or venue owner? Let's collaborate to create 
                amazing experiences for couples across Angola. Contact us to discuss partnership opportunities.
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">Follow us on social media</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white hover:from-rose-600 hover:to-pink-700 transition-all duration-300">
                  <span className="text-sm font-bold">IG</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white hover:from-rose-600 hover:to-pink-700 transition-all duration-300">
                  <span className="text-sm font-bold">FB</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white hover:from-rose-600 hover:to-pink-700 transition-all duration-300">
                  <span className="text-sm font-bold">WA</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;