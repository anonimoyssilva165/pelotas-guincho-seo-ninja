
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const handleCall = () => {
    window.open('tel:+5553991301916', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5553991301916?text=Olá, preciso de guincho!', '_blank');
  };

  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">
            Entre em <span className="text-orange-500">Contato</span>
          </h2>
          <p className="text-gray-300">
            Atendimento 24h para sua emergência
          </p>
        </div>
        
        <div className="space-y-4 mb-8">
          <div className="bg-gray-800 rounded-2xl p-5 flex items-center gap-4">
            <div className="bg-orange-500 rounded-xl p-3">
              <Phone size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Telefone</h3>
              <p className="text-gray-300">(53) 99130-1916</p>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-5 flex items-center gap-4">
            <div className="bg-orange-500 rounded-xl p-3">
              <MapPin size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Endereço</h3>
              <p className="text-gray-300 text-sm">Av. Fernando Osório, 245<br />Centro, Pelotas - RS</p>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-5 flex items-center gap-4">
            <div className="bg-orange-500 rounded-xl p-3">
              <Clock size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Horário</h3>
              <p className="text-gray-300">24 horas • 7 dias</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={handleCall}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg"
          >
            <Phone size={20} />
            LIGAR AGORA
          </button>
          
          <button
            onClick={handleWhatsApp}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg"
          >
            <MessageCircle size={20} />
            WHATSAPP
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
