
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const Contact = () => {
  const handleCall = () => {
    window.open('tel:+5553991301916', '_self');
  };

  return (
    <section id="contato" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Entre em <span className="text-orange-500">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Precisando de guincho em Pelotas? Entre em contato conosco agora mesmo!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Telefone</h3>
            <p className="text-gray-300">(53) 99130-1916</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Endereço</h3>
            <p className="text-gray-300">Av. Fernando Osório, 245<br />Centro, Pelotas - RS</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Horário</h3>
            <p className="text-gray-300">24 horas<br />7 dias por semana</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Cobertura</h3>
            <p className="text-gray-300">Pelotas e região<br />Rio Grande do Sul</p>
          </div>
        </div>
        
        <div className="text-center bg-orange-500 rounded-lg p-8">
          <h3 className="text-3xl font-bold mb-4">Precisa de Guincho Agora?</h3>
          <p className="text-xl mb-6">Ligue para nós e resolva sua emergência rapidamente!</p>
          <button
            onClick={handleCall}
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-3 mx-auto transition-colors"
          >
            <Phone size={24} />
            (53) 99130-1916
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
