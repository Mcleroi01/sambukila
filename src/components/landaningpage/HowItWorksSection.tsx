import React from 'react';
import { Calendar, UserPlus, Share, BarChart3 } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Create Your Event",
      description: "Set up your wedding details, choose a beautiful template, and customize your invitation design to match your style.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Add Your Guest List",
      description: "Import or manually add your guests with their contact information. Organize them into groups for easy management.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Share className="w-8 h-8" />,
      title: "Share Invitations",
      description: "Send personalized invitations via WhatsApp, email, or QR codes. Each guest gets a unique link to their invitation.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Track & Personalize",
      description: "Monitor RSVPs in real-time, send reminders, and manage guest preferences all from your dashboard.",
      color: "from-rose-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with Sambukila is simple. Follow these four easy steps to create and send your digital wedding invitations.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-rose-200 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Mobile Timeline */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-20 w-0.5 h-16 bg-gray-200"></div>
                )}
                
                <div className="text-center lg:text-center">
                  {/* Step Number */}
                  <div className="relative z-10 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of couples who have already chosen Sambukila for their special day. 
              Create your first invitation in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full hover:from-rose-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
                Start Creating Now
              </button>
              <button className="border-2 border-rose-300 text-rose-700 px-8 py-4 rounded-full hover:bg-rose-50 transition-all duration-300 font-semibold">
                Watch Demo Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;