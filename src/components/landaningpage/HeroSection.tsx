import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Digital Wedding Invitations</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
              Sambukila – Your Wedding Starts with a 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600"> Modern Invitation</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Create and send personalized wedding invitations with QR codes and unique links for each guest. 
              Make your special day unforgettable with elegant digital invitations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full hover:from-rose-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                <span className="font-semibold">Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-rose-300 text-rose-700 px-8 py-4 rounded-full hover:bg-rose-50 transition-all duration-300 font-semibold">
                Request a Demo
              </button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Happy Couples</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10k+</div>
                <div className="text-sm text-gray-600">Invitations Sent</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Eco-Friendly</div>
              </div>
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">💕</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">Maria & João</h3>
                <p className="text-gray-600 text-sm mb-4">You're invited to our wedding</p>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-xs text-gray-500">QR Code</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm">
                  View Invitation
                </button>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;