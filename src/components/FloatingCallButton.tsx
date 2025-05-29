
import { Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const FloatingCallButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleCall = () => {
    window.open('tel:+5553991301916', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5553991301916?text=Olá, preciso de guincho!', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="mb-4 space-y-3 animate-fade-in">
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-2xl shadow-2xl transition-all transform hover:scale-105"
          >
            <MessageCircle size={20} />
            <span className="font-semibold">WhatsApp</span>
          </button>
          
          <button
            onClick={handleCall}
            className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-2xl shadow-2xl transition-all transform hover:scale-105"
          >
            <Phone size={20} />
            <span className="font-semibold">Ligar</span>
          </button>
        </div>
      )}
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Opções de contato"
      >
        {isExpanded ? (
          <div className="w-7 h-7 flex items-center justify-center">
            <div className="w-6 h-0.5 bg-white transform rotate-45 absolute"></div>
            <div className="w-6 h-0.5 bg-white transform -rotate-45 absolute"></div>
          </div>
        ) : (
          <Phone size={28} className="animate-pulse" />
        )}
      </button>
    </div>
  );
};

export default FloatingCallButton;
