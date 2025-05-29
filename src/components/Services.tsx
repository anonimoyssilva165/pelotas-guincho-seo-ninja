
import { Wrench, Fuel, Car, Shield, Truck, Battery } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Truck size={40} />,
      title: "Guincho e Reboque",
      description: "Transporte seguro para oficina ou destino"
    },
    {
      icon: <Fuel size={40} />,
      title: "Pane Seca",
      description: "Abastecimento emergencial rápido"
    },
    {
      icon: <Battery size={40} />,
      title: "Bateria Descarregada",
      description: "Auxílio com chupeta ou troca"
    },
    {
      icon: <Car size={40} />,
      title: "Pneu Furado",
      description: "Troca rápida e segura"
    },
    {
      icon: <Wrench size={40} />,
      title: "Problemas Mecânicos",
      description: "Socorro técnico emergencial"
    },
    {
      icon: <Shield size={40} />,
      title: "Destravamento",
      description: "Abertura de veículos trancados"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Nossos <span className="text-orange-500">Serviços</span>
          </h2>
          <p className="text-gray-600">
            Socorro completo quando você mais precisa
          </p>
        </div>
        
        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 rounded-xl p-3 flex-shrink-0">
                  <div className="text-orange-500">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
