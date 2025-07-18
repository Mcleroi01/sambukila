import React from 'react';
import { Mail, Users, QrCode, Camera, Printer, Video, Clock } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Digital Invitations",
      description: "Beautiful, customizable wedding invitations with premium templates and personalization options.",
      features: ["Free & Premium templates", "Custom branding", "Multiple languages"],
      available: true
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Guest Management",
      description: "Complete guest list management with RSVP tracking, dietary preferences, and seating arrangements.",
      features: ["RSVP tracking", "Guest preferences", "Seating charts"],
      available: true
    },
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "QR Code Generation",
      description: "Unique QR codes for each invitation, making it easy for guests to access their personalized pages.",
      features: ["Individual QR codes", "Analytics tracking", "Easy sharing"],
      available: true
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photo Invitations",
      description: "Transform your favorite photos into stunning invitation designs with professional layouts.",
      features: ["Photo integration", "Professional layouts", "High-quality output"],
      available: false
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Invitations",
      description: "Create memorable video invitations with music, animations, and personal messages.",
      features: ["Video templates", "Music integration", "Personal messages"],
      available: false
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Printed Invitations",
      description: "High-quality printed versions of your digital invitations for traditional guests.",
      features: ["Premium paper", "Professional printing", "Fast delivery"],
      available: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive wedding invitation solutions designed to make your special day perfect
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                !service.available ? 'opacity-75' : ''
              }`}
            >
              {!service.available && (
                <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>Coming Soon</span>
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                service.available 
                  ? 'bg-gradient-to-br from-rose-100 to-pink-100 text-rose-600' 
                  : 'bg-gray-100 text-gray-400'
              }`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      service.available ? 'bg-rose-500' : 'bg-gray-400'
                    }`}></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  service.available
                    ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!service.available}
              >
                {service.available ? 'Learn More' : 'Coming Soon'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              We offer personalized packages for unique wedding requirements. 
              Let's discuss your vision and create something special together.
            </p>
            <button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-3 rounded-full hover:from-rose-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
              Contact Us for Custom Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;