import React, { useState } from "react";
import {
  Clock,
  Shield,
  Target,
  Heart,
  QrCode,
  Smartphone,
  Send,
  Calendar,
  MapPin,
  Users,
} from "lucide-react";

function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppContact = () => {
    window.open("https://wa.me/244953629563", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-transparent absolute w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-white text-sm font-normal tracking-[0.25em] uppercase">
                SAMBUKILA
              </span>
            </div>

            <button
              onClick={handleWhatsAppContact}
              className="border border-white text-white px-6 py-2 text-xs font-light tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-500 hover:scale-105 hover:shadow-lg"
            >
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('https://i.pinimg.com/1200x/4e/40/90/4e4090b43ebf3b737812c1b1c7c15f6e.jpg')`,
        }}
      >
        {/* Animated floating dots */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-white rounded-full animate-pulse`}
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 90 + 5}%`,
                opacity: Math.random() * 0.6 + 0.2,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative text-center text-white z-10 animate-fade-in">
          <div className="mb-8">
            <p className="text-xs font-light tracking-[0.4em] mb-8 opacity-90 uppercase animate-slide-up">
              WEDDING PLANNER
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-[1.1] tracking-wide animate-slide-up-delay">
              Your Dream Wedding
              <br />
              <span className="font-light italic">Made Perfect</span>
            </h1>
          </div>
        </div>

        {/* Animated Social Icons */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6">
          {["f", "t", "in"].map((icon, index) => (
            <div
              key={icon}
              className="w-6 h-6 border border-white/40 flex items-center justify-center text-white text-xs font-light hover:bg-white hover:text-black transition-all duration-500 cursor-pointer hover:scale-110 hover:rotate-12"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {icon}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <p className="text-sm font-light tracking-widest text-gray-500 mb-8">
              — BENEFIT —
            </p>
            <h2 className="text-4xl font-light text-gray-900 mb-16 max-w-2xl mx-auto leading-relaxed">
              Perfect moments simply reveal themselves
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Clock,
                title: "On Time and Efficient",
                description:
                  "A wedding planner can help you manage your wedding timeline and ensure everything runs smoothly on your special day, coordinating the quality or experience of your wedding.",
              },
              {
                icon: Target,
                title: "Budget Management",
                description:
                  "A wedding planner can help you manage your wedding budget and ensure you get the most value for your money, without compromising the quality or experience of your wedding.",
              },
              {
                icon: Shield,
                title: "Handling Unexpected Situations",
                description:
                  "By using a wedding planner, you can rest easy knowing that if any issues arise on your wedding day, they will be handled quickly and efficiently.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-gray-600 group-hover:shadow-lg transition-all duration-500">
                  <benefit.icon className="h-8 w-8 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <p className="text-sm font-light tracking-widest text-gray-500 mb-8">
                — SERVICES —
              </p>
              <h2 className="text-4xl font-light text-gray-900 mb-8 leading-relaxed">
                Create an unforgettable atmosphere away from the crowd, for your
                special day
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Welcome to Glasgow's most iconic Neoclassical building that is
                events of all occasions. The stunning venue boasts impressive
                and sophisticated architecture that is sure to leave a lasting
                impression on your guests.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Built in 1844 and named within the grandeur of the City, the
                rich history of Glasgow contributes to its unique atmosphere and
                beauty.
              </p>
            </div>
            <div className="relative animate-slide-in-right">
              <img
                src="https://www.shutterstock.com/shutterstock/videos/1109459565/thumb/1.jpg?ip=x480"
                alt="Wedding venue"
                className="w-full h-96 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 hover:scale-105 transform transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Electronic Invitation Example Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-light tracking-widest text-gray-500 mb-8">
              — SAMBUKILA —
            </p>
            <h2 className="text-4xl font-light text-gray-900 mb-8 leading-relaxed">
              Découvrez notre plateforme d'invitations électroniques
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Invitation Preview */}
            <div className="relative">
              <div
                className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl shadow-2xl border border-rose-100 hover:shadow-3xl transition-all duration-500 hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() =>
                  window.open(
                    "https://sambukila.netlify.app/guest/195403e4-fb5d-458c-ab46-a1bb794e3c29/public",
                    "_blank"
                  )
                }
              >
                <div className="text-center">
                  <div className="mb-6">
                    <Heart
                      className={`h-12 w-12 text-rose-400 mx-auto mb-4 transition-all duration-500 ${
                        isHovered ? "animate-pulse scale-110" : ""
                      }`}
                    />
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold text-gray-800 mb-1">
                        Sambukila
                      </h3>
                      <p className="text-xs text-gray-500 tracking-wider">
                        INVITATION PLATFORM
                      </p>
                    </div>
                    <h4 className="text-xl font-light text-gray-700 mb-2">
                      Purce & Carlo
                    </h4>
                    <p className="text-sm text-gray-600 tracking-wider">
                      INVITE YOU TO THEIR WEDDING
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-gray-700">
                      <Calendar className="h-4 w-4 text-rose-400" />
                      <span className="text-sm">June 15, 2024</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-700">
                      <MapPin className="h-4 w-4 text-rose-400" />
                      <span className="text-sm">Versailles Castle</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-700">
                      <Users className="h-4 w-4 text-rose-400" />
                      <span className="text-sm">Reception at 6:00 PM</span>
                    </div>
                  </div>

                  <div className="border-t border-rose-200 pt-6">
                    <div className="bg-white p-4 rounded-lg shadow-inner mb-4">
                      <QrCode className="h-16 w-16 text-gray-600 mx-auto mb-2" />
                      <p className="text-xs text-gray-500">
                        Unique QR Code for confirmation
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(
                          "https://sambukila.netlify.app/guest/195403e4-fb5d-458c-ab46-a1bb794e3c29/public",
                          "_blank"
                        );
                      }}
                      className="bg-rose-400 text-white px-6 py-2 rounded-full text-sm hover:bg-rose-500 transition-colors duration-300 hover:scale-105 transform"
                    >
                      View Full Invitation
                    </button>
                  </div>

                  <div className="mt-4 pt-4 border-t border-rose-200">
                    <p className="text-xs text-gray-500">
                      Click to preview the full example
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-6">
                  Why choose Sambukila?
                </h3>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: QrCode,
                    title: "Unique QR Code",
                    description:
                      "Each guest receives a personalized QR code for easy RSVP management",
                  },
                  {
                    icon: Smartphone,
                    title: "Mobile Delivery",
                    description:
                      "Invitations are sent directly to your guests' phones via WhatsApp or SMS",
                  },
                  {
                    icon: Send,
                    title: "Simplified Management",
                    description:
                      "Create your event, add your guests, and we'll handle the rest",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300"
                  >
                    <div className="w-12 h-12 flex-shrink-0 border-2 border-gray-300 rounded-full flex items-center justify-center mb-6 group-hover:border-gray-600 group-hover:shadow-lg transition-all duration-500">
                      <feature.icon className="h-6 w-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button
                  onClick={() =>
                    window.open(
                      "https://sambukila.netlify.app/guest/195403e4-fb5d-458c-ab46-a1bb794e3c29/public",
                      "_blank"
                    )
                  }
                  className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2 w-full justify-center mb-4"
                >
                  <span>View Invitation Example</span>
                  <Heart className="h-4 w-4" />
                </button>
                <button
                  onClick={handleWhatsAppContact}
                  className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2 w-full justify-center mb-4"
                >
                  <span>Contact us on WhatsApp</span>
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              About Company
            </h2>
            <p className="text-sm font-light tracking-widest text-gray-500">
              — OUR COMPANY —
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-slide-in-left">
              <img
                src="https://i0.wp.com/www.orchardavenueevents.com/wp-content/uploads/2025/01/RL82638.jpg?resize=1024%2C681&ssl=1"
                alt="Wedding couple"
                className="w-full h-96 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              />
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center hover:bg-amber-200 transition-colors duration-300 hover:scale-110 transform transition-transform duration-300">
                <Heart className="h-8 w-8 text-amber-600" />
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h3 className="text-3xl font-light text-gray-900 mb-8 leading-relaxed">
                We are a team of passionate and experienced wedding planners
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team of wedding planners is passionate about creating
                unforgettable wedding experiences. We understand that every
                wedding is unique, and we work closely with our clients to
                ensure that their vision becomes a reality.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our approach is personal, friendly, and professional, and we
                strive to make the planning process as stress-free as possible.
              </p>
              <button
                onClick={handleWhatsAppContact}
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-light tracking-widest text-gray-500 mb-8">
            — SERVICES —
          </p>
          <h2 className="text-4xl font-light text-gray-900 mb-16 leading-relaxed">
            We are committed to providing
          </h2>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <span className="text-2xl font-light tracking-wider">
                SAMBUKILA
              </span>
            </div>
            <div className="flex justify-center space-x-8 text-sm">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
              <p>&copy; 2025 SAMBUKILA. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
    </div>
  );
}

export default LandingPage;
