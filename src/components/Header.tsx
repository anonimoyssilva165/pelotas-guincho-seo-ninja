
import { Phone, MapPin, Menu } from 'lucide-react';

const Header = () => {
  const handleCall = () => {
    window.open('tel:+5553991301916', '_self');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/5321ca35-2247-4575-84dd-00c2611444fc.png" 
              alt="Guinchos Bogotá"
              className="h-10 w-auto"
            />
          </div>
          
          {/* Call button */}
          <button
            onClick={handleCall}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">Ligar</span>
          </button>
        </div>
        
        {/* Location info - mobile */}
        <div className="mt-2 flex items-center gap-2 text-xs text-gray-600">
          <MapPin size={14} className="text-orange-500" />
          <span>Av. Fernando Osório, 245 - Centro, Pelotas</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
