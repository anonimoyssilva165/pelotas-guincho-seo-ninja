
import { Wrench, Fuel, Car, Shield, Truck, Battery } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Truck size={48} />,
      title: "Guincho e Reboque",
      description: "Transporte seguro do seu veículo para oficina ou destino desejado"
    },
    {
      icon: <Fuel size={48} />,
      title: "Pane Seca",
      description: "Abastecimento emergencial quando você fica sem combustível"
    },
    {
      icon: <Battery size={48} />,
      title: "Bateria Descarregada",
      description: "Auxílio com chupeta ou troca de bateria no local"
    },
    {
      icon: <Car size={48} />,
      title: "Pneu Furado",
      description: "Troca de pneu rápida e segura em qualquer lugar"
    },
    {
      icon: <Wrench size={48} />,
      title: "Problemas Mecânicos",
      description: "Socorro técnico para pequenos reparos emergenciais"
    },
    {
      icon: <Shield size={48} />,
      title: "Destravamento",
      description: "Abertura de veículos trancados com chaves no interior"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nossos Serviços de <span className="text-orange-500">Socorro Automotivo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de guincho e socorro automotivo em Pelotas e região
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-orange-500 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
