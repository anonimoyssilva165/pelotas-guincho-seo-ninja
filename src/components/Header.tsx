
import { Phone, MapPin, Clock } from 'lucide-react';

const Header = () => {
  const handleCall = () => {
    window.open('tel:+5553991301916', '_self');
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/5321ca35-2247-4575-84dd-00c2611444fc.png" 
              alt="Guinchos Bogotá - Guincho 24h Pelotas"
              className="h-16 w-auto"
            />
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={16} className="text-orange-500" />
              <span>Av. Fernando Osório, 245 - Centro, Pelotas - RS</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={16} className="text-orange-500" />
              <span>24 Horas • 7 dias da semana</span>
            </div>
            
            <button
              onClick={handleCall}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-bold transition-colors"
            >
              <Phone size={18} />
              (53) 99130-1916
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
