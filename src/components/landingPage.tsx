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
              Fale Conosco
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
              SUA PLATAFORMA DE EVENTOS
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-[1.1] tracking-wide animate-slide-up-delay">
              Convide, Organize e Celebre
              <br />
              <span className="font-light italic">Eventos Inesquecíveis</span>
            </h1>
            <p className="text-lg mt-4 max-w-2xl mx-auto opacity-90">
              Gerencie convites, listas de convidados e confirmações para
              qualquer tipo de evento: aniversários, casamentos, conferências,
              festas, workshops e muito mais.
            </p>
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
              — BENEFÍCIOS —
            </p>
            <h2 className="text-4xl font-light text-gray-900 mb-16 max-w-2xl mx-auto leading-relaxed">
              Momentos perfeitos para todos os tipos de eventos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Clock,
                title: "Organização Pontual",
                description:
                  "Gerencie o cronograma do seu evento e garanta que tudo aconteça no tempo certo, sem estresse.",
              },
              {
                icon: Target,
                title: "Controle de Orçamento",
                description:
                  "Acompanhe os custos e otimize recursos para qualquer tipo de evento, do início ao fim.",
              },
              {
                icon: Shield,
                title: "Gestão de Imprevistos",
                description:
                  "Conte com ferramentas para lidar rapidamente com mudanças ou situações inesperadas.",
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
                — SERVIÇOS —
              </p>
              <h2 className="text-4xl font-light text-gray-900 mb-8 leading-relaxed">
                Crie experiências únicas para qualquer ocasião
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Seja para festas de aniversário, casamentos, eventos
                corporativos, workshops ou encontros familiares, a Sambukila
                oferece soluções digitais para facilitar sua organização.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Convide, acompanhe confirmações, envie lembretes e surpreenda
                seus convidados com praticidade e inovação.
              </p>
            </div>
            <div className="relative animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1515168833906-d2a3b82b1a5e?auto=format&fit=crop&w=800&q=80"
                alt="Evento"
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
              Descubra nossa plataforma de convites eletrônicos
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
                        PLATAFORMA DE CONVITES
                      </p>
                    </div>
                    <h4 className="text-xl font-light text-gray-700 mb-2">
                      Evento Exemplo
                    </h4>
                    <p className="text-sm text-gray-600 tracking-wider">
                      Você está convidado para o nosso evento especial!
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-gray-700">
                      <Calendar className="h-4 w-4 text-rose-400" />
                      <span className="text-sm">15 de Junho de 2024</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-700">
                      <MapPin className="h-4 w-4 text-rose-400" />
                      <span className="text-sm">Centro de Eventos</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-700">
                      <Users className="h-4 w-4 text-rose-400" />
                      <span className="text-sm">Recepção às 18:00</span>
                    </div>
                  </div>

                  <div className="border-t border-rose-200 pt-6">
                    <div className="bg-white p-4 rounded-lg shadow-inner mb-4">
                      <QrCode className="h-16 w-16 text-gray-600 mx-auto mb-2" />
                      <p className="text-xs text-gray-500">
                        QR Code único para confirmação de presença
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
                      Ver Convite Completo
                    </button>
                  </div>

                  <div className="mt-4 pt-4 border-t border-rose-200">
                    <p className="text-xs text-gray-500">
                      Clique para visualizar o exemplo completo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-6">
                  Por que escolher a Sambukila?
                </h3>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: QrCode,
                    title: "QR Code Exclusivo",
                    description:
                      "Cada convidado recebe um QR code personalizado para confirmação de presença.",
                  },
                  {
                    icon: Smartphone,
                    title: "Entrega Digital",
                    description:
                      "Convites enviados diretamente para o WhatsApp ou SMS dos seus convidados.",
                  },
                  {
                    icon: Send,
                    title: "Gestão Simplificada",
                    description:
                      "Crie seu evento, adicione convidados e acompanhe tudo em tempo real.",
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
                  <span>Ver Exemplo de Convite</span>
                  <Heart className="h-4 w-4" />
                </button>
                <button
                  onClick={handleWhatsAppContact}
                  className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2 w-full justify-center mb-4"
                >
                  <span>Fale conosco no WhatsApp</span>
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
              Sobre a Sambukila
            </h2>
            <p className="text-sm font-light tracking-widest text-gray-500">
              — NOSSA EMPRESA —
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
                alt="Evento"
                className="w-full h-96 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              />
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center hover:bg-amber-200 transition-colors duration-300 hover:scale-110 transform transition-transform duration-300">
                <Heart className="h-8 w-8 text-amber-600" />
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h3 className="text-3xl font-light text-gray-900 mb-8 leading-relaxed">
                Somos apaixonados por eventos e tecnologia
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nossa equipe é dedicada a criar experiências inesquecíveis para
                todos os tipos de eventos. Trabalhamos para que você possa focar
                no que realmente importa: celebrar!
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Atendimento personalizado, tecnologia de ponta e praticidade
                para você e seus convidados.
              </p>
              <button
                onClick={handleWhatsAppContact}
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-light tracking-widest text-gray-500 mb-8">
            — SERVIÇOS —
          </p>
          <h2 className="text-4xl font-light text-gray-900 mb-16 leading-relaxed">
            Compromisso com a inovação e a excelência em eventos
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
                Política de Privacidade
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Termos de Serviço
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Contato
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
              <p>&copy; 2025 SAMBUKILA. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
