
import { Clock, Users, Award, Phone } from 'lucide-react';

const WhyChoose = () => {
  const handleCall = () => {
    window.open('tel:+5553991301916', '_self');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Por que escolher <span className="text-orange-500">Guinchos Bogotá?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos referência em serviços de guincho em Pelotas há anos, oferecendo qualidade e confiabilidade
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Clock size={40} className="text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Rapidez</h3>
            <p className="text-gray-600">Chegamos ao local em até 30 minutos</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Users size={40} className="text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Experiência</h3>
            <p className="text-gray-600">Equipe especializada e experiente</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Award size={40} className="text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Qualidade</h3>
            <p className="text-gray-600">Equipamentos modernos e seguros</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Phone size={40} className="text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Disponibilidade</h3>
            <p className="text-gray-600">Atendimento 24h todos os dias</p>
          </div>
        </div>
        
        <div className="text-center">
          <button
            onClick={handleCall}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 mx-auto transition-all transform hover:scale-105 shadow-lg"
          >
            <Phone size={24} />
            SOLICITE SEU GUINCHO AGORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
