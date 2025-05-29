
import { Phone, Clock, MapPin, Truck, Star } from 'lucide-react';

const Hero = () => {
  const handleCall = () => {
    window.open('tel:+5553991301916', '_self');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-8 w-24 h-24 bg-white/20 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 px-4 py-12">
        <div className="max-w-md mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Clock size={16} />
            <span className="text-sm font-medium">24h • 7 dias</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Guincho <span className="text-yellow-300">Rápido</span><br />
            em Pelotas
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg mb-8 text-white/90 leading-relaxed">
            Socorro automotivo profissional chegando até você em minutos
          </p>
          
          {/* CTA Button */}
          <button
            onClick={handleCall}
            className="w-full bg-white text-orange-500 py-4 px-6 rounded-2xl font-bold text-lg mb-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <Phone size={24} />
            LIGAR AGORA
          </button>
          
          {/* Phone number */}
          <div className="text-2xl font-bold mb-8">
            (53) 99130-1916
          </div>
          
          {/* Features grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4">
              <Truck size={32} className="mx-auto mb-2 text-yellow-300" />
              <h3 className="font-semibold text-sm">Equipamentos</h3>
              <p className="text-xs text-white/80">Modernos</p>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4">
              <Star size={32} className="mx-auto mb-2 text-yellow-300" />
              <h3 className="font-semibold text-sm">Avaliação</h3>
              <p className="text-xs text-white/80">5 Estrelas</p>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4">
              <Clock size={32} className="mx-auto mb-2 text-yellow-300" />
              <h3 className="font-semibold text-sm">Chegada</h3>
              <p className="text-xs text-white/80">30 min</p>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4">
              <MapPin size={32} className="mx-auto mb-2 text-yellow-300" />
              <h3 className="font-semibold text-sm">Cobertura</h3>
              <p className="text-xs text-white/80">Toda Pelotas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
