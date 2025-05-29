
import { Clock, Users, Award, Phone, Shield, Star } from 'lucide-react';

const WhyChoose = () => {
  const handleCall = () => {
    window.open('tel:+5553991301916', '_self');
  };

  const benefits = [
    {
      icon: <Clock size={32} />,
      title: "Rapidez",
      description: "Chegamos em até 30 minutos",
      color: "bg-blue-500"
    },
    {
      icon: <Users size={32} />,
      title: "Experiência",
      description: "Equipe especializada",
      color: "bg-green-500"
    },
    {
      icon: <Award size={32} />,
      title: "Qualidade",
      description: "Equipamentos modernos",
      color: "bg-purple-500"
    },
    {
      icon: <Shield size={32} />,
      title: "Confiança",
      description: "Serviço garantido",
      color: "bg-red-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2 mb-4">
            <Star size={16} className="text-orange-500" />
            <span className="text-orange-500 font-semibold text-sm">Por que nos escolher?</span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Guinchos <span className="text-orange-500">Bogotá</span>
          </h2>
          <p className="text-gray-600">
            Referência em socorro automotivo em Pelotas
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-5 text-center hover:shadow-lg transition-all duration-300">
              <div className={`${benefit.color} rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-3`}>
                <div className="text-white">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-center text-white">
          <h3 className="text-xl font-bold mb-2">Precisa de Socorro?</h3>
          <p className="mb-4 text-orange-100">Ligue agora e resolva rapidamente!</p>
          <button
            onClick={handleCall}
            className="w-full bg-white text-orange-500 py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all transform hover:scale-105"
          >
            <Phone size={20} />
            (53) 99130-1916
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
