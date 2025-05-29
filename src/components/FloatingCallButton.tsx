
import { Phone } from 'lucide-react';

const FloatingCallButton = () => {
  const phoneNumber = "5553991301916";
  
  const handleCall = () => {
    window.open(`tel:+${phoneNumber}`, '_self');
  };

  return (
    <button
      onClick={handleCall}
      className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-2xl z-50 transition-all duration-300 transform hover:scale-110 animate-pulse"
      aria-label="Ligar para Guinchos Bogotá"
    >
      <Phone size={28} className="animate-bounce" />
    </button>
  );
};

export default FloatingCallButton;
