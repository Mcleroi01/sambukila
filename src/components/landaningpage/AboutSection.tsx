import React from 'react';
import { Smartphone, Share2, Users, Leaf } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Create digital invitations easily",
      description: "Intuitive design tools for beautiful invitations"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Share via WhatsApp or QR code",
      description: "Instant delivery to all your guests"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Personalized guest pages",
      description: "Unique experience for each guest"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Eco-friendly and elegant",
      description: "Sustainable choice without compromising style"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            What is Sambukila?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sambukila is Angola's premier digital wedding invitation platform, revolutionizing how couples 
            share their special moments. We combine traditional elegance with modern technology to create 
            unforgettable invitation experiences that reflect your unique love story.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-rose-200 group-hover:to-pink-200 transition-colors">
                <div className="text-rose-600">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Why Choose Digital Invitations?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Instant delivery to guests worldwide</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Real-time RSVP tracking and management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Cost-effective compared to traditional printing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Environmentally sustainable choice</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Easy updates and last-minute changes</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
                <div className="text-4xl mb-4">🌍</div>
                <div className="text-2xl font-bold text-gray-900 mb-2">Made in Angola</div>
                <div className="text-gray-600">Proudly serving couples across Africa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;