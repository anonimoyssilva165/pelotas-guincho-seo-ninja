
import { Phone, Clock, MapPin, Truck } from 'lucide-react';

const Hero = () => {
  const handleCall = () => {
    window.open('tel:+5553991301916', '_self');
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-orange-500">Guincho 24 Horas</span><br />
            em Pelotas - RS
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Socorro automotivo rápido e confiável • Atendimento emergencial em toda Pelotas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={handleCall}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 transition-all transform hover:scale-105 shadow-2xl"
            >
              <Phone size={24} />
              LIGAR AGORA: (53) 99130-1916
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Clock size={48} className="text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">24 Horas</h3>
              <p>Atendimento 7 dias por semana</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Truck size={48} className="text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Equipamentos Modernos</h3>
              <p>Frota preparada para qualquer situação</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <MapPin size={48} className="text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Toda Pelotas</h3>
              <p>Cobertura completa na região</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
